import styled from "styled-components";

const Navigation = ({name}) => {
    return (
        <div>
            <Title>{name}</Title>
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