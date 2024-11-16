//Cambio de cantidad de articulos ingresado por el usuario.

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
    // console.log(userInputNumber);
});

minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    // console.log(userInputNumber);
});

//Agregar el total de productos al carrito cuando se presione el boton ADD TO CART.

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);


addToCartBtn.addEventListener('click', () => {
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();

});

//Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
//let priceModal = document.querySelector('.cart-modal__price');
const producContainer = document.querySelector('.cart-modal__chekout-container');

cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');

    if (lastValue == 0) {
        producContainer.innerHTML = '<p class="cart-empty">your cart is empty</p>';
    } else {
        drawProductInModal();
    };

});

//Borrar el contenido del carrito

function deleteProduct() {
    const deleteProducBtn = document.querySelector('.cart-modal__delete');


    deleteProducBtn.addEventListener('click', () => {
        producContainer.innerHTML = '<p class="cart-empty">your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
};

//Cambiar imagenes al presionar botones flecha

const imageContainer = document.querySelector('.gallery__image-conteiner');
const previusGaleryBtn = document.querySelector('.gallery__previus');
const nexGaleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;


nexGaleryBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
});

previusGaleryBtn.addEventListener('click', () => {
    changPreviusImage(imageContainer);
});


//Mostrar el modal de imagenes cuando hago click en la  imagen principal.
const imageModal = document.querySelector('.modal-gallery__background');
const clouseModalBtn = document.querySelector('.modal-gallery__close');

const mediaQuery = window.matchMedia('(min-width: 1110px)');

imageContainer.addEventListener('click', () => {
    if (mediaQuery.matches) {
        imageModal.style.display = 'grid';
    };
});

clouseModalBtn.addEventListener('click', () => {
    imageModal.style.display = 'none';
});


//Cambiar las imagenes principales desde las miniaturas.

let thumbnails = document.querySelectorAll('.gallery__thumbnails');
thumbnails = [...thumbnails];

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event => {
        console.log(event.target.id);
        imageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id}.jpg')`;
    });
});

//Cambiar las imagenes principales desde las miniaturas en el modal.

let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnailss');
const modalImageContainer = document.querySelector('.modal-gallery__image-conteiner');
modalThumbnails = [...modalThumbnails];

modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event => {
        console.log(event.target.id.slice(-1));
        modalImageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id.slice(-1)}.jpg')`;
    });
});


//Cambiar imagen principal del modal a travez de flechas

const previousModalBtn = document.querySelector('.modal-gallery__previus');
const nextModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', () => {
    changeNextImage(modalImageContainer);
});

previousModalBtn.addEventListener('click', () => {
    changPreviusImage(modalImageContainer);
});


//Mostrar el Navbar al presionar le menu de hamburguesa

const menuBurguer = document.querySelector('.header__menu');
const menu1 = document.querySelector(`.modal-navbar__background`);
const menu2 = document.querySelector(`.modal-navbar`);
menuBurguer.addEventListener('click', () => {
    menu1.style.display = 'block';
    menu2.style.display = 'block';

});

//Cerrar modal al apretar close icon

const closeBtn = document.querySelector('.modal-navbar__close-icon');
closeBtn.addEventListener('click', () => {
    menu1.style.display = 'none';
    menu2.style.display = 'none';
});


//Funciones

function drawProductInModal() {
    producContainer.innerHTML = ` <div class="cart-modal__details-container">
    <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
    <div>
      <p class="cart-modal__product">Autumn Limited Edition</p>
      <p class="cart-modal__price">$125.00 x 3 <span> $375.00</span></p>
    </div>
    <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
  </div>
  <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = ` $125.00 x ${lastValue} <span> $${lastValue * 125}.00</span>`;
}

function changeNextImage(imgConteiner) {
    if (imgIndex === 4) {
        imgIndex = 1;
    } else {
        imgIndex++;
    }

    imgConteiner.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}

function changPreviusImage(imgConteiner) {
    if (imgIndex === 1) {
        imgIndex = 4;
    } else {
        imgIndex--;
    };

    imgConteiner.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}






