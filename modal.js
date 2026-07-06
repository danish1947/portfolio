// ===========================================
// DETAIL MODAL (Brands & Featured Projects)
// Danish Muhammad Zein Portfolio
// ===========================================
//
// CARA MENAMBAH FOTO ASLI:
// Di setiap "images", ganti string placeholder (contoh: "Logo Design")
// dengan object { img: "assets/img/projects/nama-file.jpg" }.
// Selama masih berupa string, modal akan menampilkan kotak placeholder
// bergradasi (bukan foto rusak) — supaya tampilan tetap rapi sebelum
// foto asli tersedia.
//
// Contoh setelah ada foto asli:
// images: [
//     { img: "assets/img/projects/wifi-cover.jpg" },
//     { img: "assets/img/projects/wifi-spread.jpg" },
//     "Cover Depan Buku"   <- boleh dicampur, sisanya tetap placeholder
// ]

const detailsData = {

    // ============ BRANDS ============

    neovate: {
        tag: "Streetwear Clothing Brand",
        title: "Neovate Apparel",
        slogan: '"Built to Evolve"',
        description:
            "Neovate Apparel adalah brand streetwear yang saya dirikan dengan gagasan bahwa identitas selalu berkembang — begitu juga cara orang berpakaian. Setiap koleksi dirancang untuk merepresentasikan pertumbuhan, bukan sekadar tren musiman.\n\nSebagai Founder, saya terlibat penuh mulai dari brand identity, desain produk, strategi marketing, hingga photography untuk setiap campaign yang dirilis.",
        tags: ["Founder", "Brand Identity", "Product Design", "Marketing", "Photography"],
        images: ["Logo & Brand Identity", "Lookbook Shoot", "Packaging Design"],
        instagram: { handle: "@neovate.apparel", url: "https://www.instagram.com/neovate.apparel/" }
    },

    morphate: {
        tag: "Creative Design Studio",
        title: "Morphate Design",
        slogan: "Shaping Ideas Into Identity",
        description:
            "Morphate Design adalah studio kreatif yang saya bangun untuk membantu bisnis dan personal brand membentuk identitas visual yang kuat. Studio ini fokus pada brand identity, graphic design, UI/UX, poster, hingga konten social media.\n\nSetiap project di Morphate Design dikerjakan dengan pendekatan yang bersih, modern, dan tetap mempertahankan karakter unik dari masing-masing klien.",
        tags: ["Brand Identity", "Graphic Design", "UI/UX", "Poster", "Social Media"],
        images: ["Studio Branding", "Client Project Mockup", "Social Media Kit"],
        instagram: { handle: "@morhpate", url: "https://www.instagram.com/morhpate/" }
    },

    // ============ PROJECTS ============

    "project-wifi": {
        tag: "Book Design",
        title: "Company Profile — WiFi Provider",
        slogan: "",
        description:
            "Company profile book design untuk sebuah perusahaan penyedia layanan WiFi internet yang berbasis di Bogor. Buku ini dirancang untuk menjelaskan layanan, keunggulan, serta identitas perusahaan kepada calon klien dan partner bisnis.\n\nProses kerja mencakup penyusunan layout, tipografi, serta visual pendukung agar informasi tersampaikan secara profesional dan mudah dibaca.",
        tags: ["Book Design", "Layout", "Print Design", "Brand Communication"],
        images: ["Cover Design", "Isi Layout Halaman", "Hasil Cetak"]
    },

    "project-coffee": {
        tag: "Branding / Poster",
        title: "Coffee Event",
        slogan: "",
        description:
            "Visual identity dan materi promosi untuk sebuah acara komunitas kopi. Project ini mencakup desain poster, materi promosi digital, hingga elemen visual pendukung acara agar terlihat konsisten dari awal promosi hingga hari pelaksanaan.",
        tags: ["Poster Design", "Event Branding", "Social Media"],
        images: ["Poster Utama", "Materi Promosi Digital", "Dokumentasi Acara"]
    },

    "project-web": {
        tag: "Portfolio Website",
        title: "Portfolio Website",
        slogan: "",
        description:
            "Website portfolio pribadi ini sendiri — dirancang dan dikembangkan untuk merepresentasikan personal branding sebagai Graphic Designer, UI/UX Designer, dan Founder. Fokus desainnya adalah tampilan dark theme yang clean, modern, dan tetap terasa personal.",
        tags: ["UI/UX", "Web Design", "Front-End Development"],
        images: ["Halaman Hero", "Halaman Projects", "Tampilan Mobile"]
    },

    "project-uiux": {
        tag: "UI/UX Design",
        title: "UI/UX Case Study",
        slogan: "",
        description:
            "Eksplorasi desain interface dan user experience untuk sebuah produk digital. Project ini mencakup proses riset singkat, wireframing, hingga high-fidelity UI yang berfokus pada kemudahan penggunaan dan tampilan yang bersih.",
        tags: ["UI Design", "UX Design", "Wireframe", "Prototyping"],
        images: ["Wireframe", "High-Fidelity UI", "Prototype Flow"]
    },

    "project-poster": {
        tag: "Poster Design",
        title: "Poster Design",
        slogan: "",
        description:
            "Serangkaian desain poster grafis untuk berbagai keperluan kampanye, event, dan promosi brand. Setiap poster dirancang dengan komposisi visual yang kuat agar pesan tersampaikan secara cepat dan menarik perhatian.",
        tags: ["Graphic Design", "Poster", "Campaign"],
        images: ["Poster Campaign 1", "Poster Campaign 2", "Poster Campaign 3"]
    },

    "project-branding": {
        tag: "Brand Identity",
        title: "Branding Project",
        slogan: "",
        description:
            "Desain identitas brand secara menyeluruh — mulai dari logo, sistem warna, tipografi, hingga panduan penggunaan (brand guidelines) agar identitas visual klien konsisten di setiap media.",
        tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
        images: ["Logo Design", "Color & Typography System", "Brand Guidelines"]
    }

};

// ===========================================
// ELEMENTS
// ===========================================

const detailOverlay = document.getElementById("detail-overlay");
const detailModal = document.querySelector(".detail-modal");
const detailClose = document.getElementById("detail-close");
const detailGallery = document.getElementById("detail-gallery");
const detailTag = document.getElementById("detail-tag");
const detailTitle = document.getElementById("detail-title");
const detailSlogan = document.getElementById("detail-slogan");
const detailDesc = document.getElementById("detail-desc");
const detailTagList = document.getElementById("detail-taglist");
const detailInstagram = document.getElementById("detail-instagram");

let lastFocusedElement = null;

// ===========================================
// RENDER GALLERY
// ===========================================

function renderGallery(images) {

    detailGallery.innerHTML = "";

    images.forEach((item, index) => {

        const tile = document.createElement("div");
        const toneClass = "tone-" + ((index % 3) + 1);

        if (typeof item === "object" && item.img) {

            tile.className = "gallery-tile";

            const img = document.createElement("img");
            img.src = item.img;
            img.alt = item.alt || "";

            tile.appendChild(img);

        } else {

            tile.className = "gallery-tile " + toneClass;

            const label = document.createElement("span");
            label.textContent = item;

            tile.appendChild(label);

        }

        detailGallery.appendChild(tile);

    });

}

// ===========================================
// OPEN MODAL
// ===========================================

function openDetail(key) {

    const data = detailsData[key];

    if (!data) return;

    detailTag.textContent = data.tag || "";
    detailTitle.textContent = data.title || "";
    detailSlogan.textContent = data.slogan || "";
    detailDesc.textContent = data.description || "";

    detailTagList.innerHTML = "";

    (data.tags || []).forEach(tag => {
        const li = document.createElement("li");
        li.textContent = tag;
        detailTagList.appendChild(li);
    });

    renderGallery(data.images || []);

    if (data.instagram) {
        detailInstagram.href = data.instagram.url;
        detailInstagram.textContent = "Instagram: " + data.instagram.handle;
        detailInstagram.classList.remove("hidden");
    } else {
        detailInstagram.classList.add("hidden");
    }

    lastFocusedElement = document.activeElement;

    detailOverlay.classList.add("active");
    document.body.classList.add("modal-open");

    detailClose.focus();

}

// ===========================================
// CLOSE MODAL
// ===========================================

function closeDetail() {

    detailOverlay.classList.remove("active");
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

}

// ===========================================
// EVENT BINDINGS
// ===========================================

document.querySelectorAll("[data-detail]").forEach(card => {

    card.addEventListener("click", () => {
        openDetail(card.getAttribute("data-detail"));
    });

    // Keyboard accessibility (Enter / Space)
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openDetail(card.getAttribute("data-detail"));
        }
    });

});

// Links inside a card (e.g. brand Instagram) shouldn't trigger the modal
document.querySelectorAll(".brand-instagram").forEach(link => {
    link.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});

detailClose.addEventListener("click", closeDetail);

// Click outside modal to close
detailOverlay.addEventListener("click", (e) => {
    if (e.target === detailOverlay) {
        closeDetail();
    }
});

// ESC key to close
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detailOverlay.classList.contains("active")) {
        closeDetail();
    }
});
