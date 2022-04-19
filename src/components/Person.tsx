import { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import type { Person as PersonType } from "../types";

export default function Person({
  index,
  person,
}: {
  index: number;
  person: PersonType;
}): JSX.Element {
  const [showInputElem, setShowInputElem] = useState(false);
  const [name, setName] = useState(person.name);

  return (
    <Draggable draggableId={person.id} index={index} key={person.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className="draggable"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onDoubleClick={(e) => {
            setShowInputElem(!showInputElem);
          }}
        >
          {showInputElem ? (
            <>
              <input
                type="text"
                value={name}
                contentEditable="true"
                onChange={(e) => {
                  person.name = e.target.value;
                  setName(e.target.value);
                }}
                name={`set-name-${index}`}
                id={`set-name-${index}`}
              />
              <label htmlFor={`set-name-${index}`}></label>
            </>
          ) : (
            person.name
          )}
        </div>
      )}
    </Draggable>
  );
}
