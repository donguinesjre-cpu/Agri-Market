//Mangga Item
const btnMangga = document.getElementById("mangga");
btnMangga.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Mangga"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Mangga">
        <h4 class="name">Mangga</h4>
        <h4 class="totalPrice">450.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners
    const newItem = cart.querySelector('.cart-item[data-name="Mangga"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Mangga is already in the cart!");
  }
});

//Bawang Item
const btnBawang = document.getElementById("bawang")
btnBawang.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Bawang"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Bawang">
        <h4 class="name">Bawang</h4>
        <h4 class="totalPrice">400.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners dynamically
    const newItem = cart.querySelector('.cart-item[data-name="Bawang"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Bawang is already in the cart!");
  }
});

//Kalamansi
const btnKalamansi = document.getElementById("kalamansi")
btnKalamansi.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Kalamansi"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Kalamansi">
        <h4 class="name">Kalamansi</h4>
        <h4 class="totalPrice">400.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners dynamically
    const newItem = cart.querySelector('.cart-item[data-name="Kalamansi"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Kalamansi is already in the cart!");
  }
});

//Kalabasa
const btnKalabasa = document.getElementById("kalabasa")
btnKalabasa.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Kalabasa"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Kalabasa">
        <h4 class="name">Kalabasa</h4>
        <h4 class="totalPrice">500.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners dynamically
    const newItem = cart.querySelector('.cart-item[data-name="Kalabasa"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Kalabasa is already in the cart!");
  }
});

//Pakwan
const btnPakwan = document.getElementById("pakwan")
btnPakwan.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Pakwan"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Pakwan">
        <h4 class="name">Pakwan</h4>
        <h4 class="totalPrice">450.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners dynamically
    const newItem = cart.querySelector('.cart-item[data-name="Pakwan"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Pakwan is already in the cart!");
  }
});

//Papaya
const btnPapaya = document.getElementById("papaya")
btnPapaya.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Papaya"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Papaya">
        <h4 class="name">Papaya</h4>
        <h4 class="totalPrice">350.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners dynamically
    const newItem = cart.querySelector('.cart-item[data-name="Papaya"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Papaya is already in the cart!");
  }
});

//Repolyo
const btnRepolyo = document.getElementById("repolyo")
btnRepolyo.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Repolyo"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Repolyo">
        <h4 class="name">Repolyo</h4>
        <h4 class="totalPrice">450.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners dynamically
    const newItem = cart.querySelector('.cart-item[data-name="Repolyo"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Repolyo is already in the cart!");
  }
});

//Saging
const btnSaging = document.getElementById("saging")
btnSaging.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Saging"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Saging">
        <h4 class="name">Saging</h4>
        <h4 class="totalPrice">450.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners dynamically
    const newItem = cart.querySelector('.cart-item[data-name="Saging"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Saging is already in the cart!");
  }
});

//Sibuyas
const btnSibuyas = document.getElementById("sibuyas")
btnSibuyas.addEventListener("click", () => {
  const cart = document.getElementById("item");
  const existingItem = cart.querySelector('.cart-item[data-name="Sibuyas"]');

  if (!existingItem) {
    // Add new cart item
    cart.innerHTML += `
      <div class="cart-item" data-name="Sibuyas">
        <h4 class="name">Sibuyas</h4>
        <h4 class="totalPrice">750.00</h4>
        <div class="quantity">
          <span class="minus"><</span>
          <span class="counter">0</span>
          <span class="plus">></span>
        </div>
      </div>
    `;

    // Now attach event listeners dynamically
    const newItem = cart.querySelector('.cart-item[data-name="Sibuyas"]');
    const plus = newItem.querySelector('.plus');
    const counter = newItem.querySelector('.counter');
    const minus = newItem.querySelector('.minus');

    let count = 0;

    plus.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minus.addEventListener('click', () => {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });

  } else {
    alert("Sibuyas is already in the cart!");
  }
});