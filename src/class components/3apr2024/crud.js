import { Component } from "react";

class Crud extends Component {
    state = {
        Cartoon: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUv7_9NXwvZF8yJl2-1EvUAueti_vQ3YdYjlH1cilOfFczAV_ENGt8hgJzkOTpEQ5R-k4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MOXnu7EYsGq1SyyKKatHdaJ5ii__C-qDN4-Ll8ZhfQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmYGlTOFwOgx67f5uYXd9ss8CJ8kQ1fEv4dt8qdZKtw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFItPykjn9k4Az-mmsT7vgSuCmG58dLWc0O9XguyNUA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2JrrEUYLJVzKoTPTCAZHsVX6ZLH-IVbKdAvYjyvDhA&s",


        ]
    };

    deleteCartoon = index => {
        this.setState(prevState => ({
            Cartoon: prevState.Cartoon.filter((_, i) => i !== index)
        }));
    };

    updateCartoon = index => {
        const updatedCartoon = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oP35QWVHyOJVdCArmTZbyzhMz9aQXN9i7T33hnq25g&s"]
        if (updatedCartoon) {
            this.setState(prevState => {
                const newCartoon = [...prevState.Cartoon];
                newCartoon[index] = updatedCartoon;
                return { Cartoon: newCartoon };
            });
        }
    };


    render() {
        const { Cartoon } = this.state;
        return (
            <>
                <h1 style={{color:"coral"}}>CRUD-create, read, update, delete</h1>
                {Cartoon.map((CartoonUrl, index) => (
                    <div key={index} className="card">
                    <img style={{ height: '200px', width: '200px' }} src={CartoonUrl} alt="pic" />
                    <div className="cardbutton">
                        <button onClick={() => this.deleteCartoon(index)}>Delete</button>
                        <button onClick={() => this.updateCartoon(index)}>Update</button>
                    </div>
                </div>
                ))}
            </>
        );
    }
}

export default Crud;
