import {makeStyles} from "@material-ui/core";

const UseStyles = makeStyles(() => ({

    listItem:{
        paddingLeft: 40,
        width:250,
        /* height:'auto', */
        border:'2px solid gray',
        display:'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 30rem), 1fr))',
        alignItems:'center',
        boxShadow: '#5a5050 1px 1px 14px', 
        webkitBorderRadius: '40px 0px 40px 40px',
        mozBorderRadius: '40px 0px 40px 40px',
        borderRadius: '40px 0px 40px 40px',
        marginBottom: '50px',
        textDecoration: 'none'
       /*  flexDirection: 'column', */
    },
    cards:{
        display:'flex',
        /* flexDirection:'column', */
        maxWidth: '100% ',
      /*   marginRight: 10, */
       /*  justifyContent: 'space-between',  */
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 30rem), 1fr))'
    },
})
)

export default UseStyles;
