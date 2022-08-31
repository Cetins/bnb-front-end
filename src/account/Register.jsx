import React, { useState } from "react";
import GuestService from "../services/GuestService";

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handlePassword2Change = (e) => setPassword2(e.target.value);
    
 

    const handleSubmit = () => {
        if(password == password2) {
            GuestService.addGuest({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            console.log(password);
        } else {
            console.log("password don't match")
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label>first name: </label>
                    <input type="text" required onChange={handleFirstNameChange} />
                </div>
                <div>
                    <label>last name: </label>
                    <input type="text" required onChange={handleLastNameChange} />
                </div>
                <div>
                    <label>email: </label>
                    <input type="email" required onChange={handleEmailChange} />
                </div>

                <div>
                    <label>password: </label>
                    <input type="text" required onChange={handlePasswordChange} />
                </div>

                <div>
                    <label>password again: </label>
                    <input type="text" required onChange={handlePassword2Change} />
                </div>
                <div>
                    <input type="submit" value="register" onSubmit={handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default Register;