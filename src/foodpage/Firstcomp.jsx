import { useState } from "react";
import "./color.css"



const Firstcomp = () => {

    const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return ( 
            <div className="food">
                <b>Foodie</b>
                  <ul>
                    <p> 
                        <div className="otption">
                            <select id="fruit-select" value={selectedOption}  onChange={handleChange}>
                               <option className="option">Choose a Menu</option>
                               <option className="option"> Hamburger</option>
                               <option className="option">pizza</option>
                               <option className="option">pasta</option>
                               <option className="option">sandwich</option>
                            </select>
                        </div>
                    </p>
                    <li >Our Deal</li>
                    <li>Categories</li>
                    <li>Restaurants</li>
                  </ul>
            </div>
          

        
     );
}
 
export default Firstcomp;