import { useRouteError } from "react-router-dom";

const Error = () => {
    const {data,status,statusText} = useRouteError()
    console.log("err--",data,status,statusText)
    return <>
        <h1>Oops!!!</h1>
        <h3>{status} {data}</h3>
    </>
}

export default Error;