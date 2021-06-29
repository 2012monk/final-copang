 import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouteHyunjin from "./hyunjin/RouteHyunjin";
import Cart from "./purchase/Cart";
import Menu from "./Menu";
import ProductListApp from './youngjae/ProductListApp';
import OrderPageApp from "./purchase/OrderPageApp";
import MyCopang from "./member/MyCopang";
import TopBar from "./TopBar/TopBar";
import LoginPage from './TopBar/Component/LoginPage';
import RegisterPage from './TopBar/Component/RegisterPage';

const RouteMain = () => {
    return (
        <div>
            <BrowserRouter>
                <TopBar />
                <Route path="/member/1" component={Cart} />
                <Route path="/member/2" component={OrderPageApp} />
                {/* <Route path="/member/3" component={}/> */}
                <Route path="/member/4" component={ProductListApp}/>
                <Route path="/member/5" component={MyCopang} />
                <Route path="/member/6" component={RouteHyunjin} />
                <Route path="/member/7" component={RouteHyunjin} />
            </BrowserRouter>
        </div>
    );
};

export default RouteMain;
