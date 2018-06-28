    
    const fetchPeople = () => {

        return dispatch => {
            dispatch({type: 'FETCH_PEOPLE'})
            //fetch('https://mtl-anash-api2.herokuapp.com/api/people')
            fetch('http://localhost:3000/api/people')

            .then((response) => {
                console.log(response)
                if(!response.ok){
                    throw new Error('bad request')
                }
                
                return response.json()
            }, error => console.log(error))

            .then(people => {
                const camelizedPeople = people.map(person =>  {
                   return {id: person.id , firstName: person.first_name, lastName: person.last_name, address: person.address, city: person.city , state: person.state, zipCode: person.zip_code, country: person.country, phoneNumber: person.phone_number}
                }) 
                
                return camelizedPeople
            })
            .then(camelizedPeople =>  
                 dispatch({type: "RECIEVE_PEOPLE", payload: camelizedPeople})
                )
        
            }


        }

    
          
    

    const selectPerson = (person) => (
        {type: 'SELECTED_PERSON', payload: person}
    )

    const setNavBarItem = (item) => ( {type: 'SET_NAVBAR_ITEM', payload: item} )

    const removeSelectedPerson = () => (
        {type: 'REMOVE_SELECTED_PERSON'}
    )


    export {fetchPeople, selectPerson, setNavBarItem, removeSelectedPerson}

    
