export function updateSearchParams(
  searchParams: URLSearchParams,
  params: { [key: string]: string | string[] | null },
) {
  const newSearchParams = new URLSearchParams(searchParams.toString());

  Object.entries(params).forEach(([key, value]) => {
    if (value === null) {
      newSearchParams.delete(key);
    } else if (Array.isArray(value)) {
      newSearchParams.delete(key);
      value.forEach(part => {
        newSearchParams.append(key, part);
      });
    } else {
      newSearchParams.set(key, value);
    }
  });

  return newSearchParams.toString();
}
