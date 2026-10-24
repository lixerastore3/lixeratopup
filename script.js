
/* ==========================================
   LIXERA STORE — MAIN SCRIPT
   ========================================== */

const WHATSAPP_NUMBER = "628818238236";

/*
  Nama file gambar di bawah adalah nama default.
  Samakan dengan nama file gambar yang ada di
  repository GitHub lu.
*/

const categories = [
  {
    id: "ml",
    name: "MOBILE LEGEND",
    image: "mobilelegend.png",
    description: "Diamond, pass & bundle"
  },
  {
    id: "ff",
    name: "FREE FIRE",
    image: "freefire.png",
    description: "Diamond & membership"
  },
  {
    id: "mcgg",
    name: "MAGIC CHES GOGO",
    image: "magicchesgogo.png",
    description: "Diamond & weekly card"
  },
  {
    id: "pubg",
    name: "PUBG MOBILE",
    image: "pubgmobile.png",
    description: "UC PUBG Mobile"
  },
  {
    id: "fc",
    name: "EA ESPORT FC MOBILE",
    image: "fc mobile.png",
    description: "FC Point & Silver"
  },
  {
    id: "hok",
    name: "HONOR OF KINGS",
    image: "honorofkings.png",
    description: "Token Honor of Kings"
  },
  {
    id: "aov",
    name: "ARENA OF VALOR",
    image: "arenaofvalor.png",
    description: "Voucher Arena of Valor"
  },
  {
    id: "fd",
    name: "FOOTBALL DREAM : Be A Pro",
    image: "footballdream.png",
    description: "Supreme & Garuda"
  }
];

const products = {
  ml: [
    {
      group: "DIAMOND",
      items: [
        ["5 DM", 1600],
        ["10 DM", 3545],
        ["12 DM", 3845],
        ["19 DM", 6500],
        ["28 DM", 10000],
        ["44 DM", 13800],
        ["54 DM", 16700],
        ["59 DM", 17800],
        ["71 DM", 22000],
        ["74 DM", 23400],
        ["85 DM", 26400],
        ["88 DM", 27400],
        ["110 DM", 33000],
        ["113 DM", 35000],
        ["128 DM", 43112],
        ["148 DM", 49000],
        ["222 DM", 75000],
        ["240 DM", 79000],
        ["277 DM", 86000],
        ["284 DM", 87430],
        ["296 DM", 90000],
        ["301 DM", 104000],
        ["346 DM", 109435],
        ["356 DM", 113000],
        ["370 DM", 114800],
        ["384 DM", 118000],
        ["408 DM", 125100],
        ["424 DM", 131230],
        ["452 DM", 147900],
        ["518 DM", 171200],
        ["568 DM", 182345],
        ["601 DM", 194320],
        ["642 DM", 207132],
        ["716 DM", 231000],
        ["758 DM", 249100],
        ["790 DM", 258000],
        ["845 DM", 274000],
        ["875 DM", 281200],
        ["938 DM", 301000],
        ["1045 DM", 313000],
        ["1136 DM", 364238],
        ["1159 DM", 373100],
        ["1443 DM", 462233],
        ["1506 DM", 482344],
        ["1704 DM", 546022],
        ["2010 DM", 562376],
        ["2232 DM", 692222],
        ["2625 DM", 815000],
        ["3453 DM", 1081456]
      ]
    },
    {
      group: "WEEKLY DIAMONDS PASS",
      items: [
        ["1X WEEKLY DIAMONDS PASS", 31500],
        ["2X WEEKLY DIAMONDS PASS", 63000],
        ["3X WEEKLY DIAMONDS PASS", 94500]
      ]
    },
    {
      group: "TWILIGHT PASS",
      items: [
        ["TWILIGHT PASS", 170000]
      ]
    },
    {
      group: "SPESIAL BUNDLE",
      items: [
        ["Weekly elite bundle 1x seminggu", 17200],
        ["Monthly efic bundle 1x sebulan", 84756]
      ]
    }
  ],

  ff: [
    {
      group: "DIAMOND",
      items: [
        ["5 DM", 950],
        ["10 DM", 1962],
        ["20 DM", 3800],
        ["50 DM", 7300],
        ["70 DM", 9500],
        ["80 DM", 12000],
        ["100 DM", 14356],
        ["120 DM", 18700],
        ["130 DM", 19100],
        ["145 DM", 21300],
        ["150 DM", 22100],
        ["190 DM", 28760],
        ["200 DM", 30118],
        ["210 DM", 31000],
        ["280 DM", 40900],
        ["355 DM", 47320],
        ["420 DM", 58876],
        ["425 DM", 59132],
        ["475 DM", 67344],
        ["495 DM", 69786],
        ["500 DM", 70000],
        ["510 DM", 72400],
        ["545 DM", 77100],
        ["565 DM", 79333],
        ["600 DM", 86111],
        ["635 DM", 89100],
        ["720 DM", 97000],
        ["800 DM", 109345],
        ["860 DM", 118222],
        ["930 DM", 128999],
        ["1000 DM", 139000],
        ["1050 DM", 142500],
        ["1075 DM", 152000],
        ["1080 DM", 149000],
        ["1440 DM", 200000],
        ["1450 DM", 230000],
        ["2160 DM", 301000],
        ["2180 DM", 305000],
        ["7290 DM", 982000],
        ["36500 DM", 5005000],
        ["73100 DM", 10010000]
      ]
    },
    {
      group: "MEMBERSHIP & PASS",
      items: [
        ["MEMBER MINGGUAN", 28000],
        ["MEMBER BULANAN", 93000],
        ["BP CARD", 47000],
        ["level up pas 6", 6000],
        ["Level up pas 10", 9800],
        ["Level up pas 15", 9800],
        ["Level up pas 20", 9800],
        ["Level up pas 30", 15000]
      ]
    }
  ],

  mcgg: [
    {
      group: "DIAMOND",
      items: [
        ["5 DM", 1800],
        ["12 DM", 4500],
        ["19 DM", 6799],
        ["28 DM", 9764],
        ["44 DM", 15000],
        ["59 DM", 20122],
        ["86 DM", 29311],
        ["170 DM", 58200],
        ["240 DM", 81500],
        ["296 DM", 96600],
        ["408 DM", 137333],
        ["568 DM", 188888],
        ["875 DM", 290000],
        ["2010 DM", 638200],
        ["4830 DM", 1500000]
      ]
    },
    {
      group: "WEEKLY CARD",
      items: [
        ["WEEKLY CARD", 32000]
      ]
    },
    {
      group: "LATEST BOUNTY",
      items: [
        ["Lukas LATEST BOUNTY", 18888],
        ["Battle for discount", 18888]
      ]
    }
  ],

  pubg: [
    {
      group: "UC PUBG MOBILE",
      items: [
        ["60 UC", 17000],
        ["120 UC", 34000],
        ["300 UC + BONUS 25 UC", 85000],
        ["600 UC + BONUS 60 UC", 170500],
        ["1500 UC + BONUS 300 UC", 425000],
        ["3000 UC + BONUS 850 UC", 850000],
        ["6000 UC + BONUS 2100 UC", 1700000],
        ["12000 UC + BONUS 4200 UC", 3400000],
        ["18000 UC + BONUS 6300 UC", 5096000],
        ["24000 UC + BONUS 8400 UC", 6795000],
        ["36000 UC + BONUS 12600 UC", 10192000],
        ["48000 UC + BONUS 16800 UC", 13600000]
      ]
    }
  ],

  fc: [
    {
      group: "FC POINT",
      items: [
        ["40 FC", 6800],
        ["100 FC", 16000],
        ["520 FC", 78000],
        ["1070 FC", 157000],
        ["2200 FC", 323500],
        ["5750 FC", 784444],
        ["12000 FC", 1570000]
      ]
    },
    {
      group: "SILVER",
      items: [
        ["39 SILVER", 6900],
        ["99 SILVER", 16300],
        ["499 SILVER", 78000],
        ["999 SILVER", 156999],
        ["1999 SILVER", 323500],
        ["4999 SILVER", 785987],
        ["9999 SILVER", 1600000]
      ]
    }
  ],

  hok: [
    {
      group: "TOKEN",
      items: [
        ["80 TOKEN", 16200],
        ["240 TOKEN", 47200],
        ["400 TOKEN", 80200],
        ["560 TOKEN", 107000],
        ["800 TOKEN + BONUS 30", 160500],
        ["2400 TOKEN + BONUS 108", 480500],
        ["4000 TOKEN + BONUS 180", 802000],
        ["8000 TOKEN + BONUS 360", 1600000]
      ]
    }
  ],

  aov: [
    {
      group: "VOUCER",
      items: [
        ["40 VOUCER", 10200],
        ["90 VOUCER", 20200],
        ["230 VOUCER", 50200],
        ["470 VOUCER", 100200],
        ["950 VOUCER", 200500],
        ["1430 VOUCER", 300500],
        ["2390 VOUCER", 500500]
      ]
    }
  ],

  fd: [
    {
      group: "SUPREME TOKEN",
      items: [
        ["60 SUPREME", 14600],
        ["180 SUPREME", 42800],
        ["300 SUPREME", 71000],
        ["680 SUPREME", 142300],
        ["940 SUPREME", 212500],
        ["1280 SUPREME", 284200],
        ["1980 SUPREME", 425555],
        ["3120 SUPREME", 707800],
        ["6480 SUPREME", 1420000]
      ]
    },
    {
      group: "INDONESIAN GARUDA",
      items: [
        ["INDONESIAN GARUDA", 24200]
      ]
    }
  ]
};

let selectedCategory = null;
let selectedProduct = null;
let currentSlide = 0;
let orderData = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function rupiah(value) {
  return "Rp" + Number(value).toLocaleString("id-ID");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function showView(viewId) {
  ["homeView", "catalogView", "paymentView"].forEach((id) => {
    const element = document.getElementById(id);
    if (element) element.classList.toggle("hidden", id !== viewId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCategories() {
  const grid = $("#categoryGrid");
  if (!grid) return;

  grid.innerHTML = categories.map((category) => {
    const count = (products[category.id] || [])
      .reduce((total, group) => total + group.items.length, 0);

    return `
      <button class="category-card" type="button"
        data-category="${escapeHTML(category.id)}">
        <div class="category-image">
          <img src="${escapeHTML(category.image)}"
            alt="${escapeHTML(category.name)}"
            loading="lazy"
            onerror="this.style.display='none'">
        </div>
        <div class="category-info">
          <h3>${escapeHTML(category.name)}</h3>
          <p>${escapeHTML(category.description)}</p>
          <div class="category-open">
            <span>${count} produk</span>
            <span>LIHAT →</span>
          </div>
        </div>
      </button>
    `;
  }).join("");

  grid.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      openCatalog(button.dataset.category);
    });
  });
}

function openCatalog(categoryId) {
  selectedCategory = categories.find((item) => item.id === categoryId);
  if (!selectedCategory) return;

  selectedProduct = null;

  const title = $("#catalogTitle");
  const logo = $("#catalogLogo");

  if (title) title.textContent = selectedCategory.name;
  if (logo) {
    logo.src = selectedCategory.image;
    logo.alt = selectedCategory.name;
    logo.onerror = () => {
      logo.style.visibility = "hidden";
    };
    logo.style.visibility = "visible";
  }

  renderProducts();
  resetOrderForm();
  showView("catalogView");
}

function renderProducts() {
  const container = $("#catalogGroups");
  if (!container || !selectedCategory) return;

  const groups = products[selectedCategory.id] || [];

  container.innerHTML = groups.map((group, groupIndex) => `
    <section class="product-group">
      <div class="product-group-title">
        <h2>${escapeHTML(group.group)}</h2>
        <p>Pilih nominal yang ingin lu beli.</p>
      </div>
      <div class="product-grid">
        ${group.items.map((item, itemIndex) => {
          const selected = selectedProduct &&
            selectedProduct.categoryId === selectedCategory.id &&
            selectedProduct.groupIndex === groupIndex &&
            selectedProduct.itemIndex === itemIndex;

          return `
            <button type="button"
              class="product-card ${selected ? "selected" : ""}"
              data-group="${groupIndex}"
              data-item="${itemIndex}">
              <strong>${escapeHTML(item[0])}</strong>
              <span class="product-price">${rupiah(item[1])}</span>
              ${selected ? '<span class="selected-label">✓ DIPILIH</span>' : ""}
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `).join("");

  container.querySelectorAll("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      chooseProduct(
        Number(button.dataset.group),
        Number(button.dataset.item)
      );
    });
  });
}

function chooseProduct(groupIndex, itemIndex) {
  const group = products[selectedCategory.id][groupIndex];
  const item = group.items[itemIndex];

  selectedProduct = {
    categoryId: selectedCategory.id,
    game: selectedCategory.name,
    group: group.group,
    name: item[0],
    price: item[1],
    groupIndex,
    itemIndex
  };

  renderProducts();
  updateSelectionSummary();

  const orderPanel = $("#orderPanel");
  if (orderPanel) {
    orderPanel.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function resetOrderForm() {
  ["playerId", "serverId", "buyerName"].forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.value = "";
  });

  const confirm = $("#confirmCheck");
  if (confirm) confirm.checked = false;

  const serverWrap = $("#serverWrap");
  if (serverWrap) {
    serverWrap.classList.toggle(
      "hidden",
      !["ml", "hok", "aov"].includes(selectedCategory?.id)
    );
  }

  updateSelectionSummary();
}

function updateSelectionSummary() {
  const summary = $("#selectionSummary");
  const button = $("#orderBtn");

  if (summary) {
    summary.innerHTML = selectedProduct
      ? `<strong>${escapeHTML(selectedProduct.game)}</strong><br>
         ${escapeHTML(selectedProduct.name)}<br>
         <strong>${rupiah(selectedProduct.price)}</strong>`
      : "Pilih nominal produk terlebih dahulu.";
  }

  if (button) {
    button.disabled = !selectedProduct;
  }
}

function validateOrder() {
  if (!selectedProduct) {
    alert("Pilih produk terlebih dahulu.");
    return false;
  }

  const playerId = $("#playerId")?.value.trim() || "";
  const serverId = $("#serverId")?.value.trim() || "";
  const buyerName = $("#buyerName")?.value.trim() || "";
  const confirmed = $("#confirmCheck")?.checked || false;

  if (!playerId) {
    alert("Masukkan ID game lu terlebih dahulu.");
    $("#playerId")?.focus();
    return false;
  }

  if (
    ["ml", "hok", "aov"].includes(selectedCategory.id) &&
    !serverId
  ) {
    alert("Masukkan server game lu terlebih dahulu.");
    $("#serverId")?.focus();
    return false;
  }

  if (!confirmed) {
    alert("Centang konfirmasi data sebelum melanjutkan.");
    return false;
  }

  orderData = {
    game: selectedProduct.game,
    product: selectedProduct.name,
    price: selectedProduct.price,
    id: playerId,
    server: serverId,
    name: buyerName
  };

  renderPayment();
  showView("paymentView");
  return true;
}

function renderPayment() {
  if (!orderData) return;

  const price = $("#paymentPrice");
  const summary = $("#paymentSummary");
  const qris = $("#qrisImage");
  const fallback = $("#qrisFallback");

  if (price) price.textContent = rupiah(orderData.price);

  if (summary) {
    summary.innerHTML = `
      <p>🎮 <strong>Game:</strong> ${escapeHTML(orderData.game)}</p>
      <p>💎 <strong>Produk:</strong> ${escapeHTML(orderData.product)}</p>
      <p>🆔 <strong>ID:</strong> ${escapeHTML(orderData.id)}</p>
      ${orderData.server
        ? `<p>🌐 <strong>Server:</strong> ${escapeHTML(orderData.server)}</p>`
        : ""}
      <p>👤 <strong>Nama pembeli:</strong> ${escapeHTML(orderData.name || "-")}</p>
      <p>💰 <strong>Total:</strong> ${rupiah(orderData.price)}</p>
    `;
  }

  if (qris && fallback) {
    qris.style.display = "block";
    fallback.classList.add("hidden");

    qris.onerror = () => {
      qris.style.display = "none";
      fallback.classList.remove("hidden");
      fallback.textContent =
        "Gambar QRIS belum ditemukan. Periksa nama file QRIS di repository.";
    };
  }

  const paidCheck = $("#paidCheck");
  const waButton = $("#waBtn");

  if (paidCheck) paidCheck.checked = false;
  if (waButton) waButton.disabled = true;
}

function updatePaymentButton() {
  const paidCheck = $("#paidCheck");
  const waButton = $("#waBtn");

  if (waButton) {
    waButton.disabled = !(paidCheck && paidCheck.checked);
  }
}

function sendWhatsAppConfirmation() {
  if (!orderData) {
    alert("Data pesanan tidak ditemukan. Silakan ulangi pemesanan.");
    return;
  }

  if (!$("#paidCheck")?.checked) {
    alert("Centang konfirmasi pembayaran terlebih dahulu.");
    return;
  }

  const lines = [
    "min, saya sudah order di LIXERA STORE. mohon bantu konfirmasi pesanan saya ya min 🙏",
    "",
    "📋 DETAIL PESANAN",
    "",
    "🎮 Game: " + orderData.game,
    "💎 Produk: " + orderData.product,
    "🆔 ID: " + orderData.id
  ];

  if (orderData.server) {
    lines.push("🌐 Server: " + orderData.server);
  }

  lines.push(
    "💰 Harga: " + rupiah(orderData.price),
    "👤 Nama pembeli: " + (orderData.name || "-"),
    "",
    "💳 Metode pembayaran: QRIS",
    "✅ Status: Saya menyatakan sudah melakukan pembayaran.",
    "",
    "Mohon dicek pembayaran dan data pesanan saya ya min. Terima kasih 🙏"
  );

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(lines.join("\n"));

  window.open(url, "_blank", "noopener,noreferrer");
}

/* SLIDER */

function initSlider() {
  const track = $("#sliderTrack");
  if (!track) return;

  const slides = [...track.querySelectorAll("img")];
  const dots = $$(".slider-dot");

  if (!slides.length) return;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  $("#prevSlide")?.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  $("#nextSlide")?.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  showSlide(0);
}

/* NAVIGATION & STARTUP */

function initNavigation() {
  $("#homeBtn")?.addEventListener("click", () => showView("homeView"));
  $("#backHome")?.addEventListener("click", () => showView("homeView"));

  $("#backCatalog")?.addEventListener("click", () => {
    if (selectedCategory) {
      showView("catalogView");
    } else {
      showView("homeView");
    }
  });

  $("#orderBtn")?.addEventListener("click", validateOrder);
  $("#paidCheck")?.addEventListener("change", updatePaymentButton);
  $("#waBtn")?.addEventListener("click", sendWhatsAppConfirmation);

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

function initStore() {
  renderCategories();
  initSlider();
  initNavigation();
  updateSelectionSummary();
}

document.addEventListener("DOMContentLoaded", initStore);
         
