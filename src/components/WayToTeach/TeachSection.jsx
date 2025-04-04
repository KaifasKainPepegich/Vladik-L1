import { ways } from '../../data'
import { WayToTeach } from './WayToTeach'

export const TeachSection = () => {
  return (
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  )
}
