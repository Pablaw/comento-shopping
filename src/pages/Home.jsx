import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Products, mockTheme2Products } from "../data/mockData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLoadImage from "../components/PageLoadImage";

const Home = () =>{
    const [products, setProducts] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            if(window.localStorage.getItem("Season") === "겨울" ) {
                setProducts(mockTheme1Products);
            } else {
                setProducts(mockTheme2Products);
            }
        }, 1000);
    }, []);



    const onClickThemeButton = (tno) => {
        if (tno === 1) {
            window.localStorage.setItem("Season", "겨울");
            setProducts(mockTheme1Products);
        } else if (tno === 2) {
            window.localStorage.setItem("Season", "여름");
            setProducts(mockTheme2Products);
        }
    };

    return (
/* sample page size: 390px  1322px */  
    <PageSize>
        <div className="header" >
            <Navigation />
            <ThemeButtonSection>
{/* onClick의 경우 html요소에만 접근이 가능하다. jsx 요소 접근 X */}
                <ThemeButton themeName={"#겨울 방한템"} onClick={() =>onClickThemeButton(1)} />
                <ThemeButton themeName={"#여름 대비템"} onClick={() =>onClickThemeButton(2)} />
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
                    onClick={() => navigate(`product/${product.id}`)}
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    thumbnail={product.thumbnail}
                    setProducts={setProducts}
                /> 
                )) : <PageLoadImage />}
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
    justify-content: center;
`;

const DivideLine = styled.section `
    background: #EEEEEE;
    height: 8px;
`;

const ProductSection = styled.div `
`;

export default Home;