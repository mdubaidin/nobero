import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {
    Button,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from './Image';
import SearchBar from './Search';
import CloseIcon from '@mui/icons-material/Close';

const NavLinks = [
    'Men',
    'Women',
    'Classic T-Shirts',
    'Oversized T-Shirts',
    'Fashion Joggers',
    'Hoodies',
];

export default function Navbar() {
    const [drawer, setDrawer] = React.useState(false);

    const toggleDrawer = () => setDrawer(!drawer);

    const drawerItem = (
        <Box display={'flex'} flexDirection='column' minHeight={'100vh'}>
            <Box
                sx={{
                    minHeight: '80px',
                    p: 2,
                }}>
                <Grid container alignItems='center' columnSpacing={1}>
                    <Grid item>
                        <IconButton
                            onClick={toggleDrawer}
                            edge='start'
                            sx={{
                                ml: 0.2,
                                mr: 1,
                            }}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs textAlign='center'>
                        <Image
                            src='https://nobero.com/cdn/shop/files/Nobero_logo_1_2.svg?v=1694697396'
                            sx={{ height: '32px' }}
                        />
                    </Grid>

                    <Grid item>
                        <IconButton>
                            <ShoppingBagOutlinedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ mb: 1 }} />

            <List sx={{ flexGrow: 1 }}>
                {NavLinks.map(item => (
                    <ListItem
                        key={item}
                        sx={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            cursor: 'pointer',
                        }}>
                        <Typography
                            variant='subtitle2'
                            sx={{
                                mx: 2,
                                fontWeight: 600,
                                fontSize: 14,
                            }}>
                            {item}
                        </Typography>
                        <Divider sx={{ my: 2, width: '100%' }} />
                    </ListItem>
                ))}
            </List>

            <Button
                variant='contained'
                color='primary'
                sx={{ borderRadius: 20, py: 1, px: 10, fontSize: 16, alignSelf: 'center', mb: 2 }}>
                Login In or Sign Up
            </Button>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='fixed'
                sx={{
                    backgroundColor: 'background.paper',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
                elevation={0}>
                <Toolbar
                    sx={{
                        '&': {
                            minHeight: '80px',
                            px: { xs: 2, xm: 12 },
                        },
                    }}>
                    <Grid container alignItems='center' columnSpacing={1}>
                        <Grid item sx={{ display: { xm: 'none' } }}>
                            <IconButton
                                onClick={toggleDrawer}
                                edge='start'
                                sx={{
                                    ml: 0.2,
                                    mr: 1,
                                }}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs xm={1} textAlign={{ xs: 'center', xm: 'left' }}>
                            <Image
                                src='https://nobero.com/cdn/shop/files/Nobero_logo_1_2.svg?v=1694697396'
                                sx={{ height: '32px' }}
                            />
                        </Grid>

                        <Grid
                            item
                            xs
                            sx={{
                                display: { xs: 'none', xm: 'flex' },
                            }}>
                            {NavLinks.map(item => (
                                <ListItem
                                    disablePadding
                                    key={item}
                                    sx={{ width: 'auto', cursor: 'pointer' }}>
                                    <Typography
                                        variant='subtitle1'
                                        color='primary.main'
                                        sx={{
                                            mx: 2,
                                            fontWeight: 600,
                                            fontSize: 14,
                                        }}>
                                        {item}
                                    </Typography>
                                </ListItem>
                            ))}
                        </Grid>

                        <Grid item display='flex' alignItems='center'>
                            <Box sx={{ display: { xs: 'none', xm: 'flex' } }}>
                                <SearchBar />
                            </Box>

                            <IconButton sx={{ display: { xm: 'none' } }}>
                                <SearchIcon />
                            </IconButton>
                            <IconButton sx={{ display: { xs: 'none', xm: 'inline-flex' } }}>
                                <PersonOutlineOutlinedIcon />
                            </IconButton>
                            <IconButton>
                                <ShoppingBagOutlinedIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Drawer
                open={drawer}
                onClose={toggleDrawer}
                sx={{ '& .MuiPaper-root': { width: '100%' } }}>
                {drawerItem}
            </Drawer>
        </Box>
    );
}
