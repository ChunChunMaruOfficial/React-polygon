import { useEffect, useState } from 'react' //все хуки подключать сдесь!!!!
import styles from './bosses.module.scss'

function Terraria_bosses({thing}) {
  return (
    <div className={styles.container} key={thing.img}>
          <img src={thing.img}></img>
          <p>{thing.tittle}</p>
          <p>health point: {thing.HP}</p>
          <p>damage: {thing.damage}</p>
          <p>Habitat: {thing.Habitat}</p>
          <p>achievement: "{thing.achievement}"</p>
    </div>)
}

export default Terraria_bosses