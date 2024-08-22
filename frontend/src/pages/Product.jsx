import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Rating,
    Stack,
    Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from '../components/Image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DiscountCard from '../components/DiscountCard';
import { escapeDanger } from '../utils/function';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Carousel from 'react-material-ui-carousel';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const fetchProduct = useCallback(async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/products/${id}/`);
            setProduct(data);
        } catch (err) {
            console.error('Failed to fetch product ', err);
        }
    }, []);

    const discount = useMemo(
        () => Math.floor((product.price / product.original_price) * 100),
        [product.price, product.original_price]
    );

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    return (
        <Container maxWidth='xl' sx={{ my: 5 }}>
            <Grid container spacing={5} my={4}>
                <Grid item xs={12} md textAlign='center'>
                    <Carousel navButtonsAlwaysVisible indicators={false}>
                        {product.image_urls
                            ? product.image_urls.map(image => (
                                  <Image src={image} sx={{ width: '100%' }} />
                              ))
                            : []}
                    </Carousel>
                </Grid>
                <Grid item xs={12} md>
                    <Typography variant='h5' fontWeight={500} mb={0.5}>
                        {product.name}
                    </Typography>

                    <Stack direction={'row'} alignItems='center' spacing={1} mb={0.5}>
                        <Typography variant='h4' fontSize={28} fontWeight={500}>
                            ₹{product.price}
                        </Typography>

                        <Typography variant='h5' fontSize={23} color={'#008c2d'} fontWeight={500}>
                            {discount || 0}% off
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems='center' spacing={1} mb={4}>
                        <Typography
                            variant='h4'
                            fontSize={18}
                            color={'text.secondary'}
                            fontWeight={500}
                            sx={{ textDecoration: 'line-through' }}>
                            MRP: ₹{product.original_price}
                        </Typography>

                        <Typography
                            variant='h5'
                            fontSize={16}
                            color={'text.secondary'}
                            fontWeight={500}>
                            Inclusive of all Taxes
                        </Typography>
                    </Stack>

                    <DiscountCard />

                    <Typography variant='h6' fontWeight={500} my={2}>
                        Select Size
                    </Typography>

                    <Grid container alignItems='center' spacing={2}>
                        {product.sizes &&
                            product.sizes.map(size => (
                                <Grid item xs key={size}>
                                    <Box
                                        p={1}
                                        border='1px solid'
                                        textAlign='center'
                                        borderColor='text.secondary'
                                        borderRadius={10}>
                                        <Typography variant='subtitle1'>{size}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                    </Grid>

                    <Box
                        bgcolor='background.sticker2'
                        p={0.5}
                        my={2}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        gap={1}>
                        <AccessTimeIcon sx={{ fontSize: 18 }} />
                        <Typography variant='subtitle1' fontWeight={500}>
                            Lowest price in last 30 days
                        </Typography>
                    </Box>

                    <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        sx={{ borderRadius: 20, py: 1, fontSize: 20 }}>
                        Add to Cart
                    </Button>

                    <Image
                        src='https://nobero.com/cdn/shop/files/trust_banner_2.svg?v=1680263466'
                        sx={{ width: '100%', mt: 5 }}
                    />

                    <Box p={3}>
                        <Typography variant='h5' fontWeight={500} my={2}>
                            Key Highlights
                        </Typography>

                        <Grid container justifyContent='space-between' alignItems='center'>
                            <Grid item xs>
                                <Typography
                                    variant='subtitle1'
                                    fontWeight={500}
                                    color='text.secondary'>
                                    Fit
                                </Typography>
                                <Typography variant='subtitle1' fontSize={18} fontWeight={400}>
                                    {product.fit}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography
                                    variant='subtitle1'
                                    fontWeight={500}
                                    color='text.secondary'>
                                    Fabric
                                </Typography>
                                <Typography variant='subtitle1' fontSize={18} fontWeight={400}>
                                    {product.fabric}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 2 }} />

                        <Grid container justifyContent='space-between' alignItems='center'>
                            <Grid item xs>
                                <Typography
                                    variant='subtitle1'
                                    fontWeight={500}
                                    color='text.secondary'>
                                    Neck
                                </Typography>
                                <Typography variant='subtitle1' fontSize={18} fontWeight={400}>
                                    {product.neck}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography
                                    variant='subtitle1'
                                    fontWeight={500}
                                    color='text.secondary'>
                                    Sleeve
                                </Typography>
                                <Typography variant='subtitle1' fontSize={18} fontWeight={400}>
                                    {product.sleeve}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 2 }} />

                        <Grid container justifyContent='space-between' alignItems='center'>
                            <Grid item xs>
                                <Typography
                                    variant='subtitle1'
                                    fontWeight={500}
                                    color='text.secondary'>
                                    Pattern
                                </Typography>
                                <Typography variant='subtitle1' fontSize={18} fontWeight={400}>
                                    {product.pattern}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography
                                    variant='subtitle1'
                                    fontWeight={500}
                                    color='text.secondary'>
                                    Length
                                </Typography>
                                <Typography variant='subtitle1' fontSize={18} fontWeight={400}>
                                    {product.length}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                    </Box>

                    <Accordion
                        slotProps={{ transition: { unmountOnExit: true } }}
                        elevation={0}
                        sx={{ position: 'static' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1-content'
                            id='panel1-header'
                            sx={{ '.MuiAccordionSummary-content.Mui-expanded': { marginTop: 0 } }}>
                            <Stack direction='row' alignItems='center' spacing={2}>
                                <DescriptionOutlinedIcon />
                                <Box>
                                    <Typography
                                        variant='subtitle1'
                                        fontWeight={500}
                                        color='text.secondary'>
                                        Product Description
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary'>
                                        Manufacture, Care and Fit
                                    </Typography>
                                </Box>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box
                                dangerouslySetInnerHTML={{
                                    __html: escapeDanger(product.description),
                                }}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>

            <Typography variant='h5' color='text.secondary' textAlign='center' mt={4}>
                Customer Reviews
            </Typography>

            <Container maxWidth='md' sx={{ pb: 10 }}>
                <Stack direction='row' alignItems='center' justifyContent='space-between'>
                    <Box>
                        <Rating name='rating' defaultValue={4} />
                        <Typography variant='subtitle2'>Be the first to write a review</Typography>
                    </Box>
                    <Button variant='contained' sx={{ px: 5 }}>
                        Write a review
                    </Button>
                </Stack>
            </Container>
        </Container>
    );
};

export default Product;
