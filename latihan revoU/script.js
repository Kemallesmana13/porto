const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["October", "Novermber", "Desember"],
    datasets: [
      {
        label: "My First Dataset",
        data: [1.5, 2, 3],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        ticks: {
          padding: 10, // Menambah jarak antara label dan sumbu X
        },
      },
    },
    layout: {
      padding: {
        bottom: 20, // Menambah ruang di bawah grafik
      },
    },
  },
});

const toggleModeButton = document.querySelector(".toggle-mode");
toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/6763a22249e2fd8dfefa2159/1ifej2lrc";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Menampilkan tombol ketika pengguna menggulir halaman
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Menangani klik pada tombol scroll
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animasi saat elemen memasuki viewport
const projectElements = document.querySelectorAll(".project");
const testimonialElements = document.querySelectorAll(".testimonial");

function checkVisibility() {
  projectElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });

  testimonialElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
checkVisibility(); // Memeriksa visibility pada halaman pertama kali dimuat


