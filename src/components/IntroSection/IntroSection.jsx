import React from 'react'
import styles from './IntroSection.module.scss'

// /*export default function IntroSection() {

//   return (
//     <section>
//       <h1 className='centered'>Result University</h1>
//       <h3 className='centered'>Пивотека для форнтов, мы тебе поможем , будь здоров!</h3>
//     </section>
//   )
// }*/
const e = React.createElement

export default function IntroSection() {
  return e('section', null, [
    e('h1', { className: styles.centered }, 'Result University'),
    e('h3', { className: styles.second }, 'Пивотека для форнтов, мы тебе поможем , будь здоров!'),
  ])
}
