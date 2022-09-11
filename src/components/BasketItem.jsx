import styled from "styled-components";


const BasketItem = ({thumbnail, name, price, onClickRemoveButton } ) => {


    return (
        <div>
            <BasketItemStyled>
                <RowLayout>
                    <RowLayout>
                        <ProductImage src= {thumbnail}  />
                        <ColumnLayout>
                            <ProductName>{name}</ProductName>
                            <ProductPrice>{price}</ProductPrice>
                        </ColumnLayout>
                    </RowLayout>
                    <CloseButton onClick={onClickRemoveButton}>X</CloseButton>
                </RowLayout>
            </BasketItemStyled>
        </div>
    );
}

const BasketItemStyled = styled.div`
  padding: 16px;
  margin: 10px 0px;
`;
const RowLayout = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
    width: 120px;
    height: 100px;
    object-fit: cover;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const ProductName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
`;

const ProductPrice = styled.div`
    
`;

export default BasketItem;
