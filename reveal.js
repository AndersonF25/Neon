window.revelar = ScrollReveal({ reset: true });

/* function para aplicar o efeito apenas em tablets e pc */

/* s-hero animations */

function revealConfig() {
  const width = window.innerWidth;

  if (width) {
    revelar.reveal(".from-left", {
      duration: 2000,
      distance: "100px",
      origin: "left",
    });

    revelar.reveal(".from-left-delay", {
      duration: 2000,
      distance: "100px",
      origin: "left",
      delay: 400
    });

    revelar.reveal(".from-bottom", {
      duration: 2000,
      distance: "100px",
      origin: "bottom",
    });

    revelar.reveal(".from-bottom-delay", {
      duration: 2000,
      distance: "100px",
      origin: "bottom",
      delay: 400,
    });
    revelar.reveal(".from-top", {
      duration: 2000,
      distance: "100px",
      origin: "top",
    });
    revelar.reveal(".from-top-delay", {
      duration: 2000,
      distance: "100px",
      origin: "top",
      delay: 500,
    });
    revelar.reveal(".from-right-delay", {
      duration: 2000,
      distance: "100px",
      origin: "right",
      delay: 400,
    });
    revelar.reveal(".from-rigth", {
      duration: 2000,
      distance: "100px",
      origin: "right",
    });
  }
}
function checkScreenWidth(mq) {
  if (mq.matches) {
    // Chama a função apenas se a largura da tela estiver dentro da faixa desejada
    revealConfig();
  }
}

var mediaQuery = window.matchMedia(
  "(min-width: 1290px) and (max-width: 2100px)"
);
checkScreenWidth(mediaQuery);
mediaQuery.addEventListener("resize", checkScreenWidth);
