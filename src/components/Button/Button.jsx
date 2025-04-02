import style from './Button.module.scss'
import clsx from 'clsx'

export const Button = ({ children, onClick, isActive }) => {
  return (
    <button
      className={clsx(style.button, {
        [style.active]: isActive,
      })}
      onClick={onClick}>
      {children}
    </button>
  )
}
