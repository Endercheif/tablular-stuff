import "./App.scss";
import Tables from "./components/Tables";
import { useTableData } from "./utils";
import Controls from "./components/Controls";

function App() {
  const tableHook = useTableData();

  if (window.location.search && tableHook.data.length < 2) {
    let stuff = window.location.search.slice(1);
    if (stuff.length > 5) {
      console.log(stuff);
      // @ts-ignore
      tableHook.setData(JSON.parse(unescape(stuff)));
    }
  }

  return (
    <>
      <Tables {...tableHook} />
      <Controls tableHook={tableHook} />
    </>
  );
}

export default App;
