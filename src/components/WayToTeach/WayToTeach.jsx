import styles from './WayToTeach.module.scss'

export const WayToTeach = ({ title, description }) => {
  return (
    <li>
      <p>
        <span className={styles.strong}>{title} </span> {description}
      </p>
    </li>
  )
}
