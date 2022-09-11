const BASKET = "BASKET";

export const getBasketItems = () => {
    const items = localStorage.getItem(BASKET);
    return items ? JSON.parse(items) : [];
}

export const addBasket = (product) => {
    // TODO: 이미 저장되어 있는 장바구니 상품 리스트 불러와서 거기에 넣기
    let items = getBasketItems ();

    // !object = false, !!object = true

    // 동일 상품이 있는 경우 추가하지 않음
    const isSameProduct = !!items.find((item) => item.id === product.id);

    if (!isSameProduct) {
    items.push(product);
    localStorage.setItem(BASKET, JSON.stringify(items) );
    }
};