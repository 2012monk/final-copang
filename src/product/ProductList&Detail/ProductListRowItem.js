import React from 'react';
import { withRouter } from 'react-router-dom';
import './Product.css';

const ProductListRowItem = (props) => {
    
    const numberFormat = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    let itemId = props.row.itemId
    return (
        <li
            onClick={
                () => {
                    props.history.push("/product/selectOne/" + itemId);
                }
            }>
            <dl>
                <dt>
                    <img alt={props.row.mainImg} src={props.row.mainImg} style={{ width: '230px', height: '230px' }} />
                </dt>
                <dd className="desc">
                    <div>
                        <div className="namedesc">
                            <div className="name">{props.row.itemName}</div>
                        </div>
                        <div className="price-area">
                            <em className="sale">
                                <strong className="price-value">{numberFormat(props.row.price)}</strong>원
                            </em>
                        </div>
                    </div>
                </dd>
            </dl>
        </li>

    )
}

export default withRouter(ProductListRowItem);
