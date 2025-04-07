import { useState, useRef } from 'react'
import style from './StateVsRef.module.scss'

export const StateVsRef = () => {
  const input = useRef()
  const [show, setShow] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Текст справа: {show && input.current.value}</h3>
      <input
        ref={input}
        type='text'
        onKeyDown={handleKeyDown}
        className={style.control}
      />
    </div>
  )
}
