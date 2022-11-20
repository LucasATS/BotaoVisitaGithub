# Sistema de botão para visitar página do github

## __📂 PLAY__

> Versão atual: 3.

### Usando API

> Só copiar e colar o código no HTML 😎.

    <BotaoVisitaGithub model="modelo3" link="#/LINK_AQUI"></BotaoVisitaGithub>
    <script src="https://cdn.jsdelivr.net/gh/LucasATS/BotaoVisitaGithub@a8a199bbd7adaee6d7e7810dcd00ab9b533334c0/BotaoVisitaGithub.js"></script>

### Modo manual

> Suporta até a versão 2!

#### Versão 2

![Exemplo](https://raw.githubusercontent.com/LucasATS/BotaoVisitaGithub/main/img/Exemplo%20btn%20visita%20github.jpeg)

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

#### Versão 1

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

---

<!--
## __❤ AGRADECIMENTOS__
[@<NOME>](<LINK>) "<MENSAGEM>"
-->

## __🛠 TECNOLOGIAS__ 

[![jsdelivr](https://data.jsdelivr.com/v1/package/gh/LucasATS/BotaoVisitaGithub/badge)](https://www.jsdelivr.com/package/gh/LucasATS/BotaoVisitaGithub)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## __😘 CONTATO__ <ALTERE APENAS OS LINKS DOS HREF>
<p align="left">
  <a href="https://github.com/LucasATS/"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Github"></a>
  <a href="https://www.instagram.com/lukaolmd/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="instagram"></a>
  <a href="https://www.linkedin.com/in/lucas-almeida-tiburtino-da-silva/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="linkedin"></a>
  <a href="mailto:lucas.almida.da.silva@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail"></a> 
  <a href="https://discord.com/channels/@Lucas%20ATS#9901"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord"></a>  
</p>