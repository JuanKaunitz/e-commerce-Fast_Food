import React from 'react';
import { useDispatch } from "react-redux";
import { getAllProducts, orderBy } from '../../Redux/actions/actions'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Grid } from "@material-ui/core";

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
// export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid>
    <Grid>
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Filter for</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={onOrderChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="startLowerPrice">Price: Lower to highest</MenuItem>
          <MenuItem value="startHighestPrice">Price: Highest to lowest</MenuItem>
          <MenuItem value="startHighestPrice">Ranking: Most recomended</MenuItem>
          <MenuItem value="startHighestPrice">Ranking: Less recomended</MenuItem>
        </Select>
      </FormControl>
    </div>
    </Grid>
    </Grid>
  );
}

