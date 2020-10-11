export const getCharacterLen = (str: string, s: string) => {
  if(s.length > 1) {
    return '返回第二个参数错误'
  }
  s = s.toLocaleLowerCase()
  str = str.toLocaleLowerCase()
  let arr = str.split('') 
  let num = 0
  arr.forEach(item=> {
    if(s === item) {
      num ++
    }   
  });
  return num
}