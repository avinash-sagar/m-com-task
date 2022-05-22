// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Box } from '@mui/material';
import { ProductListing } from './components/ProductListing';

function App() {
  return (
    <Box >
     <Header/>
     <ProductListing/>
    </Box>
  );
}

export default App;
