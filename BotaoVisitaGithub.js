let link = '';
let model;

const modelo3 = (link) => (`<!-- VISITE MINHA PÁGINA NO GITHUB :D -->
<style> 
    .carimbo-github-pos { position: fixed; right: 20px; bottom: 20px; z-index: 10;  
                        flex-direction: row; align-items: center; display: flex; }
    .carimbo-github-pos:hover { bottom: 19px; }
    .carimbo-github-h3  { background-color: #80D8FF; color: #455A64; border: 2px solid #455A64; display: none;
                        animation: Anim 1.5s ease 0s 1 normal forwards; cursor: pointer; border-radius: 12px; 
                        padding: 5px; margin-right: 5px; font: 16px Arial, sans-serif;}
    .carimbo-github-pos:hover .carimbo-github-h3 { display: inline; opacity: 0; transition: opacity 1s ease 0s;}
    @keyframes Anim{0%,100%{transform:translateY(0) rotate(0);transform-origin:50% 50%}
        15%{transform:translateY(-30px) rotate(6deg)}
        30%{transform:translateY(15px) rotate(-6deg)}
        45%{transform:translateY(-15px) rotate(3.6deg)}
        60%{transform:translateY(9px) rotate(-2.4deg)}
        75%{transform:translateY(-6px) rotate(1.2deg)}
        100%{ opacity: 1; transition: opacity 1s ease 0s; }}
</style>
<span title="Visite minha página no github" 
    class="carimbo-github-pos">
    <h3 class="carimbo-github-h3"
        href="${link}">
        ⭐ <b>Give a star</b></h3>
    <a href="${link}"
        class="carimbo-github">
        <img style="width: 60px;" src="https://raw.githubusercontent.com/LucasATS/LucasATS/main/src/svg/github.svg">
    </a>
</span>
`);

const modelo2 = (link) => (`<!-- VISITE MINHA PÁGINA NO GITHUB :D -->
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
        href="${link}">
        ⭐ <b>Give a star</b></h3>
    <a href="${link}"
        class="carimbo-github">
        <img style="width: 60px;" src="https://raw.githubusercontent.com/LucasATS/LucasATS/main/src/svg/github.svg">
    </a>
</span>
`);

const modelo1 = (link) => (`<!-- VISITE MINHA PÁGINA NO GITHUB :D -->
<style> 
    @media only screen and (orientation: portrait) { .github-img { width: 60px !important; } }
    .carimbo-github-img { width: 60px; border-radius: 360px; }
    .carimbo-github-link{ position: fixed; right: 20px; bottom: 20px; z-index: 10; }
</style>
<a title="Visite minha página no github" 
    href="${link}"
    class="carimbo-github-link">
    <img class="carimbo-github-img" src="https://raw.githubusercontent.com/LucasATS/LucasATS/main/src/svg/github.svg">
</a>
`);

window.addEventListener("load",(ev)=>{
    btn = document.getElementsByTagName('BotaoVisitaGithub')[0];
    let model = btn.getAttribute("model");
    let link =  btn.getAttribute("link");
    eval(`document.body.innerHTML += ${model}(link)`);
    btn.remove();
})