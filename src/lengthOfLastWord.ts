export const lengthOfLastWord = (str: string) => {
    let arr = str.split(' ')
    if(arr.length > 1) {
      str = arr[arr.length -1]
    }
    return str.length
}