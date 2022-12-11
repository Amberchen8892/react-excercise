import React, {useState} from 'react';
import TextField from "./components/text-field/TextField";
import Typography from "./components/typography/Typography";
import Button from "./components/button/Button";
import Box from "./components/box/Box";
import Error from "./components/error/Error";


function ExcerciseOne() {
    const liStyle = {
        listStyle: "none",
      };
    
      const [numberOfBoxes, setNumberOfBoxes] = useState("");
      const [arrayOfBoxes, setArrayOfBoxes] = useState([]);
      const [error, setError] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");
    
      const handleChange = (e) => {
        setNumberOfBoxes(e.target.value);
      };
    
      const checkErrorMessage = () => {
        if (parseInt(numberOfBoxes) === 0) {
          setErrorMessage("No Box");
        } else if (parseInt(numberOfBoxes) > 128) {
          setErrorMessage("Error");
        } else setErrorMessage(errorMessage);
      };
    
      const handleClick = (e) => {
        e.preventDefault();
        if (parseInt(numberOfBoxes) < 1 || parseInt(numberOfBoxes) > 128) {
          setError(true);
          checkErrorMessage();
        } else {
          setError(false);
        }
        let array = [];
        for (let i = 0; i < parseInt(numberOfBoxes); i++) {
          array.push(i);
          
        }
        setArrayOfBoxes(array);
      };
    
      return (
        <>
          <Typography title="Number Of Boxes" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <TextField
                type="text"
                id="numberOfBoxes"
                name="numberOfBoxes"
                onChange={handleChange}
                value={numberOfBoxes}
              />
              <Button buttonText="Generate" type="submit" onClick={handleClick} />
            </div>
          </div>
          {error ? (
            <Error content={errorMessage} />
          ) : (
            <div className="flex">
              <ul className="grid-container">
                {arrayOfBoxes.map(item => {
                  return (
                    <li style={liStyle} key={item}>
                      <Box title={item} />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      );
}

export default ExcerciseOne