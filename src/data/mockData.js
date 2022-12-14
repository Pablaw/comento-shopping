export const mockTheme1Products = [
    {
      id: 1,
      name: "비숑 블랙 머그잔",
      description:
        "쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg",
      detailImg:
        "https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/comento/productDetail1.svg",
      price:
      "21,800원",
      reviewImg:
        "https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/comento/ProductReviewMock.png",
    },
    {
      id: 3,
      name: "가열 보온 티코스터 온열 원터치 컵 받침대",
      description:
        "언제나 따뜻하게 최대 2시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg",
        detailImg:
        "https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/comento/productDetail1.svg",
        price:
        "19,800원",
    },
    {
      id: 10,
      name: "벨루즈까사 솜사탕 파스텔 머그 4종 세트",
      description:
        "솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg",
      detailImg:
      "https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/comento/productDetail1.svg",
      price:
      "21,800원",
    },
  ];
  
  export const mockTheme2Products = [
    {
      id: 7,
      name: "쏘쿨 냉감 이불",
      description: "점점 더워지는 여름, 소쿨 냉감 이불 덮고 주무세요",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product4.jpg",
      detailImg:
      "https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/comento/productDetail2.png",
      reviewImg:
        "https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/comento/productReview3.svg",
      price:
      "21,800원",
    },
    {
      id: 5,
      name: "리모컨 에어 서큘레이터",
      description: "자연 바람 그대로를 담은, 리모컨 에어 서큘레이터",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product5.jpg",
      detailImg:
      "https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/comento/productDetail1.svg",
      price:
      "21,800원",
    },
    {
      id: 6,
      name: "얼음 트레이 얼음틀 36구 4p + 아이스큐브",
      description:
        "여름에만 얼음을 이용하지 않는 것처럼, 이제는 냉동실에 한번 얼려서 사계절 내내 드세요",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product6.jpg",
      detailImg:
      "https://raw.githubusercontent.com/Pablaw/contentRepo/main/img/comento/productDetail1.svg",
      price:
      "21,800원",
    },
  ];

  export const getProductDetail = (productId) => {
    // console.log([...mockTheme1Products, ...mockTheme2Products]);
    return [...mockTheme1Products, ...mockTheme2Products].find((product) => {

      return product.id === Number(productId);
    });
  };