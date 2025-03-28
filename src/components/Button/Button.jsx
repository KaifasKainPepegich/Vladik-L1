import styles from './Button.module.scss'

export const Button = ({ children, onClick, isActive }) => {
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}
