import React, {Component} from 'react'
import Listings from '../components/listings'
import SearchInput from '../components/searchInput'
import Fuse from 'fuse.js'
import { Segment,Dimmer, Loader, Container } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {fetchPeople, selectPerson} from '../actions/peopleActions'


class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      results: this.props.people
    }

    this.handleListingClick = this.handleListingClick.bind(this)

  }

  componentDidUpdate = (prevProps, prevState) => {
    if ( this.state.results.length === 0 && this.state.searchInput === '' ) {
      this.setState( {results: this.props.people})
    }

    if (prevProps.activeNavbarItem !== this.props.activeNavbarItem) {
      this.setState({searchInput: '', results: this.props.people})
    }
  }

  


  handleSearchInput = (event) => {
    this.setState({searchInput: event.target.value}, (props) => {

      let queryKeys 
      if(this.props.activeNavbarItem !== 'phoneNumber' && this.props.activeNavbarItem !== 'address'){
        queryKeys = ['firstName', 'lastName']
      } else {
        queryKeys = [this.props.activeNavbarItem]
      }

    const options = {
      keys: queryKeys,
      minMatchCharLength: 3,
      shouldSort: true,
      threshold: 0.2
     }
     
    const fuse = new Fuse(this.props.people, options)
    const results = fuse.search(this.state.searchInput)
    this.setState({results}) 
    })
  }

  handleListingClick = (event) => {    
    const personIndex = event.target.id
    const person = this.state.results[personIndex]
    this.props.selectPerson(person)
}

  

  render() {
    return (
    <Container  floated='left' style={{ width: '19%', height: '95vh' , float: 'left', padding: '0px', marginTop: '0px', marginBottom: '0px'}} >
      <SearchInput handleSearchInput={this.handleSearchInput} searchValue={this.state.searchInput}  />
      <Listings  queryBy={this.props.activeNavbarItem} people={this.state.results} handleListingClick={this.handleListingClick} />
    </Container>

  )}
}

 const mapDispatchToProps = dispatch => (
   bindActionCreators({fetchPeople, selectPerson}, dispatch)
 )

 const mapStateToProps = state => {
  return(
   {people: state.people, activeNavbarItem: state.activeNavbarItem}
 )}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
      