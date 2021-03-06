import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO } from "../types";


const initialState = {
    productos: [] ,
    error: null,
    loading: false
}

export const productosReducer = (state = initialState , action) =>{
    switch (action.type) {  
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading: true,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                productos: [...state.productos, action.payload] 
            }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload 
            }
        default:
            return state;
    }
}