import './UsersList.css';
const UsersList = props => {
    const usersList = props.users.map(user => {
        return (
            <li key={user.login.uuid} className="listElement">
                <img src={user.picture.large} alt={user.name.first} />
                <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                <p>{user.email}</p>
            </li>
        )

    })

    return (
        <ul className="list">
            {usersList}
        </ul>
    )
}

export default UsersList;