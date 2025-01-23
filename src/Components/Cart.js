import { useDispatch, useSelector } from "react-redux";
import { addItems, emptyCart, removeItem } from "../utils/cartSlice";
import { useState, useEffect } from "react";
const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.quantity * 149,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(emptyCart());
  };

  const handleRemoveItem = (itemObj) => {
    // console.log("item to be removed", itemObj);

    dispatch(removeItem(itemObj));
  };

  const handleAddItem = (itemObj) => {
    // console.log("item to be add", itemObj);
    dispatch(addItems(itemObj));
  };

  return (
    <div className="cart-component">
      <h2>Your Cart Items</h2>
      {cartItems.length === 0 ? (
        <>
          <p>Sorry, Your cart is empty.</p>
          <p>Add some items and comeback later</p>
        </>
      ) : (
        <ul>
          {cartItems.map((itemObj) => (
            <li key={itemObj.id} className="cart-item">
              <div className="cart-item-name">
                {itemObj.name + " "} X {" " + itemObj.quantity}
              </div>
              <div>{149 * itemObj.quantity}₹</div>
              <button onClick={() => handleRemoveItem(itemObj)}>-</button>
              <button onClick={() => handleAddItem(itemObj)}>+</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h3>Total: {totalPrice} ₹ </h3>
      </div>
      <div className="cart-bottom-buttons">
        {cartItems.length > 0 && (
          <>
            <button onClick={handleClearCart}>Clear the Cart</button>
            <button onClick={()=>handlePayment(totalPrice)}>Proceed to Payment</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
