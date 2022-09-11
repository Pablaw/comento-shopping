import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProductDetail } from "../data/mockData";
import Navigation from "../components/Navigation";
import ProductDetailStyled from "../components/ProductDetailStyled";
import PageLoadImage from "../components/PageLoadImage";


const ProductDetail = () => {
    /* 페이지 로드 시 스크롤 최상단 이동 */
    window.scrollTo(0, 0);
    //URL에서 parameter 변수(productId) 받아오는 로직
    let { productID } = useParams();
    // console.log(useParams(), productId, "str");
    const [product, setproduct] = useState();

    useEffect(() => {
        setTimeout(() => {
            const result = getProductDetail(productID);
            setproduct(result);
        }, 1000);
        
    }, []);

    return (
        <PageSize>
            <div className="header" >
                <Navigation name="코멘토 쇼핑" />
            </div>
            
            <Content>
                {console.log(product)}
                {product ? (
                <ProductDetailStyled
                    id={product.id}
                    thumbnail={product.thumbnail}
                    name={product.name}
                    price={product.price}
                    detailImg={product.detailImg}
                    reviewImg={product.reviewImg}
                />) : <PageLoadImage />}
            </Content>
            
        </PageSize>
    )}
            /* {조건 ? true : false}
            {조건 && true} */
        // {product && (
        // <div>
        //     <div>상품 ID : {product.id}</div>
        //     <img src={product.thumbnail} alt={product.name} width="200" />
        //     <div>{product.name}</div>
        //     <div>{product.description}</div>
        // </div>
        // )}

const PageSize = styled.div `
    width: 390px;
    height: 1322px;
    margin: 0 auto;
    border: solid; 
    border-color: #EEEEEE;
`;

const Content = styled.section `
`
export default ProductDetail;