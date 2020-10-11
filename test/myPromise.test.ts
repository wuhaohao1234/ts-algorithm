import {MyPromise} from '../src/myPromise'

test("basic", () => {
  const fun = (resolve: any, reject: any) => {
    try {
      resolve(true)
    } catch (error) {
      reject(false) 
    }
  }
  new MyPromise(fun).then((res: any) => {
    expect(res).toBe(true)
  },(res: any) => {
    expect(res).toBe(false)
  })
});
