import styled from "styled-components";

const Navigation = () => {
    return (
        <div>
            <Title>코멘토 쇼핑</Title>
            <DivideLine />
        </div>
    );
};

const Title = styled.h3 `
    text-align: center;
    margin: 20px 0;
`;

const DivideLine = styled.hr `
    background: #EEEEEE;
    height: 1px;
    border: 0;
    margin: 0;
`;

export default Navigation;