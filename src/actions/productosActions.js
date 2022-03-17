


// Crear nuevos productos

import { clienteAxios } from "../config/axios"
import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO } from "../types"

export const crearNuevoProducto = producto => (
     async(dispatch) => {
        dispatch( agregarProducto() )
        try {
            // insertar en la apiculo
            await clienteAxios.post('/productos', producto)
            dispatch( agregarProductoExitoso(producto) )
        } catch (error) {
            console.log(error)
            dispatch( agregarProductoError(true) )
        }
    }
)

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
})

const agregarProductoExitoso = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
})

const agregarProductoError = (estado) =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado,
        
})