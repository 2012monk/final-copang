import {autoLoginWithAccessToken, getCookie, auth} from './_actions/user_actions';
import React, { Suspense } from 'react';
import TopBar from "./TopBar/TopBar";
import Header from "./header/Header.js";
import { Switch, Route } from "react-router-dom";
import Auth from "./TopBar/hoc/auth";
import CategoryForm from './header/SearchBox/CategoryForm';

import Cart from "./purchase/Cart";
import AddNewProductApp from "./product/AddNewProduct/AddNewProductApp";
import Container from './product/AddNewProduct/productRedux';
import ProductListRouteMain from './product/ProductList&Detail/ProductListRouteMain';
import MyCopang from "./member/MyCopang";
import LoginPage from "./TopBar/Component/LoginPage";
import RegisterPage from "./TopBar/Component/RegisterPage";
import RegisterSellerPage from "./Seller/Component/RegisterSellerPage";
import OrderComplete from "./purchase/OrderComplete";
import OrderPageApp from "./purchase/OrderPageApp";

import Menu from "./Menu";

import AddForm from "./youngjae/ProductAddTest";
import Test22 from "./hyunjin/Test22";
import Test from "./hyunjin/Test";
import PaymentProcess from './purchase/PaymentProcess';
import MainPage from './product/ProductList&Detail/MainPage';

//import SearchBox from "./header/SearchBox/SearchBox";

const RouteMain = () => {

  return (
    <div>
      {/* 자동로그인 */}
      { autoLoginWithAccessToken()}
      <Suspense fallback={(<div>Loading...</div>)}>
        <div style={{minWidth:'940px', maxWidth: '1280px', margin: 'auto'}}>
          <TopBar />
          <Header />
          <Menu />
          <Switch>
            <Route exact path="/" component={Auth(CategoryForm, null)} />
            <Route path="/member/1" component={Cart} />
            <Route path="/member/2" component={AddNewProductApp} />
<<<<<<< HEAD
            <Route path="/member/3" component={Container}/>
            <Route path="/product" component={ProductListRouteMain} />
=======
            <Route path="/member/3" component={MainPage}/>
            <Route path="/member/4" component={ProductListRouteMain} />
>>>>>>> 140e7b3c77bae274383a2742de74b951f34fb1c4
            <Route path="/member/5" component={MyCopang} />
            <Route path="/member/6" component={AddForm} />
            <Route path="/member/7" component={Test22} />
            <Route path="/member/8" component={Test} />
            <Route path="/member/9" component={PaymentProcess} />
            <Route path="/member/10" component={OrderComplete} />
            <Route path="/login" component={Auth(LoginPage, false)} />
            <Route path="/register" component={Auth(RegisterPage, false)} />
            <Route path="/sellerRegister" component={Auth(RegisterSellerPage, false)} />
            <Route path="/cart" component={Auth(Cart, true)} />
            <Route path="/mycopang" component={Auth(MyCopang, true)} />
            <Route path="/order/complete" component={Auth(OrderComplete)} />
            <Route path="/order/do" component={Auth(OrderPageApp)} />
          </Switch>
        </div>
      </Suspense>

    </div>
  );
};

export default RouteMain;