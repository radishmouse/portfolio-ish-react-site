import React from 'react';

function MainContent(props) {
    console.log(props.content);
    return (
      <div>
        <p>{props.content}</p>
      </div>        
    );
}

export default MainContent;