import { useState } from "react";
import { useSelector } from "react-redux";

const Account = () => {
    const infoRedux = useSelector(state => state.token);
        const [user, setUser] = useState({
            name: infoRedux.name,
            lastname: infoRedux.lastname,
            mail: infoRedux.mail,
        });




    return (
        <div className="flex flex-col rounded gap-2">
        <h1>My profile</h1>
        <h2>Name:</h2>
        {<h3>{user.name}</h3>}
        <h2>Email:</h2>
        {<h3>{user.mail}</h3>}
        <p>You forgot your password?</p>
        <button className="link link-accent">Change password</button>
        </div>
    );
    }

export default Account;