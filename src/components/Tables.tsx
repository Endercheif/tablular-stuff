import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Table from "./Table";
import { useTableData } from "../utils/useTableData";
import { useTableDataType } from "../types";

export default function Tables(tableHook: useTableDataType): JSX.Element {
  const { data, moveTo, removeTable } = tableHook;

  function onDragEnd(result: DropResult) {
    console.log(result);
    
    moveTo({
      id: result.draggableId,
      source: result.source?.droppableId,
      destination: result.destination?.droppableId,
      index: result.destination?.index,
    });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="table">
        {data.map((_, i) => (
          <Table i={i} tableHook={tableHook} />
        ))}
      </section>
    </DragDropContext>
  );
}
