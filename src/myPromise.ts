type resolve = (result: any) => any;
type reject = (result: any) => any;
export class MyPromise {
    public state = 'pending';
    private succeed: any = null;
    private fail: any = null;
    constructor(fn: Function) {
        fn(this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(result: any) {
        setTimeout(() => {
            this.state = 'fulfilled';
            this.succeed(result);
        }, 0);
    }
    reject(result: any) {
        setTimeout(() => {
            this.state = 'rejected';
            this.fail(result);
        }, 0);
    }
    then(resolve: resolve, reject?: reject) {
        this.succeed = resolve;
        this.fail = reject;
    }
}
