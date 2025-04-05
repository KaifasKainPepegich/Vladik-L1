import style from './Button.module.scss'
import clsx from 'clsx'

export const Button = ({ children, isActive, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(style.button, {
        [style.active]: isActive,
      })}>
      {children}
    </button>
  )
}
