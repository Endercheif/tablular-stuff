import { useState } from "react";
import { Person as PersonType, TableSet, useTableDataType } from "../types";
import { insert, translateNamedIndex, translateNumberIndex } from ".";
import { dummy } from "./dummy";

export function useTableData(): useTableDataType {
  const [data, setData] = useState<TableSet>(dummy);

  (window as any).data = data;

  return {
    data,
    moveTo(args: {
      id: string;
      source: string;
      destination?: string;
      index?: number;
    }) {
      if (!args.destination || args.index === undefined) return;

      let item: PersonType;

      const source = translateNamedIndex(args.source);
      const dest = translateNamedIndex(args.destination);

      const index = translateNumberIndex(args.index, dest);

      data[source].table = data[source].table.filter((person) => {
        if (person.id === args.id) {
          item = person;
        } else return true;
      });

      if (data[dest].table.length !== 0) {
        data[dest].table = insert(data[dest].table, index, item!);
      } else {
        data[dest].table.push(item!);
      }
      setData(data);
    },
    removeTable(number: number) {
      setData([...data.slice(0, number), ...data.slice(number + 1)]);
    },
    setData,
    addPerson(name: string) {
      data[0].table.push({ id: crypto.randomUUID(), name });
    },
  };
}
