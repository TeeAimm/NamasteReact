import { useContext, useState } from "react";
import userContext from "../utils/userContext";

const Contact = () => {
    const { user, setUser } = useContext(userContext)
    const [updateName, setUpdateName] = useState('')
    return <div className="mx-16">
        <h1 className="text-4xl mb-4">Contact</h1>
        <div className="flex items-center">
            <label>Update name</label>
            <input
                type="text"
                value={user?.name || ''}
                className="border h-11 px-4 border-gray-300"
                placeholder="update name"
                onChange={(e) => setUser({
                    ...user,
                    name: e.target.value
                })}
            />
        </div>
    </div>
}

export default Contact;