
import Button from "./Button";

function Child({age, city, name}) {


    return(
        <>
            <h3>Welcome, {name} and Age is: {age}</h3>
            <h4>Your city is: {city}</h4>
            <Button />
        </>
    )

}


export default Child;