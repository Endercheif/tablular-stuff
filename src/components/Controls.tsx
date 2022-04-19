import { useState } from "react";
import { useTableDataType } from "../types";

export default function Controls({
  tableHook,
}: {
  tableHook: useTableDataType;
}) {
  let temp;
  const [name, setName] = useState<string>("");
  const [data, setData] = useState("");

  return (
    <div className="controls">
      <button
        onClick={() =>
          localStorage.setItem("table", JSON.stringify(tableHook.data))
        }
      >
        Save
      </button>
      <button
        onClick={() =>
          tableHook.setData(JSON.parse(localStorage.getItem("table") || "[]"))
        }
      >
        Load
      </button>
      <button
        onClick={() => {
          const newData = tableHook.data.slice();
          newData.push({ id: crypto.randomUUID(), table: [] });
          tableHook.setData(newData);
        }}
      >
        New Table
      </button>
      <button
        onClick={() => {
          tableHook.addPerson(name);
          temp = JSON.stringify(tableHook.data);
          tableHook.setData([]);
          tableHook.setData(JSON.parse(temp));
          setName("");
        }}
      >
        New Person
      </button>
      <input
        type="text"
        name="name"
        id="new-person"
        placeholder="person name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          tableHook.setData(JSON.parse(data as any));
        }}
      >
        Import Data
      </button>
      <input
        type="text"
        name="imp-data"
        id="imp-data"
        placeholder="import data"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
    </div>
  );
}
