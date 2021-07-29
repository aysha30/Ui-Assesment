import React from 'react'
import { Grid, useMediaQuery } from '@material-ui/core'
import Card from './card'
import food1 from '../images/food1.jpg'
import food2 from '../images/food2.jfif'
import food3 from '../images/food3.jpg'
import food4 from '../images/food4.jpg'
import Slider from "react-slick";
import { useTheme } from '@material-ui/core/styles';
import './Card.css';

const items = [[food1, "Mexican Taco"], [food2, "Chinese sizzling"], [food3, "Farmhouse Pizza"], [food4, "Chiken Burger"], 
[food1, "Mexican Taco"], [food2, "Chinese sizzling"], [food3, "Farmhouse Pizza"], [food4, "Chiken Burger"]];

export default function CardContainer() {
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    
    var settings = {
        centerMode: false,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 5,
        slideToScroll: 3,
        speed: 300,
        // lazyLoad: true,
        rows: (matches ? 1 : 2),
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    return (
        <div  >
            
            <Slider {...settings}>
                {items.map((item, idx) => (
                    <Grid item sm={6} key={idx}>
                        <Card item={item} />
                    </Grid>
                ))}
            </Slider>
        </div>
    )
}
