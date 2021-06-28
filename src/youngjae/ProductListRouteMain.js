import React from 'react';
import {Route} from 'react-router-dom';
import ProductList from '../product/ProductList&Detail/ProductList';
import ProductDetail from '../product/ProductList&Detail/ProductDetail';
import test from './test';
import ProductDescBottom from '../product/ProductList&Detail/ProductDescBottom';
import ProductReviewBottom from '../product/ProductList&Detail/ProductReviewBottom';
import ProductQuestionBottom from '../product/ProductList&Detail/ProductQuestionBottom';

const RouteMain = () =>{
    return (
        <div>
            <ProductList />
            <Route exact path="/" component={ProductList}/>
            <Route path="/list" component={ProductList}/>
            <Route path="/member/6/product/selectOne/:sid" component={ProductDetail}/>
            <Route path="/product/selectOne/:sid/ProductDescBottom" component={ProductDescBottom}/>
            <Route path="/product/selectOne/:sid/ProductReviewBottom" component={ProductReviewBottom}/>
            <Route path="/product/selectOne/:sid/ProductQuestionBottom" component={ProductQuestionBottom}/>
            <Route path="/purchase/product/" component={test}/>
        </div>
    )
}

export default RouteMain;
