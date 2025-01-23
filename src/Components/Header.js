import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { CART_LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import DateContext from "../utils/DateContext";
import { useSelector } from "react-redux";
/*
-header
--logo
--search
--nav items
--cart logo
*/

const Header = () => {
  const {date} = useContext(DateContext);

  //Subscribing to the store using the selector
  const cartItems = useSelector((store)=>store.cart.items);
  // console.log(cartItems)
  return (
    <div id="Header">
      <div>
        <img id="Logo" src={LOGO_URL} />
      </div>

      <div id="title">Food Express</div>
      <div>
        <ul id="Nav_items">
          <li><Link className='links' to="/">Home</Link></li>
          <li><Link className='links' to="/get-app">Get the app</Link></li>
        </ul>
      </div>
      <div className="cart-count-container">
      <div className="cart-count">{cartItems.reduce((total,item)=>total+item.quantity,0)}</div>
      <Link className='links' to="/cart"><img id="cart" src={CART_LOGO_URL} /></Link>
      </div>

      <div className="header-date">
         {date}
      </div>
    </div>
  );
};

export default Header;
