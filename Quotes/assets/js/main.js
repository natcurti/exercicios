const quotes = [
    {
        quote: 'O que vale na vida não é o ponto de partida e sim a caminhada. Caminhando e semeando, no fim, terás o que colher.',
        author: 'Cora Coralina'
    },
    {
        quote: 'O saber a gente aprende com os mestres e os livros. A sabedoria se aprende é com a vida e com os humildes.',
        author: 'Cora Coralina'
    },
    {
        quote: 'Vivo nas estrelas porque é lá que brilha a minha alma.',
        author: 'Manuel Bandeira'
    },
    {
        quote: 'Aprendi com as primaveras a deixar-me cortar e a voltar sempre inteira',
        author: 'Cecília Meireles'
    },
    {
        quote: 'Renda-se, como eu me rendi. Mergulhe no que você não conhece como eu mergulhei. Não se preocupe em entender, viver ultrapassa qualquer entendimento.',
        author: 'Clarice Lispector'
    },
    {
        quote: 'Ser feliz sem motivo é a mais autêntica forma de felicidade',
        author: 'Carlos Drummond de Andrade'
    },
    {
        quote: 'Amai, porque nada melhor para a saúde que um amor correspondido.',
        author: 'Vinicius de Moraes '
    },
    {
        quote: `No fim tu hás de ver que as coisas mais leves são as únicas
        que o vento não conseguiu levar:
        um estribilho antigo
        um carinho no momento preciso
        o folhear de um livro de poemas
        o cheiro que tinha um dia o próprio vento`,
        author: 'Mario Quintana'
    },
    {
        quote: 'Às vezes ouço passar o vento; e só de ouvir o vento passar, vale a pena ter nascido.',
        author: 'Fernando Pessoa'
    },
    {
        quote: 'Faça o que for necessário para ser feliz. Mas não se esqueça que a felicidade é um sentimento simples, você pode encontrá-la e deixá-la ir embora por não perceber sua simplicidade.',
        author: 'Martha Medeiros'
    }
]

const text = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.newQuote');


function newQuoteGenerator(){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[randomNumber].quote;
    author.textContent = quotes[randomNumber].author;
}

newQuoteGenerator();

button.addEventListener('click', newQuoteGenerator);