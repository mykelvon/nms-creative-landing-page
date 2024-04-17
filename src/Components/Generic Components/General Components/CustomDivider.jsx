import { Divider } from '@mui/material'
import React from 'react'

const CustomDivider = () => {
  return (
    <Divider
    orientation="horizontal"
    variant="middle"
    style={{
      width: "200px",
      borderWidth: "1.5px",
      borderColor: "#FF4545",
    }}
  />
  )
}

export default CustomDivider