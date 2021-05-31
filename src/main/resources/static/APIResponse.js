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


function TabPanel(props) {
	  const { children, value, index, ...other } = props;

	  return (
	    <div
	      role="tabpanel"
	      hidden={value !== index}
	      id={`simple-tabpanel-${index}`}
	      aria-labelledby={`simple-tab-${index}`}
	      {...other}
	    >
	      {value === index && (
	        <Box p={3}>
	          <Typography>{children}</Typography>
	        </Box>
	      )}
	    </div>
	  );
	}

	TabPanel.propTypes = {
	  children: PropTypes.node,
	  index: PropTypes.any.isRequired,
	  value: PropTypes.any.isRequired,
	};

	function a11yProps(index) {
	  return {
	    id: `simple-tab-${index}`,
	    'aria-controls': `simple-tabpanel-${index}`,
	  };
	}
	
	
	const useStyles = makeStyles((theme) => ({
		  root: {
		    flexGrow: 1,
		    backgroundColor: theme.palette.background.paper,
		  },
		}));	

function APIResponse(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
        <div className={classes.root}>
        <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled={props.responseList.length ? false: true}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Paper className={classes.paper}>
      <TextField
          label="JSON RESPONE"
          id="margin-normal"
          name="url"
          multiline
          value={props.responseBody}
          variant="outlined"
      /></Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
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
      </TabPanel>
      <TabPanel value={value} index={2}>
      {props.responseList.length ? <Grid item xs><Paper className={classes.paper}><MatTableTest responseList={props.responseList} /></Paper></Grid>: ''}
      </TabPanel>
            <Grid container spacing={3}>
                <Grid item xs>
                    
                </Grid>
                <Grid item xs>
                    
                </Grid>
                
            </Grid>

        </div>
    );
}