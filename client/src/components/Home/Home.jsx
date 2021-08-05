import React from 'react';
import Footer from '../Footer/Footer';
import GridCardsProducts from '../cards/CardsProducts';

function Home() {
    return (
        <div>        
            <div>
                <GridCardsProducts/>
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