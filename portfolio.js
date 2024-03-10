/*::links ativos no menu::*/
let list = document.querySelectorAll('.nav li')

function menuActive() {
    list.forEach((i) => 
    i.classList.remove("active"))
    this.classList.add("active")
}
list.forEach((i) =>
i.addEventListener('click',menuActive))

function marcaMenu() {
    var sections = document.querySelectorAll('section')
    var scrollPosition = window.scrollY || document.documentElement.scrollTop
    
    sections.forEach(function (section) {
        var link = document.querySelector('a[href="#' + section.id + '"]')
        //verifica se a parte vertical do topo e inferior estão visiveis na tela 
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            // Remove a classe "active" de todos os itens do menu
            list.forEach(function (menuItem) {
                menuItem.classList.remove('active')
            });

            // Adiciona a classe "active" ao item do menu correspondente à seção visível
            link.parentNode.classList.add('active')
        }
    });
}

// Adiciona um ouvinte de evento de rolagem para chamar a função marcaMenu
window.addEventListener('scroll', marcaMenu);

// Adiciona um ouvinte de evento de carregamento da página para chamar a função marcaMenu inicialmente
window.addEventListener('load', marcaMenu);


/*::menu hamburguer::*/
let menuToggle = document.querySelector('.mobile-menu')
let header = document.querySelector('header')
menuToggle.onclick = function() {
    header.classList.toggle('active')
}

function fechaMenu() {
    header.classList.toggle('active')
}

/*::functions experiencia::*/
let divExp = document.getElementById("textInfos");

function mostraSabesp() {
    divExp.innerHTML = "Sabesp foi a primeira empresa que trabalhei, atuei como estagiário referente ao curso técnico profissionalizante em processamento de dados, concluido no ano de 2005. Com maior foco em atividades específicas da empresa como cadastro de clientes, montagem de itinerário de funcionarios externos e etc.";   
}

function mostraVidax() {
    divExp.innerHTML = "Empresa Meta, que posteriormente se fundiu com a empresa Contractors e mudou seu nome para Vidax contact center, onde tive a primeira experiência como analista de suporte técnico nível 2, resolução de problemas referente a hardware e software desde usuários de call center a gerência";   
}

function mostraLbc() {
    divExp.innerHTML = "A LBC Sistemas é uma empresa especializada em software para Automação de Postos de Combustíveis e Lojas de Conveniência, trabalhei atuando em implantações, aplicando treinamentos e posteriormente prestando suporte ao sistema (Remoto e local)";   
}

function mostraInter() {
    divExp.innerHTML = "Trabalhei na Interadapt Solutions prestando suporte nível 1 na empresa Mapfre Seguros, através de suporte telefonico, encaminhamento de chamados e resolução de pequenos reparos (configuração de e-mail e impressoras)";   
}

function mostraAhead() {
    divExp.innerHTML = "A Ahead Contact Center é a empresa que oferece infra estrutura a call center, foi a empresa que trabalhei por mais tempo (12 anos) atuando como analista de suporte nível 2";   
}

function limpa() {
    divExp.innerHTML = "";
}

/*::functions projetos::*/
let divhProj = document.getElementById("htextProj")
let divpProj = document.getElementById("pTextProj")
let btnTmb = document.querySelector(".btnTmb")
let btnLogin = document.querySelector(".btnLogin")
let btnBit = document.querySelector(".btnBit")
let btnMoto = document.querySelector(".btnMoto")
let btnMuscl = document.querySelector(".btnMuscle")

divhProj.innerHTML = "Guia Rápido de Musculação"
    divpProj.innerHTML = "Desenvolvi esse projeto com a intenção de demonstrar e explicar detalhadamente cada um dos principais exercícios de musculação separados por grupos musculares. Clicando nas imagens de demonstração dos exercícios é possível adiciona-lo a uma ficha de treino onde o usuário insere a quantidade de séries de cada um deles e ao final da montagem é possível imprimir essa lista com os exercícios. Esse foi o projeto que mais aprimorei, adicionando guia de suplementação e métodos de treino e inclusive o primeiro que publiquei e hospedei na Hostinger com o domínio 'http://guiamvc.com.br'"
    btnTmb.style.display = "none"
    btnLogin.style.display = "none"
    btnBit.style.display = "none"
    btnMoto.style.display = "none"
    btnMuscl.style.display = "block"

function mostraTmb() {
    divhProj.innerHTML = "Calculadora de TMB"
    divpProj.innerHTML = "Projeto feito em HTML, CSS e JavaScript, calcula a taxa de metabolismo basal de acordo com dados informados pelo usuário como sexo, altura, idade e peso, e de acordo com a frequência de atividade diária ele mostra o resultado da TMB e do gasto calórico diário da pessoa"
    btnTmb.style.display = "block"
    btnLogin.style.display = "none"
    btnBit.style.display = "none"
    btnMoto.style.display = "none"
    btnMuscl.style.display = "none"
}

function mostraConv() {
    divhProj.innerHTML = "Conversor Binário"
    divpProj.innerHTML = "Projeto simples feito em HTML, CSS e JavaScript, ele executa a conversão de um número binário em decimal ou um decimal em binário"
    btnTmb.style.display = "none"
    btnLogin.style.display = "none"
    btnBit.style.display = "block"
    btnMoto.style.display = "none"
    btnMuscl.style.display = "none"
}

function mostraLogin() {
    divhProj.innerHTML = "Tela de login responsiva"
    divpProj.innerHTML = "Esse projeto foi feito ao longo do curso de HTML5 e CSS3 do Curso em Vídeo, uma tela de login estilizada e responsiva"
    btnTmb.style.display = "none"
    btnLogin.style.display = "block"
    btnBit.style.display = "none"
    btnMoto.style.display = "none"
    btnMuscl.style.display = "none"
}

function mostraMoto() {
    divhProj.innerHTML = "Cálculo de corridas"
    divpProj.innerHTML = "Programa que faz o cálculo da média de valores ganhos e gastos em corridas diárias de motoboys de aplicativos, de acordo com quilometragem percorrida, valor do combustível e faturamento total ele mostra o valor gasto em combustível, lucro e o valor ganho por quilômetro rodado"
    btnTmb.style.display = "none"
    btnLogin.style.display = "none"
    btnBit.style.display = "none"
    btnMoto.style.display = "block"
    btnMuscl.style.display = "none"
}

function mostraMuscle() {
    divhProj.innerHTML = "Guia Rápido de Musculação"
    divpProj.innerHTML = "Desenvolvi esse projeto com a intenção de demonstrar e explicar detalhadamente cada um dos principais exercícios de musculação separados por grupos musculares. Clicando nas imagens de demonstração dos exercícios é possível adiciona-lo a uma ficha de treino onde o usuário insere a quantidade de séries de cada um deles e ao final da montagem é possível imprimir essa lista com os exercícios. Esse foi o projeto que mais aprimorei, adicionando guia de suplementação e métodos de treino e inclusive o primeiro que publiquei e hospedei na Hostinger com o domínio 'http://guiamvc.com.br' "
    btnTmb.style.display = "none"
    btnLogin.style.display = "none"
    btnBit.style.display = "none"
    btnMoto.style.display = "none"
    btnMuscl.style.display = "block"
}

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('init-hidden-off');
            }
        });
    }, {
        threshold: 1
    });

    const elements = Array.from(document.querySelectorAll('.init-hidden, .init-hidden-right'));
    elements.forEach(element => {
        observer.observe(element);

        if (element.getBoundingClientRect().top <= window.innerHeight) {
            element.classList.add('init-hidden-off');
        }
    });
});


