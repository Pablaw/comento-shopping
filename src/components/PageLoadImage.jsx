import styled from "styled-components";

const pageLoadingImg = () => {
    return (
    <LoadingImg src="https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/loadingApple.gif" />
    )
}

const LoadingImg = styled.img`
    width: 100px;
    margin-left: 140px;
    margin-top: 180px;
`

export default pageLoadingImg;