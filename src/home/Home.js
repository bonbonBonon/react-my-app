import React , {Component} from 'react';
import Head from './components/head/Head';
import Stage from "./components/stage/Stage";
import Foot from "./components/foot/Foot";

class Home extends Component{
    render() {
        return(
            <div>
                <Head/>
                <Stage/>
                <Foot/>
            </div>
        )
    }
}

export default Home;

