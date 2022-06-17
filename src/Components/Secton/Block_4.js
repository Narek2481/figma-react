import icon1 from '../../img/block4_icon1.png';
import icon2 from '../../img/block4_icon2.png';
import icon3 from '../../img/block4_icon3.png';
import icon4 from '../../img/block4_icon4.png';
import povr from '../../img/povr.png';
import btn_false from '../../img/Ellipse 1 (1).png';
import btn_true from '../../img/Ellipse 2.png';
import hover from '../../img/block4_hover.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Block_4({ slider_arr }) {
    console.log(slider_arr)
    let props = slider_arr[0];
    let props2 = slider_arr[1];
    let props3 = slider_arr[2];

    return (
        <div className="block_4">
            <div className='block_4_child_1'>
                <div >
                    <img
                        src={icon1}
                    />

                </div>
                <div>
                    <img
                        src={icon2}
                    />

                </div>
                <div>
                    <img
                        src={icon3}
                    />


                </div>
                <div>
                    <img
                        src={icon4}
                    />

                </div>
            </div>
            <div className='block_4_child_2'>
                <Carousel>
                    <div className='block_4_child_2_child'>
                        <div>
                            <img src={povr} />
                        </div>
                        <div>
                            <h2>{props.h2}</h2>
                            <ul>
                                <li>
                                    {props.li1}
                                    <span>
                                        <span>{props.span_red}</span>
                                        {props.span1}
                                    </span>
                                </li>
                                <li>{props.li2}
                                    <span>
                                        <span>{props.span_red}</span>
                                        {props.span2}
                                    </span>
                                </li>
                                <li>{props.li3}
                                    <span>
                                        <span>{props.span_red}</span>
                                        {props.span3}
                                    </span>
                                </li>
                                <li>{props.li4}
                                    <span>
                                        <span>{props.span_red}</span>
                                        {props.span4}
                                    </span>
                                </li>
                                <li>{props.li5}
                                    <span>
                                        <span>{props.span_red}</span>
                                        {props.span5}
                                    </span>
                                </li>
                                <li>{props.li6}
                                    <span>
                                        <span>{props.span_red}</span>
                                        {props.span6}
                                    </span>
                                </li>
                                <li>{props.li7}
                                    <span>
                                        <span>{props.span_red}</span>
                                        {props.span7}
                                    </span>
                                </li>
                                <li>{props.li8}
                                    <span>
                                        <span>{props.span_red}</span>
                                        {props.span8}
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div className='block_4_child_2_child'>
                        <div>
                            <img src={povr} />
                        </div>
                        <div>
                            <h2>{props2.h2}</h2>
                            <ul>
                                <li>
                                    {props2.li1}
                                    <span>
                                        <span>{props2.span_red}</span>
                                        {props2.span1}
                                    </span>
                                </li>
                                <li>{props2.li2}
                                    <span>
                                        <span>{props2.span_red}</span>
                                        {props2.span2}
                                    </span>
                                </li>
                                <li>{props2.li3}
                                    <span>
                                        <span>{props2.span_red}</span>
                                        {props2.span3}
                                    </span>
                                </li>
                                <li>{props2.li4}
                                    <span>
                                        <span>{props2.span_red}</span>
                                        {props2.span4}
                                    </span>
                                </li>
                                <li>{props2.li5}
                                    <span>
                                        <span>{props2.span_red}</span>
                                        {props2.span5}
                                    </span>
                                </li>
                                <li>{props2.li6}
                                    <span>
                                        <span>{props2.span_red}</span>
                                        {props2.span6}
                                    </span>
                                </li>
                                <li>{props2.li7}
                                    <span>
                                        <span>{props2.span_red}</span>
                                        {props2.span7}
                                    </span>
                                </li>
                                <li>{props2.li8}
                                    <span>
                                        <span>{props2.span_red}</span>
                                        {props2.span8}
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className='block_4_child_2_child'>
                        <div>
                            <img src={povr} />
                        </div>
                        <div>
                            <h2>{props3.h2}</h2>
                            <ul>
                                <li>
                                    {props3.li1}
                                    <span>
                                        <span>{props3.span_red}</span>
                                        {props3.span1}
                                    </span>
                                </li>
                                <li>{props3.li2}
                                    <span>
                                        <span>{props3.span_red}</span>
                                        {props3.span2}
                                    </span>
                                </li>
                                <li>{props3.li3}
                                    <span>
                                        <span>{props3.span_red}</span>
                                        {props3.span3}
                                    </span>
                                </li>
                                <li>{props3.li4}
                                    <span>
                                        <span>{props3.span_red}</span>
                                        {props3.span4}
                                    </span>
                                </li>
                                <li>{props3.li5}
                                    <span>
                                        <span>{props3.span_red}</span>
                                        {props3.span5}
                                    </span>
                                </li>
                                <li>{props3.li6}
                                    <span>
                                        <span>{props3.span_red}</span>
                                        {props3.span6}
                                    </span>
                                </li>
                                <li>{props3.li7}
                                    <span>
                                        <span>{props3.span_red}</span>
                                        {props3.span7}
                                    </span>
                                </li>
                                <li>{props3.li8}
                                    <span>
                                        <span>{props3.span_red}</span>
                                        {props3.span8}
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}