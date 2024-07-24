export const wait = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export function isDislayCountFormatValid(format: string) {
  const regex = /^X{1,16}$/;
  return regex.test(format);
}
