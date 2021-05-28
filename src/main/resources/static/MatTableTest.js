const {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
    Card,
    CardContent,
    Grid,
    AppBar,
    Tabs,
    Box,
    Tab,
    Typography,
    MenuItem,
    InputLabel,
    Select,
    Paper
} = MaterialUI;

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const headers = [];

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
function MatTableTest(props) {
   

    const classes = useStyles();
    const [listOfHeaders, setListOfHeaders] = React.useState([]);
    const [listOfUsers, setListOfUsers] = React.useState([]);

    if (props.responseList && props.responseList.length) {
        const headers = [];
        const data = JSON.parse(props.responseList);
        if (data && data.length) {
            const headers = [];
            Object.entries(data[0]).map(([key, value]) => headers.push({ field: key, headerName: mapHeaderInfo(key), width: 300 }));
            setListOfHeaders(headers);
        }
        if (data && data.length) {
        setListOfUsers(data);
        }
        if (listOfUsers.length && listOfHeaders.length) {     
            return (
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
                                    { listOfHeaders.map(attribute => { return (<TableCell>{user[attribute.field]}</TableCell>) })}
                                </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
        }
        else {

            return (<div></div>);

        }

    }
    else {

        return (<div></div>);

    }






}