import { useState } from "react"

import Welcome from "./components/Welcome";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";



function App() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();
        let adminEmail = "ali@gmail.com";
        let adminPwd = "123456";

        if (email == adminEmail && pwd == adminPwd) {

            setEmail("");
            setPwd("");
            setError("");
            setIsLogin(true);
        } else {
            setError("Invalid credentials");
        }
    }

    const sayHi = (name) => {
        alert("welcome, " + name)
    }

    return (
        <>
            {
                isLogin && "login hay"
            }

            {
                (isLogin == true) ? <><Welcome sayHi={sayHi} setIsLogin={setIsLogin} name="Ali" /> </> : <LoginForm email={email} pwd={pwd} error={error} setEmail={setEmail} setPwd={setPwd} handleSubmit={handleSubmit} />
            }

            <Dashboard isLogin={isLogin} />

        </>
    )
}

export default App;