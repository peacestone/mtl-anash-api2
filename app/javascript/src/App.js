import React, { Component } from 'react';
import Sidebar from './containers/sidebar'
import NavBar from './components/navBar'
import MainDisplay from './containers/mainDisplay'
import {Dimmer, Loader } from 'semantic-ui-react' 
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchPeople} from './actions/peopleActions'

class App extends Component {

  componentDidMount = () => this.props.fetchPeople()

  render() {
    
    if (this.props.isFetching) {
      return  (<Dimmer active={this.props.isFetching} page>
               <Loader>Hang on Tight</Loader>
              </Dimmer>)
     }
    return (
      <div id='app'>
        <NavBar  />
        <Sidebar  />
        <MainDisplay />
    
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({fetchPeople}, dispatch)
)

const mapStateToProps = state => (
  {isFetching: state.isFetchingPeople}
)
export default connect(mapStateToProps, mapDispatchToProps)(App) 
