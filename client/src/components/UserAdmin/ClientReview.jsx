// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import { makeStyles } from "@material-ui/core/styles";
// import { Button, TextField, Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     // marginTop: theme.spacing(2),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     backgroundColor: "#ffff",
//   },

//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: "10px",
//     backgroundColor: "#ffff",
//   },

//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "white",
//     backgroundColor: "orange",
//   },
//   input_text: {
//     backgroundColor: "#ffff",
//   },
//   select_types: {
//     color: "black",
//     padding: "1px",
//     fontSize: "15px",
//     borderRadius: "4px",
//     borderColor: "black",
//     width: "auto",
//     backgroundColor: "#ffff",
//   },
//   label: {
//     color: "black",
//     fontSize: "18px",
//   },
// }));

// const ClientReview = () => {
//   const classes = useStyles();
//   const [input, setInput] = useState({
//     name: "",
//   });

//   const handleInputChange = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     reviews.push(input);
//   };

//   const reviews = [];

//   return (
//     <div className={styles.form_content}>
//       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
 
//       <Typography variant="h4" color="textPrimary">
//         Tell us your experience
//       </Typography>
//       {/* <TextareaAutosize aria-label="empty textarea" placeholder="Empty" /> */}
//       <form onSubmit={handleSubmit} className={classes.form}>
//         <div>
//           <label className={classes.label}></label>
//           <TextField
//             className={classes.input_text}
//             variant="outlined"
//             required
//             fullWidth
//             type="text"
//             name="name"
//             onChange={handleInputChange}
//             value={input.name}
//           />
//         </div>

//         <br></br>
//         <br></br>
//         <Button type="submit" className={classes.submit}>
//           Create
//         </Button>
//       </form>

//       <div>

//       {
//           reviews.length > 0 ? reviews.map((el) => <li>{el.name}</li>)) : null 
//       }
//       </div>
//     </div>
//   );
// };

// export default ClientReview;
