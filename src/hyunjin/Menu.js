import { Link } from "react-router-dom";

const Menu = () =>{
    return (
        <div>
            <ul>
                <li>
                    <Link to="/test">장바구니 테스트</Link>
                </li>
                <li>
                    <Link to="/cart">장바구니</Link>
                </li>
                <li>
                    <Link to="/list">상품 리스트</Link>
                </li>
                <li>
                <Link to="/test22/13">Test22 페이지</Link>
                </li>
            </ul>
            <hr/>
        </div>
    )
}

export default Menu;