import React from 'react';

const ConditionalRendering = () => {
  return (
    <div>
      {/* { condition && JSX } */}
      { true && <img src={require("../images/shinchu.jpg")} width="300" alt="" /> }
      
      {/* { condtion ? JSX1 : JSX2 } */}

      { false ? <h2>The Condition is True</h2> : <h2>The Condition is False</h2> }

      <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200" width="300" alt=""/>
    </div>
  );
};

export default ConditionalRendering;