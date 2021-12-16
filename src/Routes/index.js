import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/Pages/Home';
import Carrinho from '../components/Pages/Carrinho';

const RoutList = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="carrinho" element={<Carrinho />} />
        </Routes>
    </BrowserRouter>
)

export default RoutList;