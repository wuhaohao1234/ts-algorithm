export class Context {
  private state!: State;
  constructor(state: State) {
    this.transitionTo(state)
  }
  public transitionTo(_s: State) {
    console.log(`Context: transition to ${(<any>_s).constructor.name}`);
    this.state = _s
    this.state.setContext(this)
  }
  public setSlighLight(): void {
    this.state.slightLight();
  }

  public setHightLight(): void {
    this.state.highLight();
  }

  public close(): void {
    this.state.close();
  }

}
export abstract class State {
  protected context: Context | undefined
  public setContext(_c: Context) {
    this.context = _c
  }
  public abstract slightLight(): void
  public abstract highLight(): void
  public abstract close(): void
}
