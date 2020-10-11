import {getCharacterLen } from '../src/getCharacterLen';
describe('测试字符串中某字符的个数', () => {
  test('输入 abc 与 ab返回第二个参数错误', () => {
    expect(getCharacterLen('abc', 'ab')).toBe('返回第二个参数错误')
  })
  test('输入abc与a 返回1', () => {
    expect(getCharacterLen('abc', 'a')).toBe(1)
  })
  test('输入aabc与a 返回2', () => {
    expect(getCharacterLen('aabc', 'a')).toBe(2)
  })
  test('输入Aabc与a 返回2', () => {
    expect(getCharacterLen('Aabc', 'a')).toBe(2)
  })
  test('输入Aabc与A 返回2', () => {
    expect(getCharacterLen('Aabc', 'a')).toBe(2)
  })
});
