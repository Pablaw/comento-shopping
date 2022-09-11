import styled from "styled-components";

import Navigation from "../components/Navigation";
import GoBackButton from "../components/GoBackButton";
import ProductDetailCard from "../components/ProductDetailCard";
import * as strorage from "../utils/storage";

const Basket = ({id, setProducts}) =>{
    window.scrollTo(0, 0);
    console.log(strorage.getBasketItems() );

    return (
    <PageSize>
        <Navigation name="장바구니" />
        <GoBackButton
            setProducts={setProducts}
            id={id} />
        <ProductDetailCard />
        <div>장바구니 페이지</div>
    </PageSize>
    )
};


const PageSize = styled.div `
    width: 390px;
    height: 1322px;
    margin: 0 auto;
    border: solid; 
    border-color: #EEEEEE;
`;

export default Basket;