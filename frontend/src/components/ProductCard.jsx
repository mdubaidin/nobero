import React, { useMemo } from 'react';
import Image from './Image';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = props => {
    const { id, name, price, original_price, image_urls } = props.product;

    const discount = useMemo(
        () => Math.floor((price / original_price) * 100),
        [price, original_price]
    );

    return (
        <Stack
            component={Link}
            sx={{ textDecoration: 'none', color: 'inherit', height: '100%' }}
            to={`/products/${id}`}>
            <Image src={JSON.parse(image_urls)[0]} sx={{ maxHeight: 380, height: '100%' }} />
            <Box my={2}>
                <Typography
                    variant='subtitle1'
                    fontWeight={500}
                    sx={{
                        lineHeight: 1,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '1',
                        fontSize: { xs: 14, md: 16 },
                    }}>
                    {name}
                </Typography>
                <Stack direction={'row'} alignItems='center' spacing={1}>
                    <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        fontWeight={500}
                        lineHeight={1.5}>
                        ₹{price}
                    </Typography>
                    <Typography
                        variant='body2'
                        fontSize={14}
                        color='text.secondary'
                        fontWeight={500}
                        sx={{ textDecoration: 'line-through' }}>
                        ₹{original_price}
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        color={'#008c2d'}
                        fontWeight={500}
                        lineHeight={1.5}>
                        {discount}% off
                    </Typography>
                </Stack>
                <Typography variant='body2' color={'#008c2d'} fontWeight={500}>
                    Lowest price in last 30 days
                </Typography>
            </Box>
        </Stack>
    );
};

export default ProductCard;
