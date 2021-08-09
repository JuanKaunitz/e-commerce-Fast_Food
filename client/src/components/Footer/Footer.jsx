import React from 'react'
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";

export default function Footer() {
  return (
      <Box 
      px= {{ xs:3, sm: 10}} 
      py={{xs: 5}}bgcolor='text.secondary'
      color='white'
      > 
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Buy in foodapp.com</Box>
              <Box>
                <Link href="/">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/">
                  Help
                </Link>
              </Box>
              <Box>
                <Link href="/">
                  More about us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} >Access </Box>
              <Box>
                <Link href="/">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" >
                  Register
                </Link>
              </Box>
              <Box>
                <Link href="/">
                  Administrator
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Social Media</Box>
              <Box>
                <Link href="/" >
                  Instagram 
                </Link>
              </Box>
              <Box>
                <Link href="/">
                 Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" >
                  Twitter
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign='center' pt={{xs:5, sm:10}} pb={{xs:5, sm: 0}}>
              FoodApp Henry Bootcamp &reg; {new Date().getFullYear()}
              </Box>
        </Container>
      </Box>
    
  );
}

/* import React from 'react'

function Footer() {
    return (
        <div>
            Soy el componente Footer 😁
        </div>
    )
}

export default Footer

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2019 Gistia
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
} 
 */
/* import React from "react";
import style from './Footer.css'


export default function Footer(){
  return (
    <div class="d-flex flex-column" className={style.footer}>
  <footer class="footer">
    <div className="row">
        <p className="col-m center"><a href="/">Home</a> |<a href="/about">Devs</a> | <a href="/">Logout</a></p>
    </div>
    <div className="row">
        <p className="col-sm">
            &copy;{new Date().getFullYear()} TECH SHOP | All rigth reserved
        </p>
    </div>
  </footer>
</div>
  );
} */
