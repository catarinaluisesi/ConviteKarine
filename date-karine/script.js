// Declaração das variáveis.
const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const title = document.querySelector('.title1 h1');
const heart = document.querySelector('.content2 img');
// Regule no Array abaixo as posições que o Button "Não" deve fugir do Mouse!!!
const positions = ['-360', '388', '-299', '336', '-255', '220', '233', '266', '-315', '300']; 
// Evento de Transição de tela.
buttonYes.addEventListener('click',()=>{
    content1.style.display = 'none';
    content2.style.display = 'block';
    title.textContent = 'Você fez a melhor escolha!';
    title.style.fontSize = '3rem';
    heartBeat(); // Chama a função heartBeat quando o botão "Sim" é clicado
    showDate(); // Chama a função showDate quando o botão "Sim" é clicado
});
// Função de animação do coração.
function heartBeat(){
    if(heart.style.width == '320px' && heart.style.height == '300px'){
        heart.style.width = '270px';
        heart.style.height = '250px';
        heart.style.transition = 'ease .5s';
    }else{
        heart.style.width = '320px';
        heart.style.height = '300px';
        heart.style.transition = 'ease .5s';
    }
}
// Função para fazer o botão fugir do Mouse no eixo Y (|).
function runButtonY(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateY(${positions[randomArray]}px)`;
    this.style.transition = 'ease .1s';
}
// Função para fazer o botão fugir do Mouse no eixo X (_).
function runButtonX(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateX(${positions[randomArray]}px)`;
}
// Função para exibir a data do encontro quando clicar em "Sim".
function showDate() {
    const dateElement = document.createElement('div'); // Alterado de <p> para <div>
    dateElement.classList.add('date'); // Adiciona a classe 'date'
    const dateParagraph = document.createElement('p');
    dateParagraph.textContent = 'Encontro: 10/05/2024';
    dateElement.appendChild(dateParagraph);
    document.querySelector('.content2').appendChild(dateElement); // Adiciona à div .content2
}
// Declaração/Ativação das funções.
buttonNo.addEventListener('mouseover', runButtonY);
buttonNo.addEventListener('mouseout', runButtonX);
setInterval(heartBeat, 300);
