import { useEffect, useState } from 'react'
import Terraria_bosses from '../terraria_bosses/bosses';
import BossesSkeleton from '../terraria_bosses/skeleton';
import styles from './App.module.scss'
import nintendo from '../../assets/img/nintendo_move.jpg'
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App(Anycontent) {
  const barray = ['alpha', 'sigma', 'omega', 'gamma', 'beta', 'zentavrus']

  const [count, setCount] = useState(0);
  const [countnew, setnewCount] = useState(0);
  const [countimg, setimgCount] = useState(false);
  const [countarray, setcountarray] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch('https://65e621a2d7f0758a76e82b86.mockapi.io/items')
      .then((src) => {
        return src.json()
      })
      .then((scr) => {
        setcountarray(scr)
        setisLoading(false) //убираем флаг для склетонов
      }

      )

  }, [])


  return (
    <>
      <div className={styles.app}>
        <h1>Vite / Average text</h1>
        <p>{Anycontent.auto}</p>
        {/* {объект.атрибут объекта} (задаются в main.jsx) */}
        <p>{Anycontent.price}</p>

        <button onClick={() => setimgCount(!countimg)}>{countimg ? "nintendo on" : "nintendo off"}</button>
        {countimg && (<img src={nintendo} alt="" />)}

        <div>
          <button onClick={() => setCount(0)} className={count === 0 ? 'superbutton' : ''}>badstyle 1st</button>
          <button onClick={() => setCount(1)} className={count === 1 ? 'superbutton' : ''}>badstyle 2st</button>
          <button onClick={() => setCount(2)} className={count === 2 ? 'superbutton' : ''}>badstyle 3st</button>
          <button onClick={() => setCount(3)} className={count === 3 ? 'superbutton' : ''}>badstyle 4st</button>
        </div>
      </div>
      <div className={styles.arraybutton}>
        {barray.map((value, i) => (
          <button key={i} onClick={() => setnewCount(i)} className={countnew == i ? styles.superbutton : styles}>{value}</button>
          //если массив статичный, то можно передавать индекс как key
        ))}
      </div>
      <div className={styles.bosswrapper}>
        <Routes>
          <Route path="/" element=  {isLoading ? 
          ([...new Array(6)].map((index, value) => (  //массив (локальный!) сккелетонов во время загрузки
            <BossesSkeleton key={value} thing={index} />
          ))) : (countarray.map((index, value) => (  //массив данных после загрузки 
            <Terraria_bosses key={value} thing={index} />
          )))
        }/>
        <Route path='*' element={<p>* - это когда не один из путей не оказался подходящим...</p>}/>
          </Routes>




      
      </div>

    </>
  )
}

export default App
