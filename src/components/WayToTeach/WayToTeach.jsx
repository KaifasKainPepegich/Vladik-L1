import styles from './WayToTeach.module.scss'

export default function WayToTeach({ title, description }) {
  return (
    <li>
      <p>
        <span className={`${styles.strong}`}>{title} </span> {description}
      </p>
    </li>
  )
}
