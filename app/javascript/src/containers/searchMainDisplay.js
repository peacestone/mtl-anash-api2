import React from 'react'
import ListingDetails from '../components/listingDetails'


const searchMainDisplay = props => {
    if (props.selectedPerson.firstName){
        return  <ListingDetails  selectedPerson={props.selectedPerson} />
    }
    return <h1>{props.message}</h1>
}

export default searchMainDisplay