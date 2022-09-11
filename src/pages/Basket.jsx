import styled from "styled-components";
import { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import GoBackButton from "../components/GoBackButton";
import BasketItem from "../components/BasketItem";
import * as storage from "../utils/storage";

const Basket = ({id, setProducts}) =>{
    window.scrollTo(0, 0);
    
    const [basketItems, setbasketItems] = useState ();
    const [basketItemCount, setBasketItemCount] = useState (0);

    const productPrice = storage.getBasketItems();

    let productPriceSum = 0;
    for (let i=0; i < basketItemCount; i++ ) {
        productPriceSum += Number(productPrice[i].price.replace(',', '').replace('원', ''));
    }

    useEffect ( () => {
        // 1. 장바구니 데이터 가져오기.
       const items = storage.getBasketItems ();
       setbasketItems(items);
       setBasketItemCount(items.length);
    }, []);

    useEffect ( () => {
       const items = storage.getBasketItems ();
       setbasketItems(items);
    }, [basketItemCount]);

    const onClickRemoveButton = (productId) => {
        // TODO: 장바구니 상품 삭제
        storage.removeBasketItem(productId);
        setBasketItemCount(basketItemCount - 1);
    };

    const onClickOderButton = () => {
        if (window.confirm('주문되었습니다 :)')) {
            
        } else {
            alert("주문이 취소되었습니다.");
        }
    }

    // 2. UI 구현

    return (
    <PageSize>
        <Navigation name="장바구니" />
        <GoBackButton
            setProducts={setProducts}
            id={id} />
        {basketItems && 
            basketItems.map((item) => (
                <BasketItem
                    key={item.id}
                    thumbnail={item.thumbnail}
                    name={item.name}
                    price={item.price}
                    onClickRemoveButton={()=> onClickRemoveButton(item.id)}
                /> 
         ))}
         <OderDetails>
            <div>상품 금액 ({basketItemCount}개)</div>
            <div>{productPriceSum}원</div>
            <div>배송비</div>
            <div> 원</div>
            <div>총 주문금액 ({basketItemCount}개)</div>
            <div>{productPriceSum}원</div>
        </OderDetails>
        <OrderButton onClick={() => onClickOderButton()}>주문하기</OrderButton>
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

const OrderButton = styled.div `
    padding: 24px 150px;
    background-color: #24DBAF;
    font-size: 16px;
    font-weight: 700;
`;

const OderDetails = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    text-align: right;
    gap: 10px;
    padding: 5%;
`

export default Basket;