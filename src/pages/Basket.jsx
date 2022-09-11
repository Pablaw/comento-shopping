import styled from "styled-components";

import Navigation from "../components/Navigation";
import GoBackButton from "../components/GoBackButton";
import ProductDetailCard from "../components/ProductDetailCard";

const Basket = ({id, setProducts}) =>{
    window.scrollTo(0, 0);

    return (
    <PageSize>
        <Navigation />
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