import { twoSum } from '../src/twoSum';

describe('2数之和', () => {
  test('输入数组[0, 1]目标值为1,输出[0, 1]', () => {
    expect(twoSum([0, 1], 1)).toStrictEqual([0, 1]);
  });
  test('输入数组[1, 1, 2]目标值为3,输出[1, 2]', () => {
    expect(twoSum([1, 1, 2], 3)).toStrictEqual([1, 2]);
  });
});
