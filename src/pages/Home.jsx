import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Products, mockTheme2Products } from "../data/mockData";
import { useEffect, useState } from "react";

const Home = () =>{
    //state(상태) /외부에서 값을 가져오면 props, 내부에서 변경시 state
    //다시 렌더링 되는 조건값 (State)
    const [products, setProducts] = useState();

    /* useEffect의 경우, 배열에 담긴 값이 변할 때 함수를 실행한다.
    배열 내 값이 없으면 최초 한번만 실행 */
    // 조건에 의해서 실행되는 함수
    useEffect(() => {
        setTimeout(() => {
            setProducts(mockTheme1Products);
        }, 3000);

    }, []);

    const onClickThemeButton = (tno) => {
        if (tno === 1) {
            setProducts(mockTheme1Products);
        } else if (tno === 2) {
            setProducts(mockTheme2Products);
        }
        console.log("버튼 누름");
    };
    return (
/* sample page size: 390px  1322px */  
    <PageSize>
        <div className="header" >
            <Navigation />
            <ThemeButtonSection>
{/* onClick의 경우 html요소에만 접근이 가능하다. jsx 요소 접근 X */}
                <ThemeButton themeName={"#겨울 방한템"} onClick={() =>onClickThemeButton(1)} />
                <ThemeButton themeName={"#여름 더워요"} onClick={() =>onClickThemeButton(2)} />
            </ThemeButtonSection>
            <DivideLine />

        </div>
            <ProductSection>
                {/* {}가 있다면 js문법, 없는 경우는 html 문법 */}
                {/* TODO: mockData list를 화면에 노출하자 */}
                {/* 자바스크립트 map 문법 */}

                {/* 삼항연산자 */}
                {products ? products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.naem}
                    description={product.description}
                    thumbnail={product.thumbnail}
                />
                )) : (
                    <div>테마를 선택해주세요</div>
                )}
                {/* <ProductCard 
                    name={"비숑 블랙 머그잔"} 
                    description={"쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은\n블랙 & 화이트 비숑 머그잔입니다."} 
                    thumbnail={"https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"} 
                />

                <ProductCard 
                    name={"가열 보온 티코스터 온열 원터치 컵 받침대"} 
                    description={"언제나 따뜻하게 최대 12시간 동안\n최대 60도의 온도로 따듯한 차를 즐길 수 있습니다."} 
                    thumbnail={"https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg"} 
                />

                <ProductCard 
                    name={"벨루즈까사 솜사탕 파스텔 머그 4종 세트"} 
                    description={"솜사탕처럼 부드러운 쉐입에 스트라이프 조각이\n더해져 심플하면서도 세련된 파스텔 컬러의 머그"} 
                    thumbnail={"https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg"} 
                /> */}
            </ProductSection>   
    </PageSize>
    );
};

const PageSize = styled.div `
    width: 390px;
    height: 1322px;
    margin: 0 auto;
    border: solid; 
    border-color: #EEEEEE;
`;

const ThemeButtonSection = styled.section `
    display: flex;
    gap: 12px;
    padding: 40px 24px;

`;

const DivideLine = styled.section `
    background: #EEEEEE;
    height: 8px;
`;

const ProductSection = styled.div `
    padding: 0 24px;
`;

export default Home;