// modified from https://masteringjs.io/tutorials/fundamentals/compare-arrays

export const arraysSameValues = (a: string[], b: string[]): boolean =>
  Array.isArray(a) &&
  Array.isArray(b) &&
  a.length === b.length &&
  a.every((val: string) => b.includes(val));
