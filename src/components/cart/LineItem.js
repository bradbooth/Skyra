import React from 'react';

const LineItem = ({title, quantity, customAttributes}) => (
    <div>
        <h3>{title} x {quantity}</h3>
        <ul>
            {customAttributes.map((item, i) => <li key={i}>{item.value}</li>)}
        </ul>
    </div>

  //Title
  //Custom
);

export default LineItem;
