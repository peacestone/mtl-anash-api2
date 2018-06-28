import React from 'react'
import {Button, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removeSelectedPerson} from '../actions/peopleActions'


class updateListingInput extends React.Component {
    constructor(props){
		super(props)

		this.state = this.props.selectedPerson
		
		

	}
	
	handleFormInput = ({target}) => {
		this.setState({[target.name]: target.value})
	}
	
	
	componentWillReceiveProps = (nextProps) => {
		this.setState(nextProps.selectedPerson)
	}
	
	handleSubmit = (event) => {
		this.props.removeSelectedPerson()
		alert('Thank you for your submission!')
	}
		
	
	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit} style={{ left: '270px'}}>
				<Form.Group >
					<Form.Input name='firstName' label='First Name' placeholder='First Name' onChange={this.handleFormInput} value={this.state.firstName}  />
					<Form.Input  label='Last Name' name='lastName' placeholder='Last Name' onChange={this.handleFormInput} value={this.state.lastName}  />
				</Form.Group>
				<Form.Group>

				<Form.Input  label='Address' name='address' placeholder='Address' onChange={this.handleFormInput} value={this.state.address} />
				<Form.Input label='Zip Code' name='zipCode' placeholder='Zip Code' onChange={this.handleFormInput} value={this.state.zipCode} />
				<Form.Input label='Phone Number' name='phoneNumber' placeholder='Phone Number' onChange={this.handleFormInput} value={this.state.phoneNumber} />
				</Form.Group>
				<Form.Group>
					<Form.Button>Submit Update</Form.Button>
				</Form.Group>

				</Form>
			</div>
		)
	}
	
}

const mapDispatchToProps = dispatch => (
	bindActionCreators({removeSelectedPerson}, dispatch)
)


const mapStateToProps = state => { return(
{selectedPerson: state.selectedPerson}
)}

export default connect(mapStateToProps, mapDispatchToProps)(updateListingInput)