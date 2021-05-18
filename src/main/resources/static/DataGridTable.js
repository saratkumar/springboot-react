const e = React.createElement;

class DataGridTable extends React.Component { {
	  constructor(props) {
		    super(props);
		    this.state = { row:props.row };
		    this.state = { column:props.column };

		  }
	  render() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid  checkboxSelection
  onSelectionModelChange={(newSelection) => {
    setSelectionModel(newSelection.selectionModel);
    test(newSelection);
  }}
  selectionModel={selectionModel} rows={props.rows} columns={props.columns} />
    </div>
  );
}
}