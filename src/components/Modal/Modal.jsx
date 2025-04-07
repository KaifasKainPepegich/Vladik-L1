import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import style from './Modal.module.scss'

export const Modal = ({ children, open }) => {
  const dialog = useRef()

  useEffect(() => {
    if (!dialog.current) return

    if (open) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <dialog ref={dialog} className={style.dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  )
}
