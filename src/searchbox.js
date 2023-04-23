import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <input
        type='search'
        style={{
            fontSize:30
        }}
        placeholder={"search robofriends"}
        className='pa3 ba br3 tc bg-lightest-blue'
        onChange={searchChange}
        />
    );
}

export default SearchBox;