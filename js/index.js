const btn_top = document.querySelector(".btn_top");
const btn_bottom = document.querySelector(".btn_bottom");
const img_wrap = document.querySelector(".product");
const img_lst = document.getElementsByClassName("product_lst");

let move_area = 0;

function btn_top_click() {
    move_area -= 200;
    if (move_area < -(img_lst.length * 200 - 200)) {
        move_area = -400;
        img_wrap.style.top = move_area + "px";
    }
    else {
        img_wrap.style.top = move_area + "px";
    }
}

function btn_bottom_click() {
    move_area += 200;
    if (move_area > 0) {
        move_area = 0;
        img_wrap.style.top = move_area + "px";
    }
    else {
        img_wrap.style.top = move_area + "px";
    }
}

btn_top.addEventListener("click", btn_top_click);
btn_bottom.addEventListener("click", btn_bottom_click);