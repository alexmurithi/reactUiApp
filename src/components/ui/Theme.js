import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue ="#0B72B9";
const arcOrange ="#FFBA60";

export default createMuiTheme({
    palette:{
        common:{
            arcBlue: `${arcBlue}`,
            arcOrange: `${arcOrange}`
        },
        primary:{
           main: `${arcBlue}`
        },
        secondary:{
          main:`${arcOrange}`
        }
    },
    typography:{
        tab:{
          fontFamily:"Raleway",
          fontWeight:700,
          textTransform:"none",
          fontSize:"1rem",
        },
        estimate:{
          fontFamily:"Pacifico",
          fontSize:"1rem",
          color:"white",
          textTransform:"none",
        }
    }
});