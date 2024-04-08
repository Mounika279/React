import { Component } from "react";

class Picture extends Component{
    state={
        Tjerry:["https://i.pinimg.com/474x/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107.jpg",
        "https://www.nicepng.com/png/detail/53-535591_jerry-jerry-tom-and-jerry-png.png",
        ]
    }
    addTjerry = () => {
        this.setState(prevState => ({
            Tjerry: [...prevState.Tjerry, "https://m.media-amazon.com/images/I/51GMqgTLOBL._AC_UF894,1000_QL80_.jpg"]
        }));
    };
    deleteTjerry = () => {
        this.setState(prevState => ({
            Tjerry: prevState.Tjerry.slice(0, -1)
        }));
    };
    reset=()=>{
        this.setState(
            {
                Tjerry: ["https://i.pinimg.com/474x/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107.jpg",
                "https://www.nicepng.com/png/detail/53-535591_jerry-jerry-tom-and-jerry-png.png"]
            }
        )
    }
    render(){
const {Tjerry}=this.state;
        return(
         <>
         <h1>Tom & Jerry</h1>
                {Tjerry.map((Tjerry, index) => (
                    <img style={{height:'200px',width:'200px'}}key={index} src={Tjerry} alt="tom" />
                ))}
   <button className="btn1" onClick={this.addTjerry}>Add Pic</button>
<button className="btn2" onClick={this.deleteTjerry}>Delete Pic</button>
<button className="btn3" onClick={this.reset}>Reset</button>
         </>
        )
    }
}
export default Picture