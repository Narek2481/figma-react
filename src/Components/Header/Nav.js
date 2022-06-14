import Mask from '../../img/Mask Group.png';
import { useState } from 'react';



export default function Nav() {
    const [manu, seTmanu] = useState('');
    return (
        <nav>
            <div className="logo">
                <img src={Mask} />
            </div>
            <div className='manu_icon'
                onClick={
                    () => {
                    if (manu == '') {
                        seTmanu('manu_block');
                    }else{
                        seTmanu('');
                    }
                }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={'manu_none' + ' ' + manu}>
                <li>
                    <a href="#"
                        onMouseOver={(e) => e.target.classList.toggle("border_link")}
                        onMouseOut={(e) => e.target.classList.toggle("border_link")}
                    >ГЛАВНАЯ</a>
                </li>
                <li>
                    <a href="#"
                        onMouseOver={(e) => e.target.classList.toggle("border_link")}
                        onMouseOut={(e) => e.target.classList.toggle("border_link")}
                    >О нас</a>
                </li>
                <li>
                    <a href="#"
                        onMouseOver={(e) => e.target.classList.toggle("border_link")}
                        onMouseOut={(e) => e.target.classList.toggle("border_link")}
                    >МЕНЮ</a>
                </li>
                <li>
                    <a href="#"
                        onMouseOver={(e) => e.target.classList.toggle("border_link")}
                        onMouseOut={(e) => e.target.classList.toggle("border_link")}
                    >заказать</a>
                </li>
                <li>
                    <a href="#"
                        onMouseOver={(e) => e.target.classList.toggle("border_link")}
                        onMouseOut={(e) => e.target.classList.toggle("border_link")}
                    >Контакты</a>
                </li>
            </ul>
        </nav>
    );
}