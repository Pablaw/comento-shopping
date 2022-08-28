import styled from "styled-components";


const ProductCard = ({name, description, thumbnail} ) => {
    return (
    <div>
        <ProductImg
        width="200" 
        src={thumbnail} alt={name} />
        <ProductName>{name}</ProductName>
        <ProductDesc>{description}</ProductDesc>
    </div>
    );
}


const ProductImg = styled.img `
    object-fit: cover;
    width: 340px;
    height: 204px;
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

export default ProductCard;