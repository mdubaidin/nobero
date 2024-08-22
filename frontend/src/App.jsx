import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import ThemeProvider from './theme';
import Box from '@mui/material/Box';

function App() {
    return (
        <ThemeProvider>
            <Navbar />
            <Box mt={10} />
            <Routes>
                <Route path='/' element={<Navigate to='/products' />} />
                <Route path='/products' element={<Home />} />
                <Route path='/products/:id' element={<Product />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
