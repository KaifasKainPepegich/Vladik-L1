import styles from './FeedbackSection.module.scss'

export function FeedbackSection() {
  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor='name'>Какие ваши полномочия?</label>
        <input type='text' id='name' className={`${styles.control}`} />
      </form>
    </section>
  )
}
