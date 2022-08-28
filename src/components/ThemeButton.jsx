import styled from "styled-components";

const ThemeButton = ({themeName}) => {
    return <ThemeButtonStyled>{themeName}</ThemeButtonStyled>
};

const ThemeButtonStyled = styled.div`
width: fit-content;
padding: 24px 16px;
background: rgba(0, 0, 0, 0.5);
border-radius: 10px;
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: #FFFFFF;
`;

export default ThemeButton;