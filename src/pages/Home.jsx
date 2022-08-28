import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const Home = () =>{
    return (
    /* sample page size: 390px  1322px */  
    <PageSize>
        <div class="header" >
            <Navigation />
            <ThemeButtonSection>
                <ThemeButton themeName={"#겨울 방한템"} />
                <ThemeButton themeName={"#따순머그컵"} />
            </ThemeButtonSection>
            <DivideLine />

        </div>
            <ProductSection>
                <ProductCard 
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
                />
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
    height: 1px;
    border: 0;
`;

const ProductSection = styled.div `
    padding: 0 24px;
`;

export default Home;