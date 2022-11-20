# Sistema de botão para visitar página do github

## Usando API

    <script src="./BotaoVisitaGithub.js">
        modelo = '1';
        link = '#/link_aqui/';
    </script>

## Versão 2

Exemplo: 

![Exemplo](https://raw.githubusercontent.com/LucasATS/LucasATS/main/src/img/Exemplo%20btn%20visita%20github.jpeg)

> subistitua '< LINK DA PAGINA AQUI >' por algum link ou pelo repostirório do projeto.

    <!-- VISITE MINHA PÁGINA NO GITHUB :D -->
    <style> 
        .carimbo-github-pos { position: fixed; right: 20px; bottom: 20px; z-index: 10;  
                              flex-direction: row; align-items: center; display: flex;}
        .carimbo-github-h3  { background-color: #80D8FF; color: #455A64; border: 2px solid #455A64; visibility: hidden;
                              cursor: pointer; border-radius: 12px; padding: 5px; margin-right: 5px; font: 16px Arial, sans-serif;}
        .carimbo-github-pos:hover .carimbo-github-h3 { visibility: visible; }
    </style>
    <span title="Visite minha página no github" 
          class="carimbo-github-pos">
        <h3 class="carimbo-github-h3"
            href="<LINK DA PAGINA AQUI>">
            ⭐ <b>Give a star</b></h3>
        <a href="<LINK DA PAGINA AQUI>"
            class="carimbo-github">
            <img style="width: 60px;" src="https://raw.githubusercontent.com/LucasATS/LucasATS/main/src/svg/github.svg">
        </a>
    </span>

## Versão 1

    <!-- VISITE MINHA PÁGINA NO GITHUB :D -->
    <style> 
        @media only screen and (orientation: portrait) { .github-img { width: 60px !important; } }
        .carimbo-github-img { width: 60px; border-radius: 360px; }
        .carimbo-github-link{ position: fixed; right: 20px; bottom: 20px; z-index: 10; }
    </style>
    <a title="Visite minha página no github" 
        href="<LINK DA PAGINA AQUI>"
        class="carimbo-github-link">
        <img class="carimbo-github-img" src="https://raw.githubusercontent.com/LucasATS/LucasATS/main/src/svg/github.svg">
    </a>
