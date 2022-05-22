
import { Box, Grid, } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem';
import { Button, } from '@mui/material';

export const ProductListing = () => {
   const axios = require('axios');
   const [val, setVal] = useState([])
   const [pages, setPages] = useState(1)
    useEffect(() => {

        axios({
            method: 'get',
            url: `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=${pages}&format=json`,
          })
            .then((response)=>{
                // console.log(response.data.data.products)
                setVal(response.data.data.products)
            });

    }, [val])

    const handleNext =()=>{
        window.scrollTo(0, 0)
        axios({
            method: 'get',
            url: `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=${pages+1}&format=json`,
          })
            .then((response)=>{
                setVal(response.data.data.products)
            });
        setPages(pages + 1)

    }

    const handlePrev = ()=>{
        window.scrollTo(0, 0)
        axios({
            method: 'get',
            url: `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=${pages - 1}&format=json`,
          })
            .then((response)=>{
                setVal(response.data.data.products)
            });
        setPages(pages - 1)

    }

    return (
        <Box >
            <Grid container my={10}
                sx={{
                    zIndex: '1',
                    display: 'flex',
                    justifyContent: 'space-between',

                }} >
                {
                    val?.map((data,index) => {
                        // console.log(data.product_url)
                        return <Grid key={data.id} item md={3}
                            sx={{
                                display: 'flex', justifyContent: 'center', mx: {
                                    xs: '40px',
                                    sm: '40px',
                                    md: '0px',
                                    lg: '0px'
                                }
                            }} > <ProductItem image={data.plpimaage}
                             name={data.name.slice(0,50)} 
                             navigate={data.product_url} 
                            price={data.price}
                            specialPrice={data.special_price}
                            discount={data.discount_usd}
                            />  </Grid>
                          })
                         }

            </Grid>

            <Box  sx={{
                display: 'flex',
                justifyContent: 'space-around',
                pb:'40px'
            }} >
                <Button variant='contained' disabled={pages <=1} onClick={handlePrev}
                 sx={{ bgcolor: 'white', color: 'black' }} >&larr; Prev   </Button>
                <Button variant='contained' onClick={handleNext}
                 sx={{ bgcolor: 'white', color: 'black' }} >Next &rarr; </Button>
            </Box> 
        </Box>
    )
}
