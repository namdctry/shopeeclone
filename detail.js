// thêm giảm số lượng
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const quantity = $('.quantity');
const btnReduce = $('.btn-reduce');
const btnIncrease = $('.btn-increase');

console.log(quantity.value);
btnReduce.onclick = function () {
    quantity.value = quantity.value == 0 ? 0: parseInt(quantity.value) - 1;
};

btnIncrease.onclick = () => {
    quantity.value = parseInt(quantity.value) + 1;
}



// on mouse img
const smallImg = $$('.agPpyA');
const bigImg = $('.GZ2Hvh')
console.log(smallImg);
console.log(bigImg.style.backgroundImage);

smallImg.forEach((img) => {
    img.onmousemove = () => {
        bigImg.style.backgroundImage = img.style.backgroundImage;
    };  
});


// 
const addProduct = $('.btn-add-product')
const cart = $('.header__cart-list')


addProduct.onclick = () => {
    const htmls = `<h4 class="header__cart-heading">Sản phẩm đã thêm</h4>
    <ul class="header__cart-list-item">
        <li class="header__cart-item">
            <img src="./img/anh7.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo sơ mi nam nữ dài tay unisex sơ mi công sở form rộng basic trơn kiểu Hàn Quốc TRENDYMAN vải lụa mềm mạic sinh mịn mát</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">160.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">2</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: Áo dài
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
        <li class="header__cart-item">
            <img src="./img/anh6.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo Sơ Mi Nam DRAU Tay Dài đẹp hàn quốc DR368XM Sọc Caro Vuông Đen</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">960.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">1</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: size M
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
        <li class="header__cart-item">
            <img src="./img/anh7.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo sơ mi nam nữ dài tay Unisex Basic màu trắng và đen sơ mi lụa học sinh mịn mát</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">126.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">2</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: Áo phông
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
        <li class="header__cart-item">
            <img src="./img/anh8.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo POLO nam cổ bẻ GIN vải CVC co giãn 4 chiều, form regular fit, sang trọng-lịch lãm - BUBMAN</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">963.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">2</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: Áo da
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
        <li class="header__cart-item">
            <img src="./img/anh9.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo khoác unisex LB, chất kaki jean nam nữ mang được, nhiều size, nhiều màu</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">1000.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">2</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: Xịn
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
        <li class="header__cart-item">
            <img src="./img/anh1.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo Khoác Jean Unisex Outfits Nam Nữ Form Rộng (Kèm hình thật + Video) - Áo khoác bò Leevin Store</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">2.000.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">4</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: Đểu
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
        <li class="header__cart-item">
            <img src="./img/anh2.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo sơ mi nam nữ dài tay Unisex Basic TRƠN Form rộng màu trắng và đen Chất cotton lụa mịn mát Bigsize Leevin Store</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">41.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">2</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: Cứng
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
        <li class="header__cart-item">
            <img src="./img/anh5.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo Khoác Jean Unisex Outfits Nam Nữ Form Rộng (Kèm hình thật + Video) - Áo khoác bò Leevin Store</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">100.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">2</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: Thép
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
        <li class="header__cart-item">
            <img src="./img/anh4.jpg" alt="" class="header__cart-img">
            <div class="header__cart-info">
                <div class="header__cart-item-head">
                    <h5 class="header__cart-item-name">Áo khoác unisex LB, chất kaki jean nam nữ mang được, nhiều size, nhiều màu</h5>
                    <div class="header__cart-price-wrap">
                        <span class="header__cart-item-price">700.000đ</span>
                        <span class="header__cart-item-multi">x</span>
                        <span class="header__cart-item-qnt">1</span>
                    </div>
                </div>
                <div class="header__cart-item-body">
                    <span class="header__cart-item-description">
                        Phân loại: Sắt
                    </span>
                    <span class="header__cart-item-remove">Xóa</span>
                </div>
            </div>
        
        </li>
    </ul>
    <a href="#" class="header__cart-view-cart btn btn--primary">Xem giỏ hàng</a href="#">`
    cart.innerHTML = htmls;
};


