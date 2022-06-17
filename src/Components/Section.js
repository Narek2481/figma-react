import Block_2 from "./Secton/Block_2";
import Block_3 from "./Secton/Block_3";
import Block_4 from "./Secton/Block_4";
import Block_5 from "./Secton/Block_5";
import Block_6 from "./Secton/Block_6";
import Spac from "./Secton/Spac";


export default function Section(){
    const props = {
        age1: '15',
        age2:'8',
        age3:'12',
    }
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
            span3: '180р  x',
            span4: '200р  x',
            span5: '190р  x' ,
            span6: '200р  x',
            span7: '190р  x',
            span8: '180р x',
            span_red: '450 гр x'
        }];
    return(
        <section>
            <Spac/>
            <Block_2 props ={props} />
            <Block_3/>
            <Block_4 slider_arr = {slider_arr}/>
            <Block_5/>
            <Block_6/>
        </section>
    );
}