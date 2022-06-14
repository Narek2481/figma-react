import img3 from '../../img/35 1.png';
import img2 from '../../img/33 1.png';
import img1 from '../../img/32 1.png';

export default function Block_5() {


    return (
        <div className='block_5'>
            <p>ПОЧЕМУ ВЫБРАТЬ</p>
            <h2>НАш шашлычок </h2>
            <div className="block_5_child_container">
                <div>
                    <img src={img1} /><br/>
                    <span>
                        100% СВЕЖИЕ
                        ПРОДУКТЫ
                    </span>
                </div>
                <div>
                    <img src={img3} /><br/>
                    <span>
                        ВКУСНАЯ
                        ЕДА
                    </span>
                </div>
                <div>
                    <img src={img2} /><br/>
                    <span>
                        дружный
                        коллектив
                    </span>
                </div>
            </div>
        </div>
    );
}