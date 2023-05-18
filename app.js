var quotes = [`The way to get started is to quit talking and begin doing`,

    `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma  which is living with the results of other people's thinking.`,

    `If life were predictable it would cease to be life, and be without flavor`,


    `Whoever is happy will make others happy too..`,


    `Tell me and I forget. Teach me and I remember. Involve me and I learn. `,



    `In the end, it's not the years in your life that count. It's the life in your year`

];

const names = ['Walt Disney', `Steve Jobs`, `Eleanor Roosevelt`, `Anne Frank`, `Benjamin Franklin`, `Abraham Lincoln`]
let btn = document.querySelector('.button');
let textarea = document.querySelector('.text')

let writter = document.querySelector('.writter');

btn.addEventListener('click', function () {
    let random = randomnumber();
    textarea.textContent = quotes[random];
    writter.textContent = names[random];

})

function randomnumber() {
    return Math.floor(Math.random() * quotes.length);
}

console.log(randomnumber());