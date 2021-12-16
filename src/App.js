import RoutList from './Routes/index';
import CarrinhoContextProvider from './ContextApi/carrinhoContext.js';

function App() {
  return (
    <CarrinhoContextProvider>
    <RoutList />
    </CarrinhoContextProvider>
  );
}

export default App;
