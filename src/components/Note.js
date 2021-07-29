import { Typography, useMediaQuery } from '@material-ui/core'
import React from 'react'
import { useTheme } from '@material-ui/core/styles';

export default function Note() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <>
            <Typography align="left" style={{color: '#959595', width: 240, marginLeft: 20, fontSize: (matches ? 20 : 15)}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </Typography>    
            <hr style={{borderTop: '4px solid #fe4d50', width:60, marginLeft: 20 }} />
            
            </>
    );
}
