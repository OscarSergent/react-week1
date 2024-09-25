/* eslint-disable react/prop-types */



const User = ({name, age, url}) => {
    

    return (
        <>
            <img style={{height:'200px', width:'200px'}} src={url} />
            <h1>Hello my name is : { name }, I am { age }</h1>
        </>
    )
}

export default User