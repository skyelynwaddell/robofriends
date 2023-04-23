import React from 'react';

const SearchBox = () => {
    return(
        <input
        style={{
            fontSize:25
        }}
        defaultValue={"search robofriends"}
        id='robosearch'
        name='myInput' 
        className='pa3 br3 tc bg-lightest-blue'
        />
    );
}

export default SearchBox;