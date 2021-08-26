// import React from "react";
// import "./Order.css";
// import { useDispatch } from "react-redux";
// import { getAllProducts, orderBy } from '../../Redux/actions/actions'
// import { makeStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";


// const useStyles = makeStyles((theme) => ({
//   select: {

//     display: 'flex',
//     textAlignLast:'center',
//     justifyContent: 'left',
//     paddingBottom: '10px',
//     height: '34px',
//     width: '250px',
//     fontSize: '20px',
//     fontWeight: 'roboto',
// },

// order:{
//     color:'orangered',
//     FontSize: '22px',
//     marginRight: '15px',
// }
// }));

// const Order = () => {
//   const dispatch = useDispatch();  
//   const classes = useStyles();
//   const onOrderChange = (e) => {  
//     if(e.target.value === 'null') {
//       dispatch(getAllProducts())
//     } else {
//       dispatch(orderBy(e.target.value));
//     }
//   }  

//   return (
//     <div className={classes.select}>
//       <label className={classes.order}>Order </label>
//       <select  className ={classes.select} name="slct" id="slct" onChange={onOrderChange}>
//         <option defaultValue value="null">... </option>
//         <option value="startLowerPrice">Price: Lower to highest</option>
//         <option value="startHighestPrice">Price: Highest to lowest</option>
//         <option value="DESC">Ranking: Most recomended </option>
//         <option value="ASC">Ranking: Less recomended </option>
//       </select>
//     </div>
//   );
// };

// export default Order;



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

