import React from 'react';
import { useDispatch } from "react-redux";
import { getAllProducts, orderBy } from '../../Redux/actions/actions'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: '80px' 
  },
}));
export default function Order () {
    const dispatch = useDispatch();  

  const onOrderChange = (e) => {  
      if(e.target.value === 'null') {
        dispatch(getAllProducts())
      } else {
        dispatch(orderBy(e.target.value));
      }
    }  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
  
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Filter for</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          onChange={onOrderChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="startLowerPrice">Price: Lower to highest</MenuItem>
          <MenuItem value="startHighestPrice">Price: Highest to lowest</MenuItem>
        
        </Select>
      </FormControl>
    </div>
  
  );
}

