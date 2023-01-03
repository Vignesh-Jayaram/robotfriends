import React from 'react';

// SearchBox component to interact with the CardList
const SearchBox = ( { searchChange}) => {
          return(
                    <div className='pa2'>
                              <input 
                              className='pa3 ba b--green bg-lightest-blue'
                              type = 'search' 
                              placeholder = 'Enter Bot Name' 
                              onChange = {searchChange} />          
                    </div>
          )
}

export default SearchBox;