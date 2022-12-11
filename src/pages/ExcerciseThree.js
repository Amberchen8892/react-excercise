import React, {useEffect, useRef, useState} from "react";
import "../stylesheet/style.css";
const colorTheme = [
    {
        title:'green',
        color:'rgb(76, 245, 130)',
    },
    {
        title:'orange',
        color:'rgb(249, 104, 60)',
        
    },
    {
        title:'pink',
        color:'rgb(255, 123, 233',
    },
    {
        title:'blue',
        color:'rgb(84, 172, 245)',
       
    },
    ]
const theme = {
    green: 'rgb(76, 245, 130)',
    pink:'rgb(255, 123, 233',
    blue:'rgb(84, 172, 245)',
    orange:'rgb(249, 104, 60)'

}
function ExcerciseThree() {
    const [colors, setColors] = useState({
        // isGreen: false,
        green: false,
        orange: false,
        blue: false,
        pink: false,
    })
    const selectedRefs = useRef([]);
    const handleClick = (index) => {
        const boxIndex=[0,1,2,3]
        // console.log(boxIndex.filter(el => el !== index))
        var newObject ={}
        newObject[`${colorTheme[index].title}`] = !colors[`${colorTheme[index].title}`]
        boxIndex.filter(el => el !== index).map(el => (
            newObject[`${colorTheme[el].title}`] = false
        ))
        setColors(newObject)
    }
    useEffect(() => {
        if(getColor(colors, true) !== undefined){
            selectedRefs.current.map(el => (
                el.style.backgroundColor = theme[getColor(colors,true)]
            ))
        } else {
            selectedRefs.current[0].style.backgroundColor = theme['green']
            selectedRefs.current[1].style.backgroundColor = theme['orange']
            selectedRefs.current[2].style.backgroundColor = theme['pink']
            selectedRefs.current[3].style.backgroundColor = theme['blue']
        }
    })

    function getColor(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
      }
  return (
    <>
      <div className="container" style={{marginTop: '100px'}}>
        <h1 style={{ textAlign: "center" }}>Color Box</h1>
        <div className="center">
          <div style={{display:'grid', gridTemplateColumns: '1fr 1fr', gridAutoRows: 'auto auto'}}>
            {colorTheme.map((item,index) => (
                <div
                key={index}
                style={{ backgroundColor: `${item.color}` }}
                className="box"
                ref={(element) => {selectedRefs.current[index] = element}} 
                onClick={() => handleClick(index)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExcerciseThree;
