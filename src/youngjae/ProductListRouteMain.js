import React from 'react';
import {Route} from 'react-router-dom';
import ProductList from '../product/ProductList&Detail/ProductList';
import ProductDetail from '../product/ProductList&Detail/ProductDetail';
import test from './test';
import ProductDescBottom from '../product/ProductList&Detail/ProductDescBottom';
import ProductReviewBottom from '../product/ProductList&Detail/ProductReviewBottom';
import ProductQuestionBottom from '../product/ProductList&Detail/ProductQuestionBottom';

const ProductListRouteMain = () =>{
    return (
        <div>
            <ProductList />
            <Route exact path="/member/4/" component={ProductList}/>
            <Route path="/member/4/list" component={ProductList}/>
            <Route path="/member/4/product/selectOne/:sid" component={ProductDetail}/>
            <Route path="/member/4/product/selectOne/:sid/ProductDescBottom" component={ProductDescBottom}/>
            <Route path="/member/4/product/selectOne/:sid/ProductReviewBottom" component={ProductReviewBottom}/>
            <Route path="/member/4/product/selectOne/:sid/ProductQuestionBottom" component={ProductQuestionBottom}/>
            <Route path="/member/4/purchase/product/" component={test}/>
        </div>
    )
}

export default ProductListRouteMain;