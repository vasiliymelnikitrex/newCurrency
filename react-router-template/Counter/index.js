import React from 'react';

const Counter = ({ match: { params } }) => (<div>Counter - {params.id}</div>);

export default Counter;
