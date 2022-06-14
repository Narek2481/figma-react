import { BrowserRouter as Router,Link} from "react-router-dom";

export default function Footer_nav() {

    return (
        <ul>
            <li>
                <Link to='#'>ГЛАВНАЯ</Link>
            </li>
            <li>
                <Link to='#'>О нас</Link>
            </li>
            <li>
                <Link to='#'>МЕНЮ</Link>
            </li>
            <li>
                <Link to='#'>заказать</Link>
            </li>
            <li>
                <Link to='#'>Контакты </Link>
            </li>
        </ul>
    );
}