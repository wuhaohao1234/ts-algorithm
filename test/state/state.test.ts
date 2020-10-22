import { State, Context } from '../../src/state/state'

class SlighLightClass extends State {
  protected context!: Context;
  public slightLight(): void {
    console.log("state in SlighLightClass, I will change state to         highLight");
    //切换到新的状态
  }

  public highLight(): void {
    console.log("hightstate state in SlighLightClass");
  }

  public close(): void {
    console.log("close state in SlighLightClass");
  }
}
class ColseClass extends State {
  protected context!: Context;
  public slightLight(): void { }

  public highLight() {
    console.log("highLight in HighLightClass");
  }
  public close(): void {
    console.log("state in closeClass, I will change state to slight");
    this.context.transitionTo(new SlighLightClass());
  }
}

class HighLightClass extends State {
  protected context!: Context;
  public slightLight(): void {
    console.log("slight state in HighLightClass");
  }

  public highLight(): void {
    console.log("highLight state in HighLightClass");
  }
  public close(): void {
    console.log("state in hightLight, I will change state to close");
    this.context.transitionTo(new ColseClass());
  }
}

describe('测试context', () => {
  test("basic", () => {
    const context = new Context(new ColseClass())
  });
})

const context = new Context(new ColseClass())