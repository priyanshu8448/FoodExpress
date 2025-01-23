import React, { useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Feedback from "./Components/Feedback";
import ContactUS from "./Components/ContactUs";
import Dish from "./Components/Dish";
import PathError from "./Components/PathError";
import GetApp from "./Components/GetApp";
import DateContext from "./utils/DateContext";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";



const App = () => {
  const myDate = new Date();
  const [date,setDate]= useState(myDate.toDateString());

  return (
    <Provider store={appStore}>
    <DateContext.Provider value={{date,setDate}}>
      <>
      <Header />
      <Outlet/>
      <Footer />
    </>
    </DateContext.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  { path:"/",
    element:<App/>,
    children:[
    {path:"/",element:<Body/>},
    {path:"/about",element:<About/>},
    {path:"/contact",element:<ContactUS/>},
    {path:"/feedback",element:<Feedback/>},
    {path:"/dishes/:itemId",element:<Dish/>},
    {path:"/get-app",element:<GetApp/>},
    {path:"/cart",element:<Cart/>}
  ],
  errorElement:<PathError/>
}
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
