import Footer_nav from "./Footer/Footer_nav";


export default function Footer() {


    return (
        <footer>
            <div className='block_7'>
                <form>
                    <button type='submit'>заказать</button>
                    <div className='input_container'>
                        <input type='text' placeholder='имя ' />
                        <input type='text' placeholder ='фамилия '/>
                        <input type='text' placeholder='номер телефона'/>
                    </div>
                    <textarea placeholder='Что вы хотите '></textarea>
                    <button type='submit'>заказать</button>
                </form>
            </div>
            <Footer_nav/>
        </footer>
    );
}