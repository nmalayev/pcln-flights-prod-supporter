import React from 'react'
import { Label, Checkbox } from 'pcln-design-system'

const FlightsApp = ({ app, isChecked, onChange }) => {
  return (
    <Label fontSize={1} pr={1}>
      <Checkbox
        name={app}
        id={app}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      {app.toUpperCase()}
    </Label>
  )
}

export default FlightsApp
