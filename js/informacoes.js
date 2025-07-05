const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("carousel.json")
    .then(res => res.json())
    .then(data => {
        const carousel = data.carousel;

        document.getElementById("img1").src = carousel.img1;
        document.getElementById("img2").src = carousel.img2;
        document.getElementById("img3").src = carousel.img3;
        document.getElementById("img4").src = carousel.img4;
        document.getElementById("img5").src = carousel.img5;
        document.getElementById("img6").src = carousel.img6;
        document.getElementById("img7").src = carousel.img7;
        document.getElementById("img8").src = carousel.img8;
    })
    .catch(error => console.error("Erro ao carregar o carousel:", error));

fetch("produtos.json")
    .then(res => res.json())
    .then(produtos => {
        const produto = produtos[id];
        if (!produto) {
            document.getElementById("nome").textContent = "Produto não encontrado.";
            return;
        }
        document.getElementById("nome").textContent = produto.nome;
        document.getElementById("imagem").src = produto.imagem;
        document.getElementById("imagemII").src = produto.imagemII;
        document.getElementById("tamanho").textContent = produto.tamanho;
        document.getElementById("preco").textContent = produto.preco;
        document.getElementById("cor").textContent = produto.cor;
        document.getElementById("disponivel").textContent = produto.disponivel;

        atualizarImagensResponsivas(produto);
    })
    .catch(err => {
        document.getElementById("nome").textContent = "Erro ao carregar o produto.";
        console.error(err);
    });

function atualizarImagensResponsivas(produto) {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");

    function trocarImagens(e) {
        if (e.matches) {
            console.log("Trocando para versão MOBILE");
            document.getElementById("imagem").src = produto.imagemMobile || produto.imagem;
            document.getElementById("imagemII").src = produto.imagemIIMobile || produto.imagemII;
        } else {
            console.log("Trocando para versão DESKTOP");
            document.getElementById("imagem").src = produto.imagem;
            document.getElementById("imagemII").src = produto.imagemII;
        }
    }

    trocarImagens(mediaQuery); // Aplica agora
    mediaQuery.addEventListener("change", trocarImagens); // Muda ao redimensionar
}