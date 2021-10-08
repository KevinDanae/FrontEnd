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
        setOpen(true); 
    }
    const handleClick = (e) => {
        setPasswordForm(false)
        dispatch(resetPassword(password, user.mail))
    }
   

    return (
        <>
        {passwordForm ? (
        <div className="flex flex-col rounded gap-2 text-center bg-primary p-8 text-white">
        <h1 className="font-bold">My profile</h1>
        {<h3>{user.name} {user.lastname}</h3>}
        {<h3>{user.mail}</h3>}
        <p>You forgot your password?</p>
        <button className="link link-accent"  onClick={handleClick}>Change password</button>
        </div>
        ) : (
            <div className="flex flex-col rounded gap-2 text-center bg-primary p-8 text-white">
                <h1 className="font-bold">Set new password</h1>
                <input className="input input-primary text-black" onChange={handleChangePassword} value={password} type="password" placeholder="New password"/>
                {password.length < 6 && (
                  <p className="text-white mt-1 text-sm">
                    *Password must be at least 6 characters
                  </p>
                )}
                <button 
                className="btn "
                disabled={password.length < 6}
                onClick={handleSubmitPassword}
                >CHANGE</button>
            </div>
        )}
        </>
    );
    }

export default Account;