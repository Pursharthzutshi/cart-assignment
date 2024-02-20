import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import { useEffect, useState } from 'react';
import IndividualProductsItems from './components/CategoryPage/individualProductsItems/IndividualProductsItems';
import OrdersPage from './components/CategoryPage/individualProductsItems/OrdersPage';
import Navigation from './components/Homepage/Navigation';

function App() {

  const [headerSearchBar, setHeaderSearchBar] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  const [categoryValue, setCategoryValue] = useState(JSON.parse(localStorage.getItem("categoryValue")));

  const [individualCategoryValue, setIndividualCategoryValue] = useState(JSON.parse(localStorage.getItem("individualCategoryValue")));

  const [cartItems, setCartItems] = useState([]);

  const [alreadyInCartMessage, setAlreadyInCartMessage] = useState(false);

  const [itemAddedMessage, setItemAddedMessage] = useState(false);



  useEffect(() => {
  })

  function incOrDecCartItemQuantity(selectedCartItem, quantity) {


    setCartItems((alreadAddedCartItems) => {
      return alreadAddedCartItems.map(cartItems => {
        console.log("cartItems")
        if (cartItems.id === selectedCartItem.id) {
          if (cartItems.currentQuantity > 1) {
            return {
              ...cartItems,
              currentQuantity: cartItems.currentQuantity + quantity,
            }
          }
          else if (cartItems.currentQuantity === 1 && quantity === 1) {
            return {
              ...cartItems,
              currentQuantity: cartItems.currentQuantity + 1,
            }
          }

        }


        return cartItems;
      })
    })
  }


  useEffect(() => {

    let total = cartItems.reduce((prevVal, currentVal) => {
      return prevVal + currentVal.price * currentVal.currentQuantity
    }, 0)
    setTotalPrice(total)
  })

  useEffect(() => {
    setTimeout(() => {
      setAlreadyInCartMessage(false);
    }, 3000)

  })

  useEffect(() => {
    setTimeout(() => {
      setItemAddedMessage(false);
    }, 3000)

  })

  function addItemToCart(selectedCartItem) {

    const alreadyExistingCartItem = cartItems.find((cartItem) => cartItem.id === selectedCartItem.id)

    if (alreadyExistingCartItem) {
      setAlreadyInCartMessage(true);
      setItemAddedMessage(false)
    } else {
      setAlreadyInCartMessage(false);
      setAlreadyInCartMessage(false);


      setItemAddedMessage(true)
      setCartItems((cart) => [...cart, selectedCartItem]);
    }
  }


  function removeItemFromCart(selectedItemToBeRemoved) {
    setCartItems((removeitems) => {
      return removeitems.filter((items) => {
        return selectedItemToBeRemoved.id !== items.id

      })
    }
    )
  }

  function clearAllCartItems() {
    return setCartItems([])
  }

  return (
    <div className="App">

      <Navigation />

      <Routes>

        <Route path="/" element={<Homepage headerSearchBar={headerSearchBar} setHeaderSearchBar={setHeaderSearchBar} setCategoryValue={setCategoryValue} />} />
        <Route path="/CategoryPage" element={<CategoryPage individualCategoryValue={individualCategoryValue} setIndividualCategoryValue={setIndividualCategoryValue} categoryValue={categoryValue} />} />
        <Route path="/individualProductItems" element={<IndividualProductsItems itemAddedMessage={itemAddedMessage} setItemAddedMessage={setItemAddedMessage} alreadyInCartMessage={alreadyInCartMessage} incOrDecCartItemQuantity={incOrDecCartItemQuantity} cartItems={cartItems} addItemToCart={addItemToCart} individualCategoryValue={individualCategoryValue} setIndividualCategoryValue={setIndividualCategoryValue} />} />
        <Route path="/ordersPage" element={<OrdersPage clearAllCartItems={clearAllCartItems} removeItemFromCart={removeItemFromCart} totalPrice={totalPrice} incOrDecCartItemQuantity={incOrDecCartItemQuantity} addItemToCart={addItemToCart} cartItems={cartItems} />} />

      </Routes>

    </div>
  );
}

export default App;
