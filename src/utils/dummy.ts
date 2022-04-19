import { TableSet } from "../types";


export const dummy: TableSet = new Array(10).fill(null).map((_, i) => ({
  id: crypto.randomUUID(),
  table: new Array(10)
    .fill(null)
    .map((_, j) => ({ id: crypto.randomUUID(), name: `item-${i}-${j}` })),
}));
