class Inverter extends AudioWorkletProcessor {
  constructor(){
    super();
    this.invert = true;
    this.port.onmessage = (e) => {
      if (e.data && typeof e.data.invert === 'boolean') this.invert = e.data.invert;
    };
  }
  process(inputs, outputs){
    const input = inputs[0]?.[0];
    const output = outputs[0]?.[0];
    if (input && output) {
      const sign = this.invert ? -1 : 1;
      for (let i = 0; i < input.length; i++) output[i] = input[i] * sign;
    }
    return true;
  }
}
registerProcessor('inverter', Inverter);

class Recorder extends AudioWorkletProcessor {
  process(inputs){
    const input = inputs[0]?.[0];
    if (input) {
      let peak = 0;
      for (let i = 0; i < input.length; i++) {
        const a = Math.abs(input[i]);
        if (a > peak) peak = a;
      }
      this.port.postMessage({ t: currentTime, peak });
    }
    return true;
  }
}
registerProcessor('recorder', Recorder);
