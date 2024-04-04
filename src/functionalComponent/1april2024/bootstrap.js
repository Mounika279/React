import CustomCard from "./reactbootstrap"
const Firstpage=()=>{
    return(
<>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>Fruits</h1>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        
       <CustomCard name={"StrawBerry"} description={"Strawberries' high levels of vitamin C and other antioxidants help reduce the risk of serious health conditions like cancer, diabetes, stroke, and heart disease. They're also an excellent source of: Magnesium."}
       imageUrL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdElgGPv9P41aa_7uyHPOGGMm-Xb5kyrCekWJqI4WYZFp_eNldSgwFhhleaf6PVbPj-rM&usqp=CAU"}
       />
       
      </div>
      <div className="col-sm-4">
      <CustomCard name={"Mango"}  description={"Mangoes are also rich in vitamin C, which is important for forming blood vessels and healthy collagen, as well as helping you heal. Mangoes are rich in beta-carotene, a pigment responsible for the yellow-orange color of the fruit. Beta-carotene is an antioxidant, just one of many found in mangoes."}
       imageUrL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oGxqdxTnSZnn560LCRgf-1ZlsKKf6IQrKUFbjD8mnA&s"}/>
      </div>
      <div className="col-sm-4">
      <CustomCard name={"Avacado"}  description={"Avocados are delicious fruits that function as a healthy fat, packed with nearly 20 different vitamins and minerals. People who regularly eat avocados have higher intakes of fiber, vitamins E and K, magnesium, and potassium than people who don't eat them. You can add avocados to sandwiches, tacos, or on top of toast"}
       imageUrL={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0gXSb4xoW6KNzXYxAmROYAOzXqADY93J1X6yfep6qw&stps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdElgGPv9P41aa_7uyHPOGGMm-Xb5kyrCekWJqI4WYZFp_eNldSgwFhhleaf6PVbPj-rM&usqp=CAU"}/>
      </div>
    </div>
  </div>
</>

    )
}
export default Firstpage