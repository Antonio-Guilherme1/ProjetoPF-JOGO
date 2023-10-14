document.addEventListener("DOMContentLoaded", () => {

    const cards = [
        {
            name:'bob',
            img:'images/bob.png',   
        },
        {
            name:'gary',
            img:'images/gary.png',   
        },
        {
            name:'lulamolusco',
            img:'images/lulamolusco.png',   
        },
        {
            name:'patrickestrela',
            img:'images/patrickestrela.png',   
        },
        {
            name:'sandy',
            img:'images/sandy.png',   
        },
        {
            name:'siriguejo',
            img:'images/siriguejo.png',   
        },
        {
            name:'bob',
            img:'images/bob.png',   
        },
        {
            name:'gary',
            img:'images/gary.png',   
        },
        {
            name:'lulamolusco',
            img:'images/lulamolusco.png',   
        },
        {
            name:'patrickestrela',
            img:'images/patrickestrela.png',   
        },
        {
            name:'sandy',
            img:'images/sandy.png',   
        },
        {
            name:'siriguejo',
            img:'images/siriguejo.png',   
        }
    ]

    //embaralhar todas as cartas
    cards.sort(() => 0.5 - Math.random());
    //carregar elementos html no script
    const board = document.querySelector('.board');
    const resultView = document.querySelector('#result');
    let cardsChosen = []; //cartas escolhidas
    let cardsChosenId = []; //id das cartas escolhidas
    let cardsWon = [] //cartas combinadas

//checagem de combinações
    function checkForMatch(){
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        //verificar clique na mesma imagem
        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'images/logoufs.png');
            cards[optionTwoId].setAttribute('src', 'images/logoufs.png');
            alert('Você clicou na mesma imagem');
        }
        //verificar combinação se click em imagens diferentes
        else if(cardsChosen[0] === cardsChosen[1]){
            cards[optionOneId].setAttribute('src', 'images/cerebro.png');
            cards[optionTwoId].setAttribute('src', 'images/cerebro.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
            alert('Você encontrou uma combinação')
        }else{
            cards[optionOneId].setAttribute('src', 'images/logoufs.png');
            cards[optionTwoId].setAttribute('src', 'images/logoufs.png');
            alert('Você errou, Tente novamente');
        }
        cardsChosen = [];
        cardsChosenId = [];
        //mostrar placar
        resultView.textContent = 'Pares encontrados: '+cardsWon.length
        if(cardsWon.length === cards.length/2){
            resultView.textContent = 'Parabéns, você ganhou!';
        }


}   

    //criar o quadro de cartas
    function createBoard(){
        for(let i = 0; i < cards.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'images/logoufs.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
      }
   }
  function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout (checkForMatch(), 500);
        }
    }
    createBoard();

});