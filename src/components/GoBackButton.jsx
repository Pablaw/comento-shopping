import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {

    const navigate = useNavigate();

    return (
            <Rectanle
             onClick={() => {
                navigate(-1);
             }} 
             />
    );
};

const Rectanle = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    top: 24.93px;
    left: 33px;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    transform: rotate(-45deg);
`;

export default GoBackButton;