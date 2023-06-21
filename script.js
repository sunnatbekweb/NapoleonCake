"use strict"

let desktopMenu = document.querySelector('.desktop_menu')
let biList = document.querySelector('.bi-list')
let close = document.querySelector('.close')

biList.addEventListener('click', () => {
    desktopMenu.classList.remove('swipe_dm')
})

close.addEventListener('click', () => {
    desktopMenu.classList.add('swipe_dm')
})

let onm = document.querySelector('.open_nm')
let list = document.querySelector('.list_nm')

onm.addEventListener('click', () => {
    list.classList.toggle('onm')
})

let c_list = document.querySelector('.carousel_list')
let images = document.querySelectorAll('.carousel_list img')
let next = document.querySelector('.right')
let prev = document.querySelector('.left')

let count = 0

function slider() {
    if (count > images.length - 1) {
        count = 0
    }
    if (count < 0) {
        count = images.length
    }
    c_list.style.transform = `translateX(-${count * 100}%)`
}

next.addEventListener('click', () => {
    count++;
    slider()
})

prev.addEventListener('click', () => {
    count--;
    slider()
})

let c_list_mobile = document.querySelector('.carousel_list_mobile')
let img_mobile = document.querySelectorAll('.carousel_list_nobile img')
let right_m = document.querySelector('.right_m')
let left_m = document.querySelector('.left_m')

function slider_m() {
    if (count > img_mobile.length - 1) {
        count = 0
    }
    if (count < 0) {
        count = img_mobile.length
    }

    c_list_mobile.style.transform = `translateX(-${count * 100}%)`
}

right_m.addEventListener('click', () => {
    count++;
    slider_m()
})

left_m.addEventListener('click', () => {
    count--;
    slider_m()
})

let wr = document.querySelector('.c_wrapper')
let wr2 = document.querySelector('.c_wrapper2')
let wr3 = document.querySelector('.c_wrapper3')
let wr4 = document.querySelector(".c_wrapper4")
let wr5 = document.querySelector(".c_wrapper5")
let wr6 = document.querySelector(".c_wrapper6")

function renderToHTML() {
    let res = ""

    data.map((value) => {
        res += `
        <div class="card">
            <img src="${value.imageUrl}" alt="${value.title}">
            <h3>${value.title}</h3>
            <div class="rate">
                <p>${value.buyCount}</p>
                <span>${value.like}</span>
            </div>
            <div class="price">
                <p class="price">${value.price}</p>
                <span>${value.weight}</span>
            </div>
        </div>
        `
    })

    wr.innerHTML = res
    wr2.innerHTML = res
    wr3.innerHTML = res
    wr4.innerHTML = res
    wr5.innerHTML = res
    wr6.innerHTML = res
}

renderToHTML()