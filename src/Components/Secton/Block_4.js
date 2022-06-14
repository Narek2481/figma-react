import icon1 from '../../img/block4_icon1.png';
import icon2 from '../../img/block4_icon2.png';
import icon3 from '../../img/block4_icon3.png';
import icon4 from '../../img/block4_icon4.png';
import povr from '../../img/povr.png';
import btn_false from '../../img/Ellipse 1 (1).png';
import btn_true from '../../img/Ellipse 2.png';
import hover from '../../img/block4_hover.png';
import { useEffect, useState } from 'react';


export default function Block_4() {

    const button_src = [btn_false, btn_true, btn_false];
    const slider_arr = [
        {
            h2: 'hopar',
            li1: 'Шаурма из курицы ',
            li2: 'Шаурма из свинины ',
            li3: 'Шаурма люля из курицы',
            li4: 'Шаурма люля из телятины ',
            li5: 'Шаурма из индейки',
            li6: 'Шаурма из люля из индейки ',
            li7: 'Шаурма из говядины ',
            li8: 'Шаурма цезарули',
            span1: '160р ',
            span2: '180р ',
            span3: '180р ',
            span4: '200р ',
            span5: '190р',
            span6: '200р ',
            span7: '190р',
            span8: '180р ',
            span_red: '450 гр'
        }, {
            h2: 'Шаурма на углях ',
            li1: 'Шаурма из курицы ',
            li2: 'Шаурма из свинины ',
            li3: 'Шаурма люля из курицы',
            li4: 'Шаурма люля из телятины ',
            li5: 'Шаурма из индейки',
            li6: 'Шаурма из люля из индейки ',
            li7: 'Шаурма из говядины ',
            li8: 'Шаурма цезарули',
            span1: '160р ',
            span2: '180р ',
            span3: '180р ',
            span4: '200р ',
            span5: '190р',
            span6: '200р ',
            span7: '190р',
            span8: '180р ',
            span_red: '450 гр'
        }, {
            h2: 'Шаурма на углях ',
            li1: 'Шаурма из курицы ',
            li2: 'Шаурма из свинины ',
            li3: 'Шаурма люля из курицы',
            li4: 'Шаурма люля из телятины ',
            li5: 'Шаурма из индейки',
            li6: 'Шаурма из люля из индейки ',
            li7: 'Шаурма из говядины ',
            li8: 'Шаурма цезарули',
            span1: '160р ',
            span2: '180р ',
            span3: '180р ',
            span4: '200р ',
            span5: '190р',
            span6: '200р ',
            span7: '190р',
            span8: '180р ',
            span_red: '450 гр'
        }];

    let chack = 1;
    let props = slider_arr[chack]

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
                        <div className='btn_container'>
                            <button className='btn1'>
                                <img src={button_src[0]} />
                            </button>
                            <button className='btn2'>
                                <img src={button_src[1]} />
                            </button>
                            <button className='btn3'>
                                <img src={button_src[2]} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}