'use strict'

const quotes = [
   {
      quote: "Be yourself; everyone else is already taken.",
      author: 'Oscar Wilde',
   },
   {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: 'Albert Einstein',
   },
   {
      quote: "A room without books is like a body without a soul.",
      author: 'Marcus Tullius Cicero',
   },
   {
      quote: "You only live once, but if you do it right, once is enough.",
      author: 'Mae West',
   },
   {
      quote: "If you tell the truth, you don't have to remember anything.",
      author: ' Mark Twain',
   },
   {
      quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
      author: 'Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches ',
   },
];


//// Elements
const btnGenerate = document.getElementById('generate-button');
const quoteBox = document.getElementById('quote');
const authorBox = document.querySelector('.author-quote');

const generateQuoute = function () {
   const index = Math.trunc(Math.random() * quotes.length);
   const { quote, author } = quotes[index];

   quoteBox.textContent = quote;
   authorBox.textContent = author;
};

generateQuoute();
btnGenerate.addEventListener('click', generateQuoute);



