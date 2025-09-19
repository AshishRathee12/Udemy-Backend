import React from 'react'
import './UserList.css';
import UserItem from './UserItem';
export default function Userlist(props) {

    if (props.items.length === 0) {
        return <div> <h2>No user found</h2></div>
    }

    return (
        <ul className='users-list'>
            {props.items.map(user =>( <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />))}

        </ul>
    )
}
