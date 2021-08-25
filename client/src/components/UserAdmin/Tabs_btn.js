import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import GetClients from "./GetClients";
import EveryProducts from './EveryProducts'
import NewProduct from './NewProduct'
import NewCategory from './NewCategory'
import AdminCategories from './AdminCategories'
import OrdersPanel from './OrdersPanel'

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 0,
  },
  productslist:{
    backgroundColor: 'black',
  },
  getclients:{
    backgroundColor: 'black',
  },
  
}));

export default function SimpleTabs({ value, setvalue }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <TabPanel value={value} index={0}>
        <EveryProducts className={classes.productslist}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GetClients className={classes.getclients}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <NewCategory />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <NewProduct />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <AdminCategories />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <OrdersPanel />
        </TabPanel>
    </div>
  );
}
