import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../nav16apr.js/home";
import ContactScreen from "../nav16apr.js/contact";
import ServiceScreen from "../nav16apr.js/services";
import BookingScreen from "../nav16apr.js/booking";
import Invalid from "../nav16apr.js/invalid";
import ReciepeDetail from "../17apr 2024/reciepedetail";
import { createContext, useState } from "react";
import Cart from "../nav16apr.js/Cart";
// import Signup from "../signup/signup"; // Assuming you have a Login component
// import Login from "../login/login";

export const DataShare = createContext();

const Navigation = () => {
    const [cartItems, setCartItems] = useState([]);
    // const [signup, setSignup] = useState(false);
    // const[login,setLogin]=useState(false)

    const AddtoCart = (eachItem) => {
        setCartItems((prevCartItems) => [...prevCartItems, eachItem]);
    };

    const removecart = (index) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems];
            updatedCartItems.splice(index, 1);
            return updatedCartItems;
        });
    };

    // const Login =()=>{
    //     setLogin(true)
    // }
    // const Signup =()=>{
    //     setSignup(true)
    // }
  
    return (
        <DataShare.Provider
            value={{
                cartItems,
                AddtoCart,
                removecart,
            }}
        >
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeScreen/>}/>
                        <Route path="/contact" element={<ContactScreen />} />
                        <Route path="/service" element={<ServiceScreen />} />
                        <Route path="/booking" element={<BookingScreen />} />
                        <Route path="*" element={<Invalid />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/:id/:reciepename" element={<ReciepeDetail />} />
                    </Routes>
                
            </BrowserRouter>

        </DataShare.Provider>
    );
};

export default Navigation;
