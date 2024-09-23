


const Button = () => {

    const clickMe = () => {
        console.log('Hello World');
        
    }

    return (
        <button className="myButton" onClick={clickMe}>Click Me</button>
    )
}

export default Button