// Synthetic Hypercar Sound Engine via Web Audio API (Zero external mp3 dependencies)
class HypercarAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private idleOsc: OscillatorNode | null = null;
  private idleGain: GainNode | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (!muted) {
      this.initCtx();
      this.startAmbientIdle();
    } else {
      this.stopAmbientIdle();
    }
  }

  public getMuted() {
    return this.isMuted;
  }

  public toggleMute() {
    this.setMuted(!this.isMuted);
    return !this.isMuted;
  }

  public playDroneWhoosh() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const bufferSize = this.ctx.sampleRate * 1.5;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(300, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.6);
    filter.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 1.4);
    filter.Q.setValueAtTime(3.0, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.4);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start();
  }

  public playW16Rev() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = "sawtooth";
    osc2.type = "sawtooth";
    subOsc.type = "triangle";

    // Quad-Turbo W16 aggressive pitch ramp (Idle 900 RPM -> 6,500 RPM)
    osc1.frequency.setValueAtTime(55, now);
    osc1.frequency.exponentialRampToValueAtTime(240, now + 0.4);
    osc1.frequency.exponentialRampToValueAtTime(80, now + 1.3);

    osc2.frequency.setValueAtTime(56.5, now);
    osc2.frequency.exponentialRampToValueAtTime(248, now + 0.4);
    osc2.frequency.exponentialRampToValueAtTime(82, now + 1.3);

    subOsc.frequency.setValueAtTime(28, now);
    subOsc.frequency.exponentialRampToValueAtTime(110, now + 0.4);
    subOsc.frequency.exponentialRampToValueAtTime(40, now + 1.3);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(2800, now + 0.4);
    filter.frequency.exponentialRampToValueAtTime(350, now + 1.3);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0.4, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.35);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);

    osc1.stop(now + 1.4);
    osc2.stop(now + 1.4);
    subOsc.stop(now + 1.4);
  }

  public playTelemetryBeep() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1800, this.ctx.currentTime);
    osc.frequency.setValueAtTime(2400, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }

  private startAmbientIdle() {
    if (!this.ctx) return;
    if (this.idleOsc) return;

    const now = this.ctx.currentTime;
    this.idleOsc = this.ctx.createOscillator();
    this.idleGain = this.ctx.createGain();

    this.idleOsc.type = "sawtooth";
    this.idleOsc.frequency.setValueAtTime(36, now); // 36 Hz sub-bass idle rumble

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(140, now);

    this.idleGain.gain.setValueAtTime(0.001, now);
    this.idleGain.gain.linearRampToValueAtTime(0.08, now + 1.0);

    this.idleOsc.connect(filter);
    filter.connect(this.idleGain);
    this.idleGain.connect(this.ctx.destination);

    this.idleOsc.start(now);
  }

  private stopAmbientIdle() {
    if (this.idleGain && this.ctx) {
      this.idleGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
    }
    setTimeout(() => {
      if (this.idleOsc) {
        try {
          this.idleOsc.stop();
          this.idleOsc.disconnect();
        } catch {}
        this.idleOsc = null;
      }
    }, 350);
  }
}

export const sound = new HypercarAudioEngine();
