import Table from "./components/Table";
import tableData1 from "./tableData1.json";

const columns = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "Age", accessor: "age", sortable: false },
  { label: "City", accessor: "city", sortable: true, sortbyOrder: "desc" }
];

const App = () => {
  return (
    <div className="table_container">
      <h1>Assignment No. 03 GameTrain</h1>
      <Table
        caption="Render a list of users in a table.
        The table must have the following columns name, age and city.
        Each column represents a key attribute of a movie.
        Implement pagination and sorting of the table."
        data={tableData1}
        columns={columns}
      />

        <Table data={tableData1} rowsPerPage={4} />
    </div>
  );
};

export default App;
