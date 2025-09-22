import React from 'react'
import './UserList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
export default function Userlist(props) {

    if (props.items.length === 0) {
        return <Card> <h2>No user found</h2></Card>
    }

    return (
        <ul className='users-list'>
            {props.items.map(user => (<UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.places} />))}

        </ul>
    )
}
