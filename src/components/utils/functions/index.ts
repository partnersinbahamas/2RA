export const wait = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export function isDislayCountFormatValid(format: string) {
  const regex = /^X{1,16}$/;
  return regex.test(format);
}

export function numberFixTo(number: number | string, format: string): string {
  if (format && !isDislayCountFormatValid(format)) {
    throw new Error(
      'fixTo: fromat invalid. Please enter the correct format: X*16. Example: XXX.',
    );
  }

  return Number(number).toFixed(format?.length);
}
