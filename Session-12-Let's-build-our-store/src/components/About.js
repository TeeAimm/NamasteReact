import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFn from "./Profile";
import ProfileClass from "./ProfileClass";
import userContext from "../utils/userContext";

/* const About = () => {
    return <>
        <h1>About page</h1>
        
        <ProfileFn name={"Tania"}/>
        <ProfileClass name="Tania Class"/>
    </>
} */

class About extends React.Component {
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
            {/* Using createContext userContext Here */}
            <userContext.Consumer>
                {({user})=><div className="text-xl">{user.name} - {user.location}</div>}
            </userContext.Consumer>
           {/*  <ProfileFn name={"Tania"} /> */}
            <ProfileClass name="Child 1" />
            {/* <ProfileClass name="Child 2" /> */}
        </>
    }
}

export default About;