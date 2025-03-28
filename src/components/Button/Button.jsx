import style from './Button.module.scss'

export const Button = ({ children, onClick, isActive }) => {
  return (
    <button className={`${style.button} ${isActive ? style.active : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}
