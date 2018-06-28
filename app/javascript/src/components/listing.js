import React from 'react'
import {List} from 'semantic-ui-react'

const listing = ({contactDisplay, handleListingClick, resultsId}) => {




  return (
    <List.Item style={{borderTop: '1px solid rgba(34,36,38,.15)'}} onClick={handleListingClick}>
      <List.Content id='listing'>
        <List.Header   id={resultsId}>{contactDisplay}</List.Header>
      </List.Content>
    </List.Item>
  
  )
}

export default listing
