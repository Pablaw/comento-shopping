import styled from "styled-components";


const ProductDetailCard = ({thumbnail, name, description } ) => {


    return (
    <ProductDetailCardStyle>
        <ProductImg
        src={thumbnail} alt={name}
         />
        <ProductName>{name}</ProductName>
        <ProductDesc>{description}</ProductDesc>
    </ProductDetailCardStyle>
    );
}

const ProductDetailCardStyle = styled.section`
    width: 368px;
    height: 126px;
    padding-bottom: 10px;
    border-bottom: solid;
    border-color: #EEEEEE;
    border-width: 1px;
`

const ProductImg = styled.img `
    object-fit: cover;
    width: "120";
    height: "100"; 
    margin-top: 40px;
`;

const ProductName = styled.div `
    font-size: 20px;
    font-weight: bold;
    padding-top: 12px;
`;

const ProductDesc = styled.div `
    font-size: 16px;
    padding-top: 12px;
    white-space: pre-wrap;
`

export default ProductDetailCard;
