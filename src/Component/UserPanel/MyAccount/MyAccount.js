import React from 'react';
import "./MyAccount.css"
import {useState} from "react";

const MyAccount = () => {

    const [inputOldPassword, setInputOldPassword] = useState("");
    const [inputNewPassword, setInputNewPassword] = useState("");
    const [inputRepeatNewassword, setInputRepeatNewPassword] = useState("");

    return (
        <div className="AccountSettings">
            <h1 className="MyAccount">My account</h1>
            <div className="Change">
            <div className="ChangePassword">
                <p className="ChangeParagraph">Change password:</p>
                <form className="ChangeForm">
                    <div className="ChangeDiv">
                        <label className="ChangeLabel">Old password</label>
                        <input type="text" value={inputOldPassword}
                               onChange={e => setInputOldPassword(e.target.value)}/>
                    </div>
                    <div className="ChangeDiv">
                    <label className="ChangeLabel">New password</label>
                    <input type="text" value={inputNewPassword} onChange={e => setInputNewPassword(e.target.value)}/>
                    </div>
                        <div className="ChangeDiv">
                    <label className="ChangeLabel">Repeat new password</label>
                    <input type="text" value={inputRepeatNewassword}
                           onChange={e => setInputRepeatNewPassword(e.target.value)}/>
                        </div>
                    <button className="ChangeButton" type="submit"> Change password</button>
                </form>
            </div>
            <div className="ChangeName">
                <p className="ChangeParagraph">Change name:</p>
                <form className="ChangeForm">
                    <div className="ChangeDiv">
                        <label className="ChangeLabel">New name</label>
                        <input type="text" value={inputNewPassword} onChange={e => setInputNewPassword(e.target.value)}/>
                    </div>
                    <div className="ChangeDiv">
                        <label className="ChangeLabel">Password</label>
                        <input type="text" value={inputRepeatNewassword}
                               onChange={e => setInputRepeatNewPassword(e.target.value)}/>
                    </div>
                    <button className="ChangeButton" type="submit"> Change name</button>
                </form>
            </div>
                </div>
        </div>
    )
}

export default MyAccount;