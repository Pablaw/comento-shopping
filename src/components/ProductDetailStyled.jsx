import styled from "styled-components";
import { useState, useEffect } from "react";
import GoBackButton from "../components/GoBackButton";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../data/mockData";

const ProductDetailStyled = ({id, name, thumbnail, detailImg, reviewImg, price, setProducts} ) => {
    let { productID } = useParams();
    const [product, setproduct] = useState();

    useEffect(() => {
        setTimeout(() => {
            const result = getProductDetail(productID);
            setproduct(result);
        }, 1000);
        
    }, []);

    const [selMenu, setSelMenu] = useState();
    const [meunAlt, setMenuAlt] = useState();
    const [btn1Selected, setBtn1Selected] = useState(true);
    const [btn2Selected, setBtn2Selected] = useState();


    useEffect(() => {
        setTimeout(() => {
            setSelMenu(detailImg);
        }, 1000);
    }, []);

    
    const onClickSelectButton = (tno) => {
        if (tno === 1) {
            setSelMenu(detailImg);
            setMenuAlt("productDetailImage");
            setBtn1Selected(true);
            setBtn2Selected(false);
        } else if (tno === 2) {
            setSelMenu(reviewImg);
            setMenuAlt("productReviewComment");
            setBtn2Selected(true);
            setBtn1Selected(false);
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

            <MenuSelectButton 
            fontWeight={btn1Selected}
            btnColor={btn1Selected} 
            onClick={() => onClickSelectButton(1)}>상품 설명</MenuSelectButton>
            <MenuSelectButton 
            fontWeight={btn2Selected} 
            btnColor={btn2Selected} 
            onClick={() => onClickSelectButton(2)}>상품 후기</MenuSelectButton>
            
            <DetailImgContainer>
                <ProductDetailImg
                src={selMenu} alt={meunAlt} />
            </DetailImgContainer>
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

const MenuSelectButton = styled.div `
    display: inline-flex;
    background-color: ${props => (props.btnColor ? '#EEEEEE' : 'white')};
    justify-content: center;
    align-items: center;
    border: 1px solid #EEEEEE;
    width: 193px;
    height: 48px;
    font-size: 16px;
    font-weight: ${props => (props.fontWeight ? '700' : '400')};
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
    padding: 0 24px;
    padding-top: 25px;
`



export default ProductDetailStyled;