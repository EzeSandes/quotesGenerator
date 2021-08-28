const SECONDS = 10;

//// Elements
// const btnGenerate = document.getElementById('generate-button');
const quoteBox = document.getElementById('quote');
const authorBox = document.querySelector('.author-quote');
const progressBar = document.querySelector('.progress-bar');


// const quotes = [
//    {
//       quote: "Be yourself; everyone else is already taken.",
//       author: 'Oscar Wilde',
//    },
//    {
//       quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: 'Albert Einstein',
//    },
//    {
//       quote: "A room without books is like a body without a soul.",
//       author: 'Marcus Tullius Cicero',
//    },
//    {
//       quote: "You only live once, but if you do it right, once is enough.",
//       author: 'Mae West',
//    },
//    {
//       quote: "If you tell the truth, you don't have to remember anything.",
//       author: ' Mark Twain',
//    },
//    {
//       quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
//       author: 'Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches ',
//    },
//    {
//       quote: "Those who cannot remember the past are condemned to repeat it.",
//       author: 'George Santayana',
//    },
//    {
//       quote: "If the brain were so simple we could understand it, we would be so simple we couldn't.",
//       author: 'Lyall Watson',
//    },
//    {
//       quote: "Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.",
//       author: 'Albert Einstein',
//    },
//    {
//       quote: "My kingdom for a horse!.",
//       author: 'Shakespeare (Richard III)',
//    },
//    {
//       quote: "I am become Death, the destroyer of worlds.",
//       author: 'J. Robert Oppenheimer(One of the fathers of the Atomic Bomb)',
//    },
//    {
//       quote: "Every particle of matter is attracted by or gravitates to every other particle of matter with a force inversely proportional to the squares of their distances.",
//       author: 'Isaac Newton',
//    },
//    {
//       quote: "There is only one good, knowledge, and one evil, ignorance.",
//       author: 'Socrates',
//    },
//    {
//       quote: "The Law is a fortress on a hill that armies cannot take or floods wash away.",
//       author: 'The Prophet Muhammed',
//    },
//    {
//       quote: "The voice of the people is the voice of God.",
//       author: 'Attributed to William of Malmesbury',
//    },
//    {
//       quote: "Whoever desires to found a state and give it laws, must start with assuming that all men are bad and ever ready to display their vicious nature, whenever they may find occasion for it.",
//       author: 'Niccolo Machiavelli',
//    },
// ];

const getQuote = async function(){
   
   try{
      const res = await fetch('https://api.quotable.io/random');
      if(!res.ok)
         throw new Error('Error getting quotes.');
      
      return await res.json();

   }catch(err){
      quoteBox.textContent = err.message;
      authorBox.textContent = 'XXXXX';
   }
}

// Set animation duration for the Progress Bar.
progressBar.style.animationDuration = `${SECONDS}s`;

const generateQuoute = async function () {

   const {content : quote, author} = await getQuote();

   quoteBox.textContent = quote;
   authorBox.textContent = author;
};



generateQuoute();
setInterval(generateQuoute, SECONDS * 1000);




