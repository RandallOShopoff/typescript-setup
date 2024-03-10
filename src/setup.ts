export function find(haystack: number[], needle: number): number {
  const copy = [...haystack];
  const sorted = copy.sort();
  console.log(needle, sorted);

  return 0;
}
