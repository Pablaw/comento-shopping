import styled from "styled-components";
import { mockTheme1Products, mockTheme2Products } from "../data/mockData";
import { useState, useEffect } from "react";
import GoBackButton from "../components/GoBackButton";

const ProductDetailStyled = ({id, name, thumbnail, detailImg, reviewImg, price, setProducts} ) => {

    const [selMenu, setSelMenu] = useState();
    const [meunAlt, setMenuAlt] = useState();

    useEffect(() => {
        setTimeout(() => {
            setSelMenu(detailImg);
        }, 1000);
    }, []);

    
    const onClickSelectButton = (tno) => {
        if (tno === 1) {
            setSelMenu(detailImg);
            setMenuAlt("productDetailImage");

        } else if (tno === 2) {
            setSelMenu(reviewImg);
            setMenuAlt("productReviewComment");
        }
        }
    
    return (
    <div>
        <ProductCardStyle>
            <GoBackButton
            setProducts={setProducts}
            id={id} />
            <ProductImg
            src={thumbnail} alt={name} />
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>

            <MenuSelectButton onClick={() => onClickSelectButton(1)}>상품 설명</MenuSelectButton>
            <MenuSelectButton onClick={() => onClickSelectButton(2)}>상품 후기</MenuSelectButton>
            <DetailImgContainer>
                <ProductDetailImg
                src={selMenu} alt={meunAlt} />
            </DetailImgContainer>
            <BasketButton>장바구니 담기</BasketButton>
        </ProductCardStyle>
    </div>
    );
}

const ProductCardStyle = styled.div`
    padding-bottom: 40px;  
`;

const ProductImg = styled.img `
    object-fit: cover;
    width: 100%;
`;

const ProductName = styled.div `
    font-size: 20px;
    font-weight: bold;
    padding-top: 24px;
    padding-left: 24px;
`;

const ProductPrice = styled.div `
    font-size: 16px;
    padding-top: 8px;
    padding-left: 24px;
`
const MenuSelectButton = styled.button `
    background: none;
	color: inherit;
	border: solid;
    border-width: 1px;
    border-color: #EEEEEE;
    width: 195px;
    height: 48px;
    font-size: 16px;
    margin-top: 24px;
`

const DetailImgContainer = styled.div `
    width: 390px;
    height: 730px;
    overflow: overlay;
`

const ProductDetailImg = styled.img `
    object-fit: cover;
    width: 87%;
    padding: 25px 24px;
`

const BasketButton = styled.div `
    padding: 24px 150px;
    background-color: #24DBAF;
    font-size: 16px;
    font-weight: 700;
`

export default ProductDetailStyled;