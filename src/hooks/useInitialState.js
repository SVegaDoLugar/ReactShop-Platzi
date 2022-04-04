import {useState} from 'react';

//Objeto initialState con un carro vacío
const initialState = {
    cart: [],
}

const useInitialState = () =>{
    //Llamaremos los valores clave de state y setState
        //El useState por defecto tendrá el initialState
            //- el contenido del carrito -
    const [state, setState] = useState(initialState);
    //Constante que permitirá pasar un producto al carrito.
        //Payload es el producto a agregar
    const addToCart = (payload) => {
        //Con set state, le diremos que mantenga el estado de ...state
        setState({
            ...state,
            //Luego, a cart, se le dice que mantenga el estado de cart
                //-ya que puede tener otros artículos en el carrito -
            //Y agregas el payload - en este caso es el producto -
            cart: [...state.cart, payload]
        });
    };
    const removeFromCart = (payload) => {
        setState({
            ...state,
            //Lógica para quitar los elementos
            cart: state.cart.filter(items => items.id =! payload.id)
        });
    }
    return {
        //Retorna el estado, y ejecuta la función de agregar al carrito
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;