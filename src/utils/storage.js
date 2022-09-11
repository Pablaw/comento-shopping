const BASKET = "BASKET";

export const getBasketItems = () => {
    const items = localStorage.getItem(BASKET);
    return items ? JSON.parse(items) : [];
}

export const addBasket = (product) => {
    // TODO: 이미 저장되어 있는 장바구니 상품 리스트 불러와서 거기에 넣기
    let items = getBasketItems();

    // !object = false, !!object = true

    // 동일 상품이 있는 경우 추가하지 않음
    const isSameProduct = !!items.find((item) => item.id === product.id);

    if (!isSameProduct) {
    items.push(product);
    localStorage.setItem(BASKET, JSON.stringify(items) );
    }
};

export const removeBasketItem = (productId) => {
    
    // 기존 장바구니 상품 리스트 가져오기
    let items = getBasketItems ();

    // 삭제할 상품 제거하기
    items = items.filter(item => item.id !== productId);

    // 로컬스토리지 정보 초기화
    localStorage.removeItem(BASKET);

    // 변경된 상품 리스트 저장하기
    localStorage.setItem(BASKET, JSON.stringify(items));

    console.log("-----removeBasketItem");
    console.log(getBasketItems());
};