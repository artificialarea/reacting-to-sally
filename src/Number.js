import React from 'react';

const number = props => {
  const result = props.number % 2 === 0 ? 'even' : 'odd';

return (
  <div>
    <p>{result}</p>
    <p>{props.number}</p>
  </div>
  )
}

export default number;