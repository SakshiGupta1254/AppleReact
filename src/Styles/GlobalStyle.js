import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";


const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    "@global": {
       " .navbar .navbar-header,.navbar-collapse" :{
    float:"none",
    display:"inlineBlock",
    verticalAlign: "top",
},
".navbar-collapse " :{
        display: "block",
}
    }
})(() => null);
export default GlobalCss;