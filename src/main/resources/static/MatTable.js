const {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} = MaterialUI;

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const headers = [];





const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function mapHeaderInfo(camelCase) {
    if (!camelCase) {
        return '';
    }

    var pascalCase = camelCase.charAt(0).toUpperCase() + camelCase.substr(1);
    return pascalCase
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .replace(/([a-z])([0-9])/gi, '$1 $2')
        .replace(/([0-9])([a-z])/gi, '$1 $2');
}
function MatTable() {
    const classes = useStyles();
    const [listOfHeaders, setListOfHeaders] =React.useState([]);
    const [listOfUsers, setListOfUsers] = React.useState([]);
    React.useEffect(() => {
    	if(!listOfHeaders || !listOfHeaders.length){
    		fetch('http://localhost:8080/userdetails')
            .then(response => response.json())
            .then(data => {
                if(data && data.length) {
                    const headers = [];
                    Object.entries(data[0]).map(([key, value]) => headers.push({field:key, headerName: mapHeaderInfo(key), width:300}));
                    setListOfHeaders(headers);
                }
                setListOfUsers(data);
            }).catch(err => console.log(err));
    	}
    
},[]);
    
    return (
        <div>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {listOfHeaders.map((header, index) => {
                            return (<TableCell key={index}>
                                     {
                                    	 header.headerName 
                                     }
                                         </TableCell>
                                           )
                                     })}
                    </TableRow>
                </TableHead>
                <TableBody>
                {listOfUsers.map((user, index) => {
                	  return (<TableRow key={index}>
                	          { listOfHeaders.map(attribute => { return (<TableCell>{user[attribute.field]}</TableCell>)})}
                	          </TableRow>)
                	})}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}