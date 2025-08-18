



function Dashboard(props) {

    return(
        <>
            {
                (props.isLogin) ? <h3>Wecome to Dashboard</h3> : "You are not logged in"
            }
        </>
    )
}

export default Dashboard