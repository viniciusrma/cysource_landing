import React, { useState } from 'react'
import { ProgressDone, ProgressWrap } from './Styles'

const Card = ({ done, ...rest }) => {
  const [style, setStyle] = useState({ opacity: 0, width: 0 })

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`
    }

    setStyle(newStyle)
  }, 200)

  return (
    <ProgressWrap>
      <ProgressDone style={style}>
        <span>{done}%</span>{' '}
      </ProgressDone>
    </ProgressWrap>
  )
}

export default Card
