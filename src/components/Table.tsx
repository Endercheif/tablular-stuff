import { Droppable } from "react-beautiful-dnd";
import Person from "./Person";
import * as types from "../types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Table({
  i,
  tableHook,
}: {
  i: number;
  tableHook: types.useTableDataType;
}): JSX.Element {
  const table = tableHook.data[i];

  return (
    <Droppable
      key={`${table.id}-${table.table.length}`}
      droppableId={`drop-${i}`}
      type="PERSON"
    >
      {(provided, snapshot) => (
        <div
          className={`${snapshot.isDraggingOver ? "dragging" : ""} droppable`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="title-container">
            <h3>Table {i + 1}</h3>
            <label htmlFor={`btn-remove-${i}`} style={{ display: "none" }}>
              Remove table {i + 1}
            </label>
            <button
              onClick={() => {
                tableHook.removeTable(i);
              }}
              id={`btn-remove-${i}`}
              name={`btn-remove-${i}`}
            >
              <FontAwesomeIcon icon={faXmark} className="red-icon" />
            </button>
          </div>
          {table.table.map((person, j) => (
            <Person index={j + 1000 * i} person={person} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
