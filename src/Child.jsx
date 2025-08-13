
import Button from "./Button";

function Child(props) {



    return(
        <>
            <h3>Welcome, {props.name}</h3>
            <h4>Your city is: {props.city}</h4>
            <Button />
        </>
    )

}


export default Child;