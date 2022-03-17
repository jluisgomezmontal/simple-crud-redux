import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProducto } from '../actions/productosActions'

export const NuevoProducto = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const dispatch = useDispatch();

  const cargando = useSelector( state=> state.producto.loading)

  const agregarProducto = producto  => dispatch(crearNuevoProducto(producto))


  const submitNuevoProducto = e => {
    e.preventDefault();
      
    //validar formulario
    if(name.trim() === '' || price <1){

    }

    //varificar errores

    //creat nuevo producto
    
    agregarProducto({
      nombre:name,
      precio:price
    })
  }
  
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
             <h2 className="text-center mb-4 font-weight-bold" >
              Agregar Producto
             </h2>
             <form
              onSubmit={submitNuevoProducto}
             >
               <div className="form-group">
                <label>Nombre de Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de Producto"
                  name="nombre"
                  value={name}
                  onChange={ e => setName(e.target.value)}
                  />
               </div>
               <div className="form-group">
                <label>Precio de Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio de Producto"
                  name="precio"
                  value={price}
                  onChange={ e => setPrice(Number(e.target.value))}
                />
               </div>
               <button
               type="submit"
               className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
               >  
                Agregar 
               </button>
             </form>
             {
               cargando && <p>cargando</p>
             }
          </div>
        </div>
      </div>
    </div>
  )
}
