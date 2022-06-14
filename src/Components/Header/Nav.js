import Mask from '../../img/Mask Group.png';
import { useState } from 'react';
import React from "react";
import { BrowserRouter as Router,Link} from "react-router-dom";



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
                            } else {
                                seTmanu('');
                            }
                        }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={'manu_none' + ' ' + manu}>
                    <li>
                        <Link to="#"
                            onMouseOver={(e) => e.target.classList.toggle("border_link")}
                            onMouseOut={(e) => e.target.classList.toggle("border_link")}
                        >ГЛАВНАЯ</Link>
                    </li>
                    <li>
                        <Link to="#"
                            onMouseOver={(e) => e.target.classList.toggle("border_link")}
                            onMouseOut={(e) => e.target.classList.toggle("border_link")}
                        >О нас</Link>
                    </li>
                    <li>
                        <Link to="#"
                            onMouseOver={(e) => e.target.classList.toggle("border_link")}
                            onMouseOut={(e) => e.target.classList.toggle("border_link")}
                        >МЕНЮ</Link>
                    </li>
                    <li>
                        <Link to="#"
                            onMouseOver={(e) => e.target.classList.toggle("border_link")}
                            onMouseOut={(e) => e.target.classList.toggle("border_link")}
                        >заказать</Link>
                    </li>
                    <li>
                        <Link to="#"
                            onMouseOver={(e) => e.target.classList.toggle("border_link")}
                            onMouseOut={(e) => e.target.classList.toggle("border_link")}
                        >Контакты</Link>
                    </li>
                </ul>
            </nav>
    );
}