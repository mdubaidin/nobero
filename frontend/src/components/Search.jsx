import { FormControl, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { styled } from '@mui/material/styles';

const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '200px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: 4,
}));

const IconWrapperLeft = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        [theme.breakpoints.up('sm')]: {
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        },
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

// location.search.slice(location.search.indexOf('q=') + 2) ||
const SearchBar = ({ sx }) => {
    return (
        <SearchWrapper sx>
            <IconWrapperLeft>
                <SearchIcon sx={{ color: 'text.primary' }} fontSize='small' />
            </IconWrapperLeft>
            <FormControl fullWidth>
                <StyledInputBase sx={{ flex: 1 }} placeholder='Search...' />
            </FormControl>
        </SearchWrapper>
    );
};

export default SearchBar;
