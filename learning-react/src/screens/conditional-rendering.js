import React, {useState} from 'react';

const ConditionalRendering = () => {

  const [ genderOthers, updateGenderOthers ] = useState(false);

  const changeGender = (event) => {
    if(event.target.value === 'others'){
      updateGenderOthers(true);
    }
    else{
     updateGenderOthers(false);
   }
  }

  return (
    <div>
      <div className='content'>
        <label>Select your Gender: </label>
        <input type='radio' value="male" name='gender' onChange={changeGender}/>Male
        <input type='radio'value="female" name='gender' onChange={changeGender}/>Female
        <input type='radio' value="others" name='gender' onChange={changeGender}/>Others
        {
          genderOthers && 
          <div>
            <label>Select your Pronunce :</label>
            <select defaultValue={''}>
              <option disabled value="">Choose pronounce</option>
              <option>He</option>
              <option>She</option>
              <option>They</option>
            </select>
          </div>
        }
        
      </div>




      {/* { condition && JSX } */}
      { true && <img src={require("../images/shinchu.jpg")} width="300" alt="" /> }
      
      {/* { condtion ? JSX1 : JSX2 } */}

      { false ? <h2>The Condition is True</h2> : <h2>The Condition is False</h2> }

      <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200" width="300" alt=""/>
    </div>
  );
};

export default ConditionalRendering;