import { Component } from "react";

class ButtonComponent extends Component{
    state={
        isSubscribe:true,
        text1:"Subscribe",
        text2:"Subscribed"
    }
    changeSubscribe=()=>{
        this.setState(
            {
                isSubscribe:!this.state.isSubscribe
            }
        )
    }
    render(){
        return(
<div>
<button style={{color:this.state.isSubscribe?"red":"green"}}onClick={this.changeSubscribe}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
{
this.state.isSubscribe?
<h3>Welcome user</h3>:
<h3>Please login</h3>
    }
</div>
        )
    }
}
export default ButtonComponent