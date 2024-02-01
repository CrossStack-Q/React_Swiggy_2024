import React from "react";


class ProfileClass extends React.Component {

    constructor(props){
        super(props);
        // Create State
        this.state = {
            count: 0,
            count2 : 3
        }

        console.log("Constructor")

    }

    componentDidMount(){
        console.log("Component ki aag r")
    }


    



    render() {
        console.log("Render")
        return (
            <div>
                Profile C {this.props.name}
                <p>{this.state.count2}</p>
                <button onClick={()=>{
                    this.setState({
                        count2: 5,
                    })
                }}>
                    click
                </button>
            </div>
        )
    }
}

export default ProfileClass