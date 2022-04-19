
export interface Person {
    id: string;
    name: string;
}

export interface Table<T> {
    id: string;
    table: Array<T>
}

export type TableSet<T = Person> = Array<Table<T>>;


export type useTableDataType = {
  data: TableSet<Person>;
  moveTo(args: {
    id: string;
    source: string;
    destination?: string;
    index?: number;
  }): void;
  removeTable(number: number): void;
  setData(data: TableSet<Person>): void;
  addPerson(name: string): void;
};