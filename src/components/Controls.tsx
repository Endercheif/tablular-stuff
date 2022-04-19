import { useState } from "react";
import { useTableDataType } from "../types";

export default function Controls({
  tableHook,
}: {
  tableHook: useTableDataType;
}) {
  let temp;
  const [name, setName] = useState<string>("");

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
        }}
      >
        New Person
      </button>
      <input
        type="text"
        name="name"
        id="new-person"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
