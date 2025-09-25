import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

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
        creator: 'u1'
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


export default function UpdatePlaces() {
    const id = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
    if (!identifiedPlace) {
        return <h2>Could not find the place</h2>
    }

    return (
        <form>
            <input type="text" />
        </form>
    )
}
