import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from './Image';

const DiscountCard = () => {
    return (
        <Box
            sx={{
                border: '1px solid #d0c492',
                borderRadius: '12px',
                p: 2,
                backgroundColor: 'background.sticker',
            }}>
            <Stack direction='row' spacing={1} alignItems='flex-start'>
                <Image src='/discount-icon.svg' />
                <Box>
                    <Typography variant='subtitle2' color='secondary.main'>
                        Shop For ₹1497/- Get Flat 10% Off
                    </Typography>
                    <Typography variant='body2'>Use Code: FLAT10</Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default DiscountCard;
