import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Divider,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Stack,
    Typography,
    useMediaQuery,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import Image from '../components/Image';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home = () => {
    const xm = useMediaQuery('(min-width:1024px)');
    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback(async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/api/products/');
            setProducts(data);
        } catch (err) {
            console.error('Failed to fetch products ', err);
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <Box mb={4}>
            <Image
                src={
                    xm
                        ? 'https://nobero.com/cdn/shop/files/Collection_Page_Banners_44_aa5bfa74-25bf-4050-80ab-c86e702cc635_2.webp?v=1717997913'
                        : 'https://nobero.com/cdn/shop/files/Mobile_-_Collection_Banners_67_4_ceb288a9-3c0a-4601-bba0-fbbd92b361da.webp?v=1718984280'
                }
                alt=''
                loading='lazy'
                sx={{ width: '100%' }}
            />
            <Container maxWidth='xl' sx={{ my: 4, position: 'relative' }}>
                <Typography fontSize={25} fontWeight={600}>
                    Oversized T-Shirts Collection
                </Typography>
                <Typography variant='subtitle1' fontWeight={500} mb={3}>
                    {products.length} items
                </Typography>

                <Grid container spacing={10}>
                    <Grid item xs={12} lg={3} xl={3} display={{ xs: 'none', lg: 'block' }}>
                        <Box position='sticky' top={'5rem'}>
                            <Stack
                                direction='row'
                                justifyContent='space-between'
                                alignItems='center'>
                                <Typography variant='h6' fontWeight={500}>
                                    Filter
                                </Typography>
                                <Button variant='text' color='secondary' sx={{ fontWeight: 600 }}>
                                    Clear all
                                </Button>
                            </Stack>
                            <Divider sx={{ mt: 2 }} />

                            <Accordion
                                slotProps={{ transition: { unmountOnExit: true } }}
                                elevation={0}
                                sx={{
                                    position: 'static',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                    sx={{
                                        p: 0,
                                        '.MuiAccordionSummary-content': {
                                            margin: '8px 0',
                                        },
                                        '.MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
                                    }}>
                                    <Typography
                                        variant='subtitle1'
                                        fontWeight={500}
                                        color='text.secondary'>
                                        Price
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <RadioGroup>
                                        <FormControlLabel
                                            value='1'
                                            control={<Radio />}
                                            label='Less than ₹500'
                                        />
                                        <FormControlLabel
                                            value='2'
                                            control={<Radio />}
                                            label='₹500 - ₹1000'
                                        />
                                        <FormControlLabel
                                            value='3'
                                            control={<Radio />}
                                            label='₹1000 - ₹1500'
                                        />
                                        <FormControlLabel
                                            value='4'
                                            control={<Radio />}
                                            label='₹1500 - ₹2000'
                                        />
                                        <FormControlLabel
                                            value='5'
                                            control={<Radio />}
                                            label='₹1500 - ₹2000'
                                        />
                                        <FormControlLabel
                                            value='6'
                                            control={<Radio />}
                                            label='More than ₹2000'
                                        />
                                    </RadioGroup>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                slotProps={{ transition: { unmountOnExit: true } }}
                                elevation={0}
                                sx={{
                                    position: 'static',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                    sx={{
                                        p: 0,
                                        '.MuiAccordionSummary-content': {
                                            margin: '8px 0',
                                        },
                                        '.MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
                                    }}>
                                    <Typography
                                        variant='subtitle1'
                                        fontWeight={500}
                                        color='text.secondary'>
                                        Size
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <RadioGroup>
                                        <FormControlLabel value='1' control={<Radio />} label='S' />
                                        <FormControlLabel value='2' control={<Radio />} label='M' />
                                        <FormControlLabel value='3' control={<Radio />} label='L' />
                                        <FormControlLabel
                                            value='4'
                                            control={<Radio />}
                                            label='XL'
                                        />
                                        <FormControlLabel
                                            value='5'
                                            control={<Radio />}
                                            label='XXL'
                                        />
                                        <FormControlLabel
                                            value='6'
                                            control={<Radio />}
                                            label='XXXL'
                                        />
                                    </RadioGroup>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                slotProps={{ transition: { unmountOnExit: true } }}
                                elevation={0}
                                sx={{
                                    position: 'static',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                    sx={{
                                        p: 0,
                                        '.MuiAccordionSummary-content': {
                                            margin: '8px 0',
                                        },
                                        '.MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
                                    }}>
                                    <Typography
                                        variant='subtitle1'
                                        fontWeight={500}
                                        color='text.secondary'>
                                        Fit
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <RadioGroup>
                                        <FormControlLabel
                                            value='1'
                                            control={<Radio />}
                                            label='Relax Fit'
                                        />
                                        <FormControlLabel
                                            value='2'
                                            control={<Radio />}
                                            label='Oversized Fit'
                                        />
                                    </RadioGroup>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                slotProps={{ transition: { unmountOnExit: true } }}
                                elevation={0}
                                sx={{
                                    position: 'static',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                    sx={{
                                        p: 0,
                                        '.MuiAccordionSummary-content': {
                                            margin: '8px 0',
                                        },
                                        '.MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
                                    }}>
                                    <Typography
                                        variant='subtitle1'
                                        fontWeight={500}
                                        color='text.secondary'>
                                        Pattern
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <RadioGroup>
                                        <FormControlLabel
                                            value='1'
                                            control={<Radio />}
                                            label='Printed'
                                        />
                                        <FormControlLabel
                                            value='2'
                                            control={<Radio />}
                                            label='Solid'
                                        />
                                    </RadioGroup>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                slotProps={{ transition: { unmountOnExit: true } }}
                                elevation={0}
                                sx={{
                                    position: 'static',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls='panel1-content'
                                    id='panel1-header'
                                    sx={{
                                        p: 0,
                                        '.MuiAccordionSummary-content': {
                                            margin: '8px 0',
                                        },
                                        '.MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
                                    }}>
                                    <Typography
                                        variant='subtitle1'
                                        fontWeight={500}
                                        color='text.secondary'>
                                        Availability
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <RadioGroup>
                                        <FormControlLabel
                                            value='1'
                                            control={<Radio />}
                                            label='In stock'
                                        />
                                        <FormControlLabel
                                            value='2'
                                            control={<Radio />}
                                            label='Out of stock'
                                        />
                                    </RadioGroup>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={9} xl={9}>
                        <Grid container spacing={{ xs: 0.5, lg: 2.5 }}>
                            {products.map(product => (
                                <Grid item xs={6} md={4} xl={3} key={product.id}>
                                    <ProductCard product={product} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
