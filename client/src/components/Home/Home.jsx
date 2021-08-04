import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Home() {
    return (
        <div>
            <div>
            <Navbar />
            </div>

            <div>
              <Footer/>  
            </div>
            
        </div>
    )
}

export default Home 



// import PrimarySearchAppBar from '../Navbar'


// import ThemeProvider from '@material-ui/styles/ThemeProvider'
// import theme from '../themeConfig'

// export const Home = () => {
//     return (
//         <ThemeProvider theme={theme}>
//             <PrimarySearchAppBar />
//         </ThemeProvider>
        
        
//     )
// }