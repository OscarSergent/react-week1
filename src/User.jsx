import Button from "./Button"



const User = () => {

    let isSignedIn = true
    const infoUser = {
        myName : 'Oscar',
        myLastName : 'Sergent',
        myAge : 29
    }

    return (
        <>
            {!isSignedIn ? (
                <>
                    <h1>Please sign in</h1>
                    <button>Sign IN</button>
                </>
            ) : (
                <>
                    <h1>Hello { infoUser.myName } { infoUser.myLastName }</h1>
                    <button>logout</button>
                </>
            )}
            {infoUser.myAge > 30 && <h1>I am older than 30</h1>}
            <Button/>
            {/* <h1>Hello my name is : { infoUser.myName } { infoUser.myLastName }</h1>
            <p>something, something, i am { infoUser.myAge }</p> */}
        </>
    )
}

export default User