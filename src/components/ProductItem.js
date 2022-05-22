
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Link,
} from '@mui/material'
import React, { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// import { useNavigate } from "react-router-dom";

const ProductItem = ({ image, name, navigate, price, discount, specialPrice }) => {
    return (
        <Link href={navigate} target='_blank' sx={{
            textDecoration:'none'
        }} >
            <Card elevation={6}
                sx={{
                    height: '530px',
                    width: '300px',
                    borderRadius: '8px',
                    marginY: '30px',
                    "&:hover": {
                        transform: 'translateY(5px)',
                        transition: "300ms",
                    },
                    cursor: 'pointer',
                    backgroundColor: '#141414',
                    border: '1px solid #2B2D2F',
                    pb: '5px'
                }} >

                <BookmarkAddOutlinedIcon
                    sx={{
                        position: 'absolute'
                    }} />

                <CardMedia
                    component={'img'}
                    src={image}
                    sx={{
                        width: '100%',
                        height: '420px',

                    }}
                />

                <CardContent>
                    <Typography sx={{
                        color: 'white'
                    }} >
                        {name}
                    </Typography>
                </CardContent>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    bottom: '5px'
                }} >
                    <Box sx={{
                        display: 'flex',
                        ml: '9px'
                    }} >
                        <Typography variant='h6' sx={{
                            color: 'white'
                        }} >
                            ₹ {price}
                        </Typography>
                        <Typography sx={{
                            color: 'red',
                            fontSize: '10px'
                        }} >
                            -{specialPrice}
                        </Typography>

                        <Typography variant='h7' sx={{
                            color: 'green'
                        }} >
                            ( {discount}% Off)
                        </Typography>

                    </Box>

                    <ShoppingBagOutlinedIcon sx={{
                        width: '30px',
                        height: '30px',
                        color: 'white'
                    }} />

                </Box>
            </Card>
        </Link>
    )
}

export default ProductItem
