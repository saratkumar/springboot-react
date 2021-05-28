
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

function APIResponse(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField
                            label="JSON RESPONE"
                            id="margin-normal"
                            name="url"
                            multiline
                            value={props.responseBody}
                            variant="outlined"
                        /></Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <TextField
                            label="JSON Header"
                            id="margin-normal"
                            name="url"
                            multiline
                            value={props.responseHeader}
                            variant="outlined"
                        />
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        {props.responseList.length ? <MatTableTest responseList={props.responseList} /> : ""}

                    </Paper>
                </Grid>
            </Grid>

        </div>
    );
}
