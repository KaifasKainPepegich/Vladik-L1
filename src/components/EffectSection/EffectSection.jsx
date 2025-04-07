import { useCallback, useEffect, useState } from 'react'
import { useInput } from '../../hooks/useInput'
import { Button } from '../Button/Button'
import { Modal } from '../Modal/Modal'
import style from './EffectSection.module.scss'

export const EffectSection = () => {
  const input = useInput()

  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <section>
      <h3>Effects</h3>

      <Button className={style.wrapper} onClick={() => setModal(true)}>
        Open info
      </Button>

      <Modal open={modal}>
        <h3>From modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque
          odio hic nihil, nulla vel fugiat quo, modi eveniet minima in,
          quibusdam nisi veritatis? Cupiditate numquam voluptas recusandae
          perferendis rerum?
        </p>
        <Button onClick={() => setModal(false)}>Close modal</Button>
      </Modal>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input type='text' className={style.control} {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  )
}
