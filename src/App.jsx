import { useState } from "react"




function App() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [isLoggin, setIsLogin] = useState(false);
    const [error, setError] =  useState("");


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

    return (
        <>
            {
                isLoggin && "login hay"
            }

            {
                (isLoggin == true) ? <div>
                    <h1>Welcome User</h1>
                    <h4>This is your profile page.</h4>
                    <button onClick={() => setIsLogin(false) }>Logout</button>
                </div> : <div style={{ display: "flex", justifyContent: "center", border: "1px solid red", width: "600px", margin: "100px auto" }}>
                    <form onSubmit={handleSubmit} >
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                        <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} /> <br />
                        <p>{error}</p>
                        <button>Login</button>
                    </form>
                </div>
            }



        </>
    )
}

export default App;