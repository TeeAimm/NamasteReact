import React from "react";
import ProfileFn from "./Profile";
import ProfileClass from "./ProfileClass";
import userContext from "../utils/userContext";

const About = () => {
    return <div>
        <div className="bg-[#005062]">
            <ProfileFn />
        </div>
    </div>
}



/* class About extends React.Component {
    constructor(props){
        super(props)
      //  console.log("Parent - Constructor")
    }
    componentDidMount(){
     //   console.log("Parent - componentDidMount")
    }
    render() {
     //   console.log("Parent - Render")
        return <>
            <h1>About page</h1>
            // Using createContext userContext Here 
            <userContext.Consumer>
                {({user})=><div className="text-xl">{user.name} - {user.location}</div>}
            </userContext.Consumer>
            <ProfileClass name="Child 1" />
        </>
    }
}
 */
export default About;