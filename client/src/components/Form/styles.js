import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>({
   form_content:{
    maxWidth:1024,
    paddingLeft:80,
    margin:'auto',
    height:800,
    backgroundColor:'#c7c9cc29',
    borderRadius:10,
    padding:5
    
   },
    input_items:{
        cursor: 'pointer',
        width:'80%',
        fontSize: '25px',
        boxShadow: '3px 4px 8px #0864B11A',
        border: '1.5px solid #616060',
    },
    form_group:{
        display:'flex',
        flexDirection: 'column',
        margin:'5px',
        
    },
    btn_save:{
        backgroundColor: '#3f51b5',
        borderStyle: 'none',
        width: 100,
        height: 40,
        color: 'white',
    }
    
}));

export default useStyles;