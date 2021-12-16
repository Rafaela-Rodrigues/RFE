export const carrinhoReducer = (state, action) => {
    switch (action.type){
        case "Adicionar Item": 
            return [...state, action.payload]
        case "Remover Item": 

        let newState = state.filter(el => el !== action.payload)
        
        return newState
        default : return state
    } 
}