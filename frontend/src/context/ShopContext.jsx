import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets.js"
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 8;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId) => {
        let cart = structuredClone(cartItems);

        if(cart[itemId]) {
            cart[itemId] += 1;
        }
        else{
            cart[itemId] = {};
            cart[itemId] = 1;
        }

        setCartItems(cart);
    }

    const getCount = () => {
        let count = 0;

        for(const item in cartItems){
            try{
                if(cartItems[item] > 0)
                    count += cartItems[item];
            } catch(error) {
            
        }
        } 
        return count;
    }

    const updateQuantity = async (itemId, quantity) => {
        let copy = structuredClone(cartItems);
        copy[itemId] = quantity;

        setCartItems(copy);
    }

    const getTotal = () => {
        let total = 0;
        for(const item in cartItems){
            let itemInfo = products.find(product => product.id === parseInt(item));
            try{
                if(itemInfo && cartItems[item] > 0){
                    total += itemInfo.price * cartItems[item];
            }
                    
            }catch(error){

            }
        }
        return total;
    }

    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCount, updateQuantity,getTotal, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;