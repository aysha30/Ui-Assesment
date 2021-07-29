import React from 'react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';

export default function Card({ item }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <div>
            <Paper style={{height:200, width: (matches ? 160 : 140), padding: '10px 10px', 
            boxShadow: '0px 10px 20px #ddd', borderRadius: 25, marginTop: '20px', 
            marginRight: '10px', marginLeft: '10px', marginBottom: '25px'}}>
                <img style={{width: "100%", borderRadius: 100}} src={item[0]} alt="food" />
                <Typography style={{fontWeight: 700, fontSize: 17, padding: '10px 0px'}} >
                    {item[1]}
                </Typography>
            </Paper>
        </div>
    )
}
