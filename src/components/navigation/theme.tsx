import {
    createTheme
} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        common:{
            white: "#fffff"
        }
    },
    typography: {
        h3: {
            fontweight: 300
        }
    }

});

export default theme;