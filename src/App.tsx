import "./App.scss";
import Tables from "./components/Tables";
import { useTableData } from "./utils";
import Controls from "./components/Controls";

function App() {
  const tableHook = useTableData();
  return (
    <>
      <Tables {...tableHook} />
      <Controls tableHook={tableHook} />
    </>
  );
}

export default App;
