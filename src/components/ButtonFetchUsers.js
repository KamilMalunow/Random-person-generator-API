import './ButtonFetchUsers.css'

const ButtonFetchUsers = props => {

    return (
        <>
            <h1 className="h1">Random persons generator</h1>
            <button className="button" onClick={props.click}>Add new person</button>
        </>
    )
}

export default ButtonFetchUsers;