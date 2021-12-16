import { useReducer, useEffect, createContext } from "react";
import {carrinhoReducer} from "../Reducers/carrinhoReducer"

export const CarrinhoContext = createContext()

const CarrinhoContextProvider = ({children}) =>{

        const [cartItems,dispatch] = useReducer(carrinhoReducer,[],()=>{
          const localData = localStorage.getItem('cartItems');
          return localData ? JSON.parse(localData) : [];
        });

        useEffect(()=>{
          localStorage.setItem('cartItems',JSON.stringify(cartItems))
        },[cartItems])
      
        const addItem = (item)=> dispatch({type: "Adicionar Item",payload:item})
        const removerItem = (item)=> dispatch({type: "Remover Item", payload:item})
        return(
          <CarrinhoContext.Provider value={{cartItems,addItem, removerItem}}>
            {children}
          </CarrinhoContext.Provider>
        )
      }
      
      export default CarrinhoContextProvider;

