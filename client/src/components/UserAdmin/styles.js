import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
   form_content:{
    maxWidth:1024,
    paddingLeft:40,
    margin:'auto',
    backgroundColor:'black',
    borderRadius:10,
    padding:5
    
   },
   input_text:{
    backgroundColor:'black'
  },
   form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
    input_items:{
        cursor: 'pointer',
        width:'80%',
        fontSize: '25px',
        backgroundColor: 'aliceblue',
        boxShadow: '3px 4px 8px #0864B11A',
        border: '1.5px solid #616060',
    },
    form_group:{
        display:'flex',
        flexDirection: 'column',
        // margin:'5px',
        
    },
    btn_save:{
        position: 'absolute',
        backgroundColor: '#3f51b5',
        borderStyle: 'none',
        width: 100,
        height: 40,
        color: 'white',
        cursor: 'pointer'
    }
    
}));

export default useStyles;