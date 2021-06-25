import Menu from "./Menu";
import {BrowserRouter, Route} from 'react-router-dom';
import List from './List';
import Cart from '../purchase/Cart';
import Test from './Test';
import Test22 from './Test22';
import Test33 from './Test33';
import Copy from '../copy/Copy';

const RouteMain = () => {
    return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Route path="/test" component={Test}/>
                <Route path="/list" component={List}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/test22" component={Test22}/>
                <Route path="/test33" component={Test33}/>
                <Route path="/copy" component={Copy}/>

            </BrowserRouter>
        </div>
    )
}

export default RouteMain;