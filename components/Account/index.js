import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetPassword, userData } from "../../actions";

const Account = () => {
    const dispatch = useDispatch();
    const infoRedux = useSelector(state => state.userData);
    const [user, setUser] = useState({
            name: infoRedux.name,
            lastname: infoRedux.lastname,
            mail: infoRedux.mail,
        });
    useEffect(() => {
            dispatch(userData())
    }, [])
    const [passwordForm, setPasswordForm] = useState(true);
    const [password, setPassword] = useState("")
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmitPassword = (e) => {
        e.preventDefault();
        setPasswordForm(true);
    }
    const handleClick = (e) => {
        setPasswordForm(false)
        dispatch(resetPassword(password, user.mail));
        
    }


    return (
        <>
        {passwordForm ? (
        <div className="flex flex-col rounded gap-2 text-center bg-primary p-8 text-white">
        <h1 className="font-bold">My profile</h1>
        {<h3>{user.name} {user.lastname}</h3>}
        {<h3>{user.mail}</h3>}
        <p>You forgot your password?</p>
        <button className="link link-accent" onChange={handleChangePassword} onClick={handleClick}>Change password</button>
        </div>
        ) : (
            <div className="flex flex-col rounded gap-2 text-center bg-primary p-8 text-white">
                <h1 className="font-bold">Set new password</h1>
                <input className="input input-primary text-black" type="password" placeholder="New password"/>
                <button onClick={handleSubmitPassword}>CHANGE</button>
            </div>
        )}
        </>
    );
    }

export default Account;