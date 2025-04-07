import { Button } from '../Button/Button'
import style from './TabsSection.module.scss'

export const TabsSection = ({ active, onChange }) => {
  return (
    <section className={style.section}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Главная
      </Button>

      <Button
        isActive={active === 'feedback'}
        onClick={() => onChange('feedback')}>
        Обратная связь
      </Button>
      <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>
        Effect
      </Button>
    </section>
  )
}
