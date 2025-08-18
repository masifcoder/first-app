import Dashboard from "./Dashboard";



function Welcome(props) {

    return (
        <>
            <div>
                <h1>Welcome {props.name}</h1>
                <h4>This is your profile page.</h4>
                <button onClick={() => props.setIsLogin(false)}>Logout</button>
                <button onClick={ () => props.sayHi("sarim") }>say hi</button>
            </div>
        </>
    )
}

export default Welcome;