import { lengthOfLastWord } from '../src/lengthOfLastWord';
describe('测试获取字符串最后一个单词的长度', () => {
    test("传入''返回0", () => {
      expect(lengthOfLastWord('')).toBe(0);
    });
    test('传入abc返回3', () => {
      expect(lengthOfLastWord('abc')).toBe(3);
    })
    test('传入abc defg 返回4', () => {
      expect(lengthOfLastWord(`abc 

      defg`)).toBe(4);
    })
});
