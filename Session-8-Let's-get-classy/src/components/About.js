import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFn from "./Profile";
import ProfileClass from "./ProfileClass";

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
            <ProfileFn name={"Tania"} />
            <ProfileClass name="Child 1" />
            {/* <ProfileClass name="Child 2" /> */}
        </>
    }
}

export default About;