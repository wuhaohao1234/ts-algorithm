export const twoSum = (nums: number[], target: number) => {
  const map = new Map();
  let result: number[] = [];
  nums.forEach((item, key) => {
    const com = target - item;
    if (map.has(com)) {
      result = [map.get(com), key];
    } else {
      map.set(key, item);
    }
  });
  return result;
};
