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
    
    return(
        <section>
            <Spac/>
            <Block_2 props ={props} />
            <Block_3/>
            <Block_4/>
            <Block_5/>
            <Block_6/>
        </section>
    );
}