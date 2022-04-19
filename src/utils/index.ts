export function insert<T>(arr: Array<T>, index: number, item: T) {
  return [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted items
    item,
    // part of the array after the specified index
    ...arr.slice(index),
  ];
}
export function translateNumberIndex(index: number, dest: number) {
  let stringed = index.toString();
  let idx = stringed.lastIndexOf(dest.toString()) + 1;
  let number = stringed.slice(idx);
  return +number;
}
export function translateNamedIndex(index: string): number {
  return +index.slice(5);
}

export { useTableData } from "./useTableData";
export { dummy } from "./dummy";
