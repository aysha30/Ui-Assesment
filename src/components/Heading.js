import { Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';


export default function Heading() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Typography align="left" 
            style={{padding:(matches ? "70px 50px 50px" : '30px') , fontWeight: 'bold',fontFamily: 'Playfair Display, serif', color: '#000'}} 
            variant={matches ? "h2" : "h4"}>
                What are you<br/>
                having for Lunch?
            </Typography>
        </>
    )
}
