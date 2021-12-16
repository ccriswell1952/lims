import React from "react";
import {Box, Grid} from '@mui/material';
import ShortCutLegand from '../../components/shortCutLegand/ShortCutLegand';

    
const Home = () => {
    return ( 
        <div className="home">
            <Box>
                <Grid container spacing={3} rowSpacing={3}>
                    <Grid item xs={10}>
                        <h2>Home Page</h2>
                    </Grid>
                    <Grid item xs={2}>
                        <h2><ShortCutLegand /></h2>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Home page content goes here</p>
                    </Grid>
                </Grid>
            </Box>


        </div>
     );
}
 
export default Home;