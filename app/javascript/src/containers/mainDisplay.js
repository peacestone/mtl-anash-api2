import React from 'react' 
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react';
import UpdateListingInput from './updateListingInput'
import SearchMainDisplay from './searchMainDisplay'
import ListingDetails from '../components/listingDetails'

class MainDisplay extends React.Component {
    
    
    render(){

     if(this.props.activeNavbarItem === 'updateListing'){
        return (
            <div>
			{ this.props.selectedPerson.firstName ? <UpdateListingInput /> : <h1> Search for a listing to update</h1> } 
			</div>
        )
    }
    else if(this.props.activeNavbarItem === 'phoneNumber'){
        return (
            <SearchMainDisplay  selectedPerson={this.props.selectedPerson} message='Search for a person by entering a phone number'/>
        )
    }
    else if(this.props.activeNavbarItem === 'address'){
        return (
            <SearchMainDisplay selectedPerson={this.props.selectedPerson} message='Search for a person by entering an address'
            />
        )
    }
    else if(this.props.activeNavbarItem === 'name'){
        return (
            <SearchMainDisplay selectedPerson={this.props.selectedPerson} message='Search for a person by entering a name'
            />
        )
    }
    
    
    return (
            <div style={{float: 'left', width: '79%'}}  >
			{ this.props.selectedPerson.firstName ? <ListingDetails selectedPerson={this.props.selectedPerson} /> : <h1 style={{fontSize: '400%', textAlign: 'center'}}>Welcome to MTL Anash!</h1> } 
            </div>
        )
    }
}







const mapStateToProps = state => (
    {selectedPerson: state.selectedPerson, activeNavbarItem: state.activeNavbarItem}
)

export default connect(mapStateToProps)(MainDisplay)