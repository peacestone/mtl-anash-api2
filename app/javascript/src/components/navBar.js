import React from 'react'
import { Menu} from 'semantic-ui-react'
import {setNavBarItem, removeSelectedPerson} from '../actions/peopleActions'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

class navBar extends React.Component {


    handleNavBarClick = (event) => {
        this.props.removeSelectedPerson()
        this.props.setNavBarItem(event.target.id)
    }




    render() {
        return (
            <Menu style={{ marginBottom: '0px'}}  fluid  size='large' >
                <Menu.Item name='MTL Anash'  header onMouseDown={this.handleNavBarClick} id='home'/>
                <Menu.Item onClick={this.handleNavBarClick} id='name' name='Search By Name'active={this.props.activeNavbarItem === 'name'}/>
                <Menu.Item onClick={this.handleNavBarClick} id='phoneNumber' name='Search By Phone Number' active={this.props.activeNavbarItem === 'phoneNumber'} />
                <Menu.Item onClick={this.handleNavBarClick} id='address' name='Search By Address' active={this.props.activeNavbarItem === 'address'} />
                <Menu.Menu position='right' >
                    <Menu.Item onClick={this.handleNavBarClick} id= 'updateListing' name='Update a Listing' active={this.props.activeNavbarItem === 'updateListing'}  />
                </Menu.Menu>

            </Menu>

    ) }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({setNavBarItem, removeSelectedPerson}, dispatch)
)

const mapStateToProps = state => (
    {activeNavbarItem: state.activeNavbarItem}
)

export default connect(mapStateToProps, mapDispatchToProps)(navBar) 
