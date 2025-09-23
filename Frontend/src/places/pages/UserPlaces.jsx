import React from 'react'
import PlaceList from '../component/PlaceList'
export default function UserPlaces() {

    const DUMMY_PLACES = [
        {
            id: 'p1',
            title: 'Empire State Building',
            description: 'one of the most famous sky scrapers in the world',
            imageUrl: 'https://wallup.net/wp-content/uploads/2015/12/58619-nature-landscape-mountain-lake-748x421.jpg',
            address: 'sjdlfsduiweour',
            location: {
                lat: 25.196739,
                lng: 55.27703
            },
            Creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'one of the most famous sky scrapers in the world',
            imageUrl: 'https://wallup.net/wp-content/uploads/2015/12/58619-nature-landscape-mountain-lake-748x421.jpg',
            address: 'sjdlfsduiweour',
            location: {
                lat: 25.196739,
                lng: 55.27703
            },
            creator: 'u2'
        }
    ]

    return (
        <div>
            <PlaceList items={DUMMY_PLACES} />
        </div>
    )
}
