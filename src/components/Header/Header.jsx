import { useState, useEffect } from 'react'
import logo from '/logo-name.svg'
import style from './Header.module.scss'

export const Header = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(intervalId)
  })

  return (
    <header className={style.header}>
      <img src={logo} alt={'Result'} />

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  )
}
