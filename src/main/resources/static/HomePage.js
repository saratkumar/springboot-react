
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

function HomePage() {

    const [methodName, setMethodName] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [requestBody, setRequestBody] = React.useState('');
    const [responseBody, setResponseBody] = React.useState('');
    const [showDiv, setShowDiv] = React.useState(false);
    const [responseHeader, setResponseHeader] = React.useState('');
    const [responseList, setResponseList] = React.useState('');


    const handleMethodChange = (event) => {
        setMethodName(event.target.value);
    }
    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    }
    const handleRequest = (event) => {
        setRequestBody(event.target.value);
    }
    const handleSubmit = evt => {
        evt.preventDefault();


        let data = { methodType: methodName, url: url, requestData: requestBody };
        setShowDiv(true);
        fetch("http://localhost:8080/test", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                setResponseBody(JSON.stringify(response));
                var head = response.data.headers;
                var arrayData = JSON.parse(response.data.data);
                var respArray = arrayData;
                setResponseHeader(JSON.stringify(head));
                setResponseList(JSON.stringify(respArray));

            })

            .catch(error => console.error("Error:", error));
    };


    const classes = useStyles();


    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <div p={2}>
                            <InputLabel id="demo-simple-select-label">Method Name</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={methodName}
                                onChange={handleMethodChange}
                            >
                                <MenuItem value={"GET"}>GET</MenuItem>
                                <MenuItem value={"POST"}>POST</MenuItem>
                                <MenuItem value={"DELETE"}>DELETE</MenuItem>
                            </Select>
                        </div>
                        <div p={4}>
                            <TextField
                                label="API URL"
                                id="margin-normal"
                                name="url"
                                onChange={handleUrlChange}
                            />
                        </div>
                        <div p={4}>
                            <TextField
                                label="Request Body"
                                id="margin-normal"
                                multiline
                                name="requestBody"
                                onChange={handleRequest}
                            />
                        </div>
                        <div p={4}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                            >
                                Submit
                        </Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
            {showDiv ? <div>

                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div p={4}>
                                <APIResponse responseBody={responseBody} responseHeader={responseHeader} responseList={responseList} />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </div> : ""}


        </div>
    );
}
