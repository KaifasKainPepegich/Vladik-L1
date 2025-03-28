import style from './FeedbackSection.module.scss'

export const FeedbackSection = () => {
  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor='name'>Какие ваши полномочия?</label>
        <input type='text' id='name' className={style.control} />
      </form>
    </section>
  )
}
