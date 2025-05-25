const mainSection = document.querySelector("section.landing");
const mainContent = document.getElementById("main-content");

// Template halaman index
const indexHTML = `
  <div class="content-left" id="left-area">
    <h1>GET STARTED</h1>
    <img
      src="/Project_Alin/Asset/ilustrasi.png"
      alt="Ilustrasi"
      class="illustration"
    />
  </div>
  <div class="content-right">
    <p class="desc">Masukkan wajah yang ingin dikenali</p>
    <div class="camera-icon"></div>
    <p class="note">
      Jika belum menambahkan dataset,<br />
      arahkan kursor ke gambar
    </p>
  </div>
`;

// Template halaman dataset (dibalik posisinya)
const datasetHTML = `
  <div class="content-left">
    <p class="desc">Masukkan dataset anda </p>
    <div class="folder-icon"></div>
    <p class="note">
      Jika sudah menambahkan dataset, arahkan kursor ke gambar.
    </p>
  </div>
  <div class="content-right">
    <h1>INSERT DATASET</h1>
    <img
      src="/Project_Alin/Asset/ilustrasi.png"
      alt="Ilustrasi"
      class="illustration"
    />
  </div>
`;

// Fungsi untuk bind event ke ilustrasi di halaman index
function bindIndexHover() {
  const leftArea = document.getElementById("left-area");
  if (leftArea) {
    leftArea.addEventListener("mouseenter", showDataset);
  }
}

// Fungsi untuk bind event mouseenter di halaman dataset (area kanan)
function bindDatasetHover() {
  const rightArea = document.querySelector(".content-right");
  if (rightArea) {
    rightArea.addEventListener("mouseenter", showIndex, { once: true });
  }
}

// Tampilkan halaman dataset
function showDataset() {
  mainContent.innerHTML = datasetHTML;
  mainSection.id = "dataset";
  bindDatasetHover();
}

// Tampilkan halaman index
function showIndex() {
  mainContent.innerHTML = indexHTML;
  mainSection.id = "home";
  bindIndexHover();
  bindCameraClick();
}

// Tambahkan di bawah fungsi bindIndexHover()
function bindCameraClick() {
  const cameraIcon = document.querySelector(".camera-icon");
  if (cameraIcon) {
    cameraIcon.addEventListener("click", () => {
      window.location.href = "input_face.html";
    });
  }
}

// Pertama kali, bind event hover ke ilustrasi
bindIndexHover();
bindCameraClick();
