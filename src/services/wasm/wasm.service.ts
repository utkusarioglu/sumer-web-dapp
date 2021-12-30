export class WasmService {
  private instance: any;

  public async init() {
    const module = await require("/usr/src/app/wasm/build/bin/wasm.js");
    const instance = await module.default();
    this.instance = instance;
  }

  public async lerp(...values: number[]) {
    const instance = await this.getInstance();
    return instance.lerp(...values);
  }

  public async getInstance() {
    if (!this.instance) {
      await this.init();
    }
    return this.instance;
  }
}

export default new WasmService();
