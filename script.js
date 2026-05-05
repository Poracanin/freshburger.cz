const menuData = [
  {
    category: "Burgery",
    items: [
      { id: "fresh-burger", name: "Fresh burger", price: 190, description: "Hovězí maso 150 g, salát, cheddar, cibule, okurka, kečup, hořčice.", featured: true },
      { id: "gourmet", name: "Gourmet", price: 190, description: "Hovězí maso 150 g, cheddar, slanina, salát, rajče, okurka, kečup, česneková majonéza.", featured: true },
      { id: "aioli", name: "Aioli", price: 190, description: "Hovězí maso 150 g, cheddar, slanina, salát, česneková majonéza." },
      { id: "bacon-bbq", name: "Bacon BBQ", price: 190, description: "Hovězí maso 150 g, salát, cheddar, slanina, karamelizovaná cibulka, tatarka, BBQ omáčka." },
      { id: "texas", name: "Texas", price: 195, description: "Hovězí maso 150 g, salát, cheddar, cibulové kroužky, papričky, BBQ salsa." },
      { id: "garden", name: "Garden", price: 195, description: "Hovězí maso 150 g, salát, cheddar, žampiony, rajče, rajčatový dresing." },
      { id: "farmer", name: "Farmer", price: 195, description: "Hovězí maso 150 g, salát, cheddar, vejce, slanina, farmer dresing." },
      { id: "italy", name: "Italy", price: 195, description: "Hovězí maso 150 g, cheddar, salát, grilované prosciutto, mozzarella, italy dresing." },
      { id: "chicken", name: "Chicken", price: 185, description: "Obalované nebo grilované kuřecí maso, salát, rajče, tatarka." },
      { id: "chicken-bbq", name: "Chicken BBQ", price: 190, description: "Obalované nebo grilované kuřecí maso, salát, karamelizovaná cibulka, tatarka, BBQ omáčka." },
      { id: "chicken-farmer", name: "Chicken Farmer", price: 190, description: "Grilované kuřecí maso, salát, vejce, slanina, farmer dresing." }
    ]
  },
  {
    category: "Speciality",
    items: [
      { id: "blue-cheese", name: "Blue cheese", price: 200, description: "Hovězí maso 150 g, cheddar, modrý sýr, karamelizovaná cibulka, slanina, majonéza, BBQ.", featured: true },
      { id: "smash-cheese", name: "Smash cheese", price: 220, description: "Hovězí maso 150 g, cheddar, rajče, obalovaný sýr, slanina, domácí tatarka.", featured: true }
    ]
  },
  {
    category: "Menu",
    items: [
      { id: "menu-fresh", name: "Fresh menu", price: 240, description: "Fresh burger + hranolky + pití." },
      { id: "menu-gourmet", name: "Gourmet menu", price: 240, description: "Gourmet + hranolky + pití." },
      { id: "menu-aioli", name: "Aioli menu", price: 240, description: "Aioli + hranolky + pití." },
      { id: "menu-bacon-bbq", name: "Bacon BBQ menu", price: 240, description: "Bacon BBQ + hranolky + pití." },
      { id: "menu-texas", name: "Texas menu", price: 245, description: "Texas + hranolky + pití." },
      { id: "menu-garden", name: "Garden menu", price: 245, description: "Garden + hranolky + pití." },
      { id: "menu-farmer", name: "Farmer menu", price: 245, description: "Farmer + hranolky + pití." },
      { id: "menu-italy", name: "Italy menu", price: 245, description: "Italy + hranolky + pití." },
      { id: "menu-chicken", name: "Chicken menu", price: 245, description: "Chicken + hranolky + pití." },
      { id: "menu-chicken-bbq", name: "Chicken BBQ menu", price: 240, description: "Chicken BBQ + hranolky + pití." },
      { id: "menu-chicken-farmer", name: "Chicken Farmer menu", price: 240, description: "Chicken Farmer + hranolky + pití." },
      { id: "menu-blue-cheese", name: "Blue cheese menu", price: 250, description: "Blue cheese + hranolky + pití.", featured: true },
      { id: "menu-smash-cheese", name: "Smash cheese menu", price: 270, description: "Smash cheese + hranolky + pití.", featured: true },
      { id: "menu-fresh-slider", name: "Fresh slider menu", price: 175, description: "Fresh slider + hranolky + pití." },
      { id: "menu-bacon-slider", name: "Bacon slider menu", price: 175, description: "Bacon slider + hranolky + pití." },
      { id: "menu-pepper-slider", name: "Pepper slider menu", price: 170, description: "Pepper slider + hranolky + pití." },
      { id: "menu-chicken-slider", name: "Chicken slider menu", price: 170, description: "Chicken slider + hranolky + pití." },
      { id: "menu-chicken-bbq-slider", name: "Chicken BBQ slider menu", price: 175, description: "Chicken BBQ slider + hranolky + pití." },
      { id: "menu-cheese-slider", name: "Cheese slider menu", price: 170, description: "Cheese slider + hranolky + pití." },
      { id: "menu-chicken-wrap", name: "Chicken wrap menu", price: 205, description: "Chicken wrap + hranolky + pití." },
      { id: "menu-caesar-wrap", name: "Caesar wrap menu", price: 205, description: "Caesar wrap + hranolky + pití." },
      { id: "menu-beef-wrap", name: "Beef wrap menu", price: 205, description: "Beef wrap + hranolky + pití." },
      { id: "menu-hotdog-klasik", name: "Hot dog Klasik menu", price: 180, description: "Hot dog Klasik + hranolky + pití." },
      { id: "menu-hotdog-bbq", name: "Hot dog BBQ menu", price: 180, description: "Hot dog BBQ + hranolky + pití." },
      { id: "menu-hotdog-texas", name: "Hot dog Texas menu", price: 180, description: "Hot dog Texas + hranolky + pití." }
    ]
  },
  {
    category: "Slidery",
    items: [
      { id: "fresh-slider", name: "Fresh slider", price: 125, description: "Hovězí maso 75 g, salát, cheddar, cibule, okurka, kečup, hořčice." },
      { id: "bacon-slider", name: "Bacon slider", price: 125, description: "Hovězí maso 75 g, salát, cheddar, slanina, karamelizovaná cibulka, tatarka, BBQ omáčka." },
      { id: "pepper", name: "Pepper", price: 120, description: "Hovězí maso 75 g, salát, cheddar, papričky, salsa." },
      { id: "chicken-slider", name: "Chicken slider", price: 120, description: "Obalované nebo grilované kuřecí maso, salát, rajče, tatarka." },
      { id: "chicken-bbq-slider", name: "Chicken BBQ slider", price: 125, description: "Kuřecí maso, cheddar, salát, karamelizovaná cibulka, slanina, tatarka, BBQ." },
      { id: "cheese-slider", name: "Cheese", price: 120, description: "Obalovaný hermelín, rajče, tatarka, salát." }
    ]
  },
  {
    category: "Wrapy",
    items: [
      { id: "chicken-wrap", name: "Chicken wrap", price: 155, description: "Kuřecí maso, salát, cheddar, slanina, rajče, tatarka." },
      { id: "caesar-wrap", name: "Caesar wrap", price: 155, description: "Kuřecí maso, slanina, parmazán, římský salát, caesar dresing." },
      { id: "beef-wrap", name: "Beef wrap", price: 155, description: "Hovězí maso, salát, cheddar, cibule, okurka, kečup, hořčice." }
    ]
  },
  {
    category: "Hot dogy",
    items: [
      { id: "hotdog-klasik", name: "Hot dog Klasik", price: 130, description: "Grilovaný párek, cibule, okurka, kečup, hořčice." },
      { id: "hotdog-bbq", name: "Hot dog BBQ", price: 130, description: "Grilovaný párek, slanina, karamelizovaná cibulka, BBQ omáčka." },
      { id: "hotdog-texas", name: "Hot dog Texas", price: 130, description: "Grilovaný párek, cibulové kroužky, papričky, salsa." }
    ]
  },
  {
    category: "Saláty",
    items: [
      { id: "michany-salat", name: "Míchaný salát", price: 65, description: "Směs zeleniny, zálivka." },
      { id: "caesar-salat", name: "Salát Caesar", price: 150, description: "Římský salát, kuřecí maso, slanina, parmazán, caesar dresing, rozpečená bagetka." }
    ]
  },
  {
    category: "Přílohy",
    items: [
      { id: "hranolky-solene", name: "Hranolky solené", price: 35, description: "Klasické solené hranolky." },
      { id: "hranolky-cesnekove", name: "Hranolky česnekové", price: 35, description: "Hranolky s česnekovou úpravou." },
      { id: "cheddar-jarni", name: "Cheddar, slanina, cibulka", price: 80, description: "Hranolky s cheddarem, slaninou a jarní cibulkou.", featured: true },
      { id: "cheddar-jalapenos", name: "Cheddar a jalapeños", price: 75, description: "Hranolky s cheddarem a jalapeños." },
      { id: "cheddar", name: "Hranolky s cheddarem", price: 65, description: "Hranolky s cheddarem." },
      { id: "cheddar-slanina", name: "Cheddar a slanina", price: 70, description: "Hranolky s cheddarem a slaninou." },
      { id: "stripsy-3", name: "Stripsy 3 ks", price: 60, description: "Kuřecí stripsy 3 kusy." },
      { id: "stripsy-6", name: "Stripsy 6 ks", price: 100, description: "Kuřecí stripsy 6 kusů." },
      { id: "cibulove-krouzky-3", name: "Cibulové kroužky 3 ks", price: 45, description: "Smažené cibulové kroužky." },
      { id: "cibulove-krouzky-6", name: "Cibulové kroužky 6 ks", price: 60, description: "Smažené cibulové kroužky." },
      { id: "hermelinky-3", name: "Hermelínky 3 ks", price: 45, description: "Obalované hermelínky." },
      { id: "hermelinky-6", name: "Hermelínky 6 ks", price: 65, description: "Obalované hermelínky." },
      { id: "zampiony-3", name: "Žampiony 3 ks", price: 45, description: "Obalované žampiony." },
      { id: "zampiony-6", name: "Žampiony 6 ks", price: 65, description: "Obalované žampiony." }
    ]
  },
  {
    category: "Omáčky",
    items: [
      { id: "salsa", name: "Salsa", price: 25, description: "Omáčka k jídlu." },
      { id: "bbq", name: "BBQ", price: 25, description: "Omáčka k jídlu." },
      { id: "cesnekova", name: "Česneková", price: 25, description: "Omáčka k jídlu." },
      { id: "tatarka", name: "Domácí tatarka", price: 25, description: "Omáčka k jídlu." },
      { id: "majoneza", name: "Majonéza", price: 20, description: "Omáčka k jídlu." },
      { id: "kecup", name: "Kečup", price: 20, description: "Omáčka k jídlu." }
    ]
  },
  {
    category: "Nápoje",
    items: [
      { id: "plzen", name: "Plzeň 0,5 l", price: 49, description: "Nápoj k menu." },
      { id: "gambrinus", name: "Gambrinus 0,5 l", price: 39, description: "Nápoj k menu." },
      { id: "birell", name: "Birell 0,5 l", price: 40, description: "Nápoj k menu." },
      { id: "pepsi", name: "Pepsi 0,33 l", price: 35, description: "Nápoj k menu." },
      { id: "mirinda", name: "Mirinda 0,33 l", price: 35, description: "Nápoj k menu." },
      { id: "sprite", name: "Sprite 0,33 l", price: 35, description: "Nápoj k menu." },
      { id: "ice-tea", name: "Ice Tea 0,33 l", price: 35, description: "Nápoj k menu." },
      { id: "voda", name: "Jemně perlivá voda", price: 25, description: "Nápoj k menu." }
    ]
  }
];

const ALL_CATEGORY = "Vše";
const CART_KEY = "freshBurgerCart";
const MODE_KEY = "freshBurgerMode";

const categoryTabs = document.querySelector("#categoryTabs");
const menuGrid = document.querySelector("#menuGrid");
const cartItems = document.querySelector("#cartItems");
const cartSubtotal = document.querySelector("#cartSubtotal");
const deliveryPrice = document.querySelector("#deliveryPrice");
const cartTotal = document.querySelector("#cartTotal");
const clearCart = document.querySelector("#clearCart");
const checkoutLink = document.querySelector("#checkoutLink");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutNote = document.querySelector("#checkoutNote");
const modeButtons = document.querySelectorAll(".mode-btn");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");
const bottomCartCount = document.querySelector("#bottomCartCount");
const bottomCartTotal = document.querySelector("#bottomCartTotal");
const bottomCartBar = document.querySelector(".bottom-cart-bar");
const deliveryFields = document.querySelector("#deliveryFields");

const formatPrice = (price) => `${price} Kč`;

function allItems() {
  return menuData.flatMap((category) =>
    category.items.map((item) => ({ ...item, category: category.category }))
  );
}

function findItem(id) {
  return allItems().find((item) => item.id === id);
}

function loadCart() {
  const cart = new Map();

  try {
    const stored = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    stored.forEach(({ id, qty }) => {
      const item = findItem(id);
      const count = Number(qty);

      if (item && count > 0) {
        cart.set(id, { item, qty: count });
      }
    });
  } catch {
    localStorage.removeItem(CART_KEY);
  }

  return cart;
}

const state = {
  activeCategory: ALL_CATEGORY,
  cart: loadCart(),
  mode: localStorage.getItem(MODE_KEY) || "Rozvoz"
};

function saveCart() {
  const payload = [...state.cart.values()].map(({ item, qty }) => ({ id: item.id, qty }));
  localStorage.setItem(CART_KEY, JSON.stringify(payload));
}

function saveMode() {
  localStorage.setItem(MODE_KEY, state.mode);
}

function cartRows() {
  return [...state.cart.values()];
}

function itemCount() {
  return cartRows().reduce((sum, row) => sum + row.qty, 0);
}

function deliveryCost(subtotal) {
  if (state.mode === "Osobní odběr" || subtotal === 0) {
    return 0;
  }

  return subtotal >= 200 ? 0 : 29;
}

function totals() {
  const subtotal = cartRows().reduce((sum, row) => sum + row.item.price * row.qty, 0);
  const shipping = deliveryCost(subtotal);

  return {
    subtotal,
    shipping,
    total: subtotal + shipping
  };
}

function formatItemCount(count) {
  if (count === 1) return "1 položka";
  if (count > 1 && count < 5) return `${count} položky`;
  return `${count} položek`;
}

function renderTabs() {
  if (!categoryTabs) return;

  const categories = [ALL_CATEGORY, ...menuData.map((group) => group.category)];
  categoryTabs.innerHTML = categories
    .map(
      (category) => `
      <button class="tab-btn ${category === state.activeCategory ? "active" : ""}" type="button" data-category="${category}">
        ${category}
      </button>
    `
    )
    .join("");
}

function renderMenu() {
  if (!menuGrid) return;

  const items =
    state.activeCategory === ALL_CATEGORY
      ? allItems()
      : menuData
          .find((group) => group.category === state.activeCategory)
          .items.map((item) => ({ ...item, category: state.activeCategory }));

  menuGrid.innerHTML = items
    .map(
      (item) => `
      <article class="menu-card ${item.featured ? "featured" : ""}">
        <div class="menu-card-top">
          <h3>${item.name}</h3>
          <span class="price">${formatPrice(item.price)}</span>
        </div>
        <p>${item.description}</p>
        <div class="menu-card-footer">
          <span class="category-label">${item.category}</span>
          <button class="add-btn" type="button" data-add="${item.id}">Přidat</button>
        </div>
      </article>
    `
    )
    .join("");
}

function renderBottomCart() {
  if (!bottomCartCount || !bottomCartTotal || !bottomCartBar) return;

  const count = itemCount();
  const summary = totals();
  bottomCartCount.textContent = formatItemCount(count);
  bottomCartTotal.textContent = formatPrice(summary.total);
  bottomCartBar.classList.toggle("is-empty", count === 0);
}

function renderCart() {
  const rows = cartRows();
  const summary = totals();

  if (cartItems) {
    if (rows.length === 0) {
      cartItems.innerHTML = `<p class="empty-cart">Košík je prázdný. Vyber jídlo z menu.</p>`;
    } else {
      cartItems.innerHTML = rows
        .map(
          ({ item, qty }) => `
          <div class="cart-row">
            <div>
              <strong>${item.name}</strong>
              <span>${formatPrice(item.price)} / ks</span>
              <div class="qty-controls" aria-label="Množství ${item.name}">
                <button type="button" data-dec="${item.id}" aria-label="Odebrat jeden kus">-</button>
                <span>${qty} ks</span>
                <button type="button" data-inc="${item.id}" aria-label="Přidat jeden kus">+</button>
              </div>
            </div>
            <strong>${formatPrice(item.price * qty)}</strong>
          </div>
        `
        )
        .join("");
    }
  }

  if (cartSubtotal) cartSubtotal.textContent = formatPrice(summary.subtotal);
  if (deliveryPrice) deliveryPrice.textContent = summary.shipping === 0 ? "Zdarma" : formatPrice(summary.shipping);
  if (cartTotal) cartTotal.textContent = formatPrice(summary.total);

  renderBottomCart();
}

function orderSummary() {
  const summary = totals();
  const payment = document.querySelector("input[name='payment']:checked")?.value || "Hotově";

  return {
    items: cartRows(),
    count: itemCount(),
    payment,
    ...summary
  };
}

function setMode(mode) {
  state.mode = mode;
  saveMode();

  modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });

  updateDeliveryFields();
  renderCart();
}

function updateDeliveryFields() {
  if (!deliveryFields) return;

  const isDelivery = state.mode === "Rozvoz";
  deliveryFields.classList.toggle("is-muted", !isDelivery);

  deliveryFields.querySelectorAll("input, textarea").forEach((field) => {
    if (field.name === "street" || field.name === "city") {
      field.required = isDelivery;
    }
  });
}

function addToCart(id) {
  const item = findItem(id);
  if (!item) return;

  const existing = state.cart.get(id);
  state.cart.set(id, { item, qty: existing ? existing.qty + 1 : 1 });
  saveCart();
  renderCart();
}

function decrementItem(id) {
  const existing = state.cart.get(id);
  if (!existing) return;

  if (existing.qty <= 1) {
    state.cart.delete(id);
  } else {
    state.cart.set(id, { item: existing.item, qty: existing.qty - 1 });
  }

  saveCart();
  renderCart();
}

categoryTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.activeCategory = button.dataset.category;
  renderTabs();
  renderMenu();
});

menuGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add]");
  if (!button) return;
  addToCart(button.dataset.add);
});

cartItems?.addEventListener("click", (event) => {
  const inc = event.target.closest("[data-inc]");
  const dec = event.target.closest("[data-dec]");

  if (inc) addToCart(inc.dataset.inc);
  if (dec) decrementItem(dec.dataset.dec);
});

clearCart?.addEventListener("click", () => {
  state.cart.clear();
  saveCart();
  renderCart();

  if (checkoutNote) {
    checkoutNote.textContent = "Košík je prázdný. Vyber jídlo z menu.";
  }
});

function handleCheckout() {
  const summary = orderSummary();
  if (summary.items.length === 0) {
    checkoutNote.textContent = "Nejdřív přidej do košíku alespoň jednu položku.";
    return;
  }

  if (!checkoutForm.checkValidity()) {
    checkoutForm.reportValidity();
    return;
  }

  const formData = new FormData(checkoutForm);
  const name = formData.get("name") || "zákazník";
  checkoutNote.textContent = `Objednávka pro ${name} je připravená: ${formatItemCount(summary.count)}, ${formatPrice(summary.total)}. Platba: ${summary.payment}.`;
}

checkoutLink?.addEventListener("click", handleCheckout);

checkoutForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleCheckout();
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setMode(button.dataset.mode);
  });
});

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("nav-open", isOpen);
});

navLinks?.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  navLinks.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
});

renderTabs();
renderMenu();
setMode(state.mode);
renderCart();
