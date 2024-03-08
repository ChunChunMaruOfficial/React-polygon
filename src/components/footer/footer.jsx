import { useState } from 'react'  //вроде это для счетчика
import './footer.scss'
import averageimg from '../../assets/img/ps1_move.jpg'
import secondaverageimg from '../../assets/img/ps2_move.jpg' //averageimg - переменная картинки



// атрибуты элемента (задаются в main.jsx)
function Footer({ firstword, secondword }) {
    //счетчик, функция изменяющая значение счетчика
    const [count, setCount] = useState(0); //0 - начальное значение

    return (
        <>
            <div className='footer'>
                <ul>
                    <li>{firstword} + {secondword}</li>
                    <li>{secondword} - {firstword}</li>
                    <li>{firstword} / {secondword}</li>
                </ul>
                {/* просто название функции */}
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setCount(0)}>reset</button>
                <p>{count}</p>
                { count === 1 && (<img src={averageimg} alt="" />) /*когда count === 6 появляется картинка*/}
                { count === 2 && (<img src={secondaverageimg} alt="" />)}
            </div>

        </>
    )
}

export default Footer
