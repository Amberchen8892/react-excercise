import React from 'react'

const colorTheme = {
  red: '#ff0000',
  gold: '#ffd700',
  cyan: '#00ffff',
  magenta: '#ff00ff',
}

function TonyBoxColor() {
  const [colors, setColors ] = React.useState(colorTheme)

  function onChange(e, color) {
    const { checked } = e.target;
    if(checked) {
      setColors({
        red: color,
        gold: color,
        cyan: color,
        magenta: color,
      })
    } else {
      setColors(colorTheme)
    }
  }

  return (
    <div className='tonyBoxColor'>
      <div
        style={{ backgroundColor: colors.red }}
      > 
        <input type="checkbox" name="red" onChange={e => onChange(e, "red")} />
        red
      </div>
      <div
        style={{ backgroundColor: colors.gold }}
      > 
        <input type="checkbox" name="gold"  onChange={e => onChange(e, "gold")} />
        gold
      </div>
      <div
        style={{ backgroundColor: colors.cyan }}
      >
        <input type="checkbox" name="cyan"  onChange={e => onChange(e, "cyan")} />
        cyan
      </div>
      <div
        style={{ backgroundColor: colors.magenta }}
      >
        <input type="checkbox" name="magenta"  onChange={e => onChange(e, "magenta")} />
        magenta
      </div>
    </div>
  )
}

export default TonyBoxColor