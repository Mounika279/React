import { useNavigate } from "react-router-dom";
import Header from "../16apr comp-nav/header";

const Invalid = () => {
  const navigate=useNavigate()

  const NavigateToHome=()=>{
    const loginSucess=true
    if(loginSucess){
      navigate("/")
    }else{
      console.log("wrong page")
    }
   
  }

  return (
    <>
      <Header />
      <img src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
        alt="image"
        style={{ width: "100%", height: "800px", objectFit: "cover" }}
      />
      <button onClick={NavigateToHome}>Go To Home</button>
    </>
  );
};

export default Invalid;
