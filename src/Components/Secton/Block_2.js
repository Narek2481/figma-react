import icon_1 from '../../img/block2_icon1.png'
import icon_2 from '../../img/block2_icon2.png'
import icon_3 from '../../img/block2_icon3.png'

export default function Block_2({props}){


    return (
        <div className="block_2">
            <div>
                <img src={icon_3 } /><br />
                {props.age1}
                <p>МЯСНЫЕ БЛЮДА</p>
                
            </div>
            <div>
                <img src={ icon_2} /><br />
                {props.age2}
                <p>САЛАТЫ</p>
            </div>
            <div>
                <img src={icon_3 } /><br />
                {props.age3}
                <p>БЛЮДА ИЗ РЫБЫ</p>
            </div>
        </div>
    );
}