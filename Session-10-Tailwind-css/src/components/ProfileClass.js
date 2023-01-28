import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            /* count: 0,
            count2: 100 */
            userInfo: { }
        }
        console.log("Profile - Constructor",this.props.name)
    }
    async componentDidMount(){
        const userData= await fetch("https://api.github.com/users/TeeAimm");
        const userDataJson = await userData.json();
        console.log("data-",userDataJson)
        this.setState({
            userInfo: userDataJson,
            count: 0,
        })
        console.log("Profile - componentDidMount",this.props.name)
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Profile - componentDidUpdate",prevProps,prevState, this.state.userInfo)
    }
    componentWillUnmount(){
        console.log("Profile - componentWillUnmount")
    }
    render() {
        console.log("Profile - Render",this.props.name)
        const {count} = this.state;
        const {avatar_url,name,bio,company} = this.state.userInfo
        return (
            <>
                <h2>Profile Class Component!</h2>
                <img src={avatar_url} />
                <div>Name: {name}</div>
                <div>Bio: {bio}</div>
                <div>Company: {company}</div>
                {/* <div>Count: {count} - {this.state.count2}</div>
                <button onClick={()=>{
                    /**
                    *! Do not mutate state directly
                    *! Never do this.state.count = something!!  
                    *! Use setState 
                    
                    this.setState({
                        count: count+1
                    })
                }}>Count</button> */}
            </>
        )
    }
}

export default Profile;