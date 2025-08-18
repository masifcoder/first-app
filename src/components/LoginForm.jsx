



function LoginForm({error, setEmail, setPwd, handleSubmit, pwd, email}) {

    return (<>

        <div style={{ display: "flex", justifyContent: "center", border: "1px solid red", width: "600px", margin: "100px auto" }}>
            <form onSubmit={handleSubmit} >
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} /> <br />
                <p>{error}</p>
                <button>Login</button>
            </form>
        </div>
    </>)
}

export default LoginForm