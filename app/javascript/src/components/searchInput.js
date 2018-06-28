import React from 'react'
import { Input} from 'semantic-ui-react'



const SearchInput = (props) => {
  return(
    <div  style={{top: '0px', position: 'sticky', backgroundColor: '#B2DBBF', padding: '0.25em 3em 0.25em 0.25em ' }} >
    <Input fluid  focus onChange={props.handleSearchInput} value={props.searchValue} placeholder='Search...' />
    </div>

  )
}


export default SearchInput
