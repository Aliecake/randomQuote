//Lauren Eggers TT Project 1, unit 1

const quoteBox = document.getElementById('loadQuote');
const specialSpan = document.getElementById('special');

const quotes =[
  {
    quote: `There’s nothing simpler than avoiding people you don’t like. Avoiding one’s friends, that’s the real test.`,
    source: `Ep. 5.1`,
    citation: `<a href="https://www.imdb.com/title/tt3325518/characters/nm0001749">IMDB</a>`,
    year: 2014
  },
  {
    quote: `First electricity, now telephones. Sometimes I feel as if I were living in an H.G. Wells novel.`,
    source: `Ep. 1.7`,
    citation: `<a href="https://www.imdb.com/title/tt1617366/characters/nm0001749">IMDB</a>`,
    year: 2010
  },
  {
    quote: `Would someone please tell me what's going on, or have we all stepped through the looking glass?`,
    source: `Ep. 2.8`,
    citation: `<a href="https://www.imdb.com/title/tt1852313/characters/nm0001749">IMDB</a>`
  },
  {
    quote: `Life is a game, where the player must appear ridiculous.`,
    source: `Christmas at Downton Abbey`,
    citation: `<a href="https://www.imdb.com/title/tt2013429/characters/nm0001749">IMDB</a>`,
    year: 2011,
    special: true
  },
  {
    quote: `I knew this family was approaching disillusion, I wasn’t aware that illusion was already upon us.`,
    source: `Unknown Episode`
  },
];

console.log(quotes);



function getRandomQuote() {
  const max = Math.floor(quotes.length - 1);

  //get a random number from quotes array, inclusive of first and last items.
  const randomNum = Math.floor(Math.random() * (max + 1));

  return quotes[randomNum];
}

function math255() {
  return Math.floor(Math.random() * (255 + 1));
}


function printQuote() {

  let randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
    `;
    if (randomQuote.citation && randomQuote.year) {
      html += `
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>
        </p>`;
    } else if(!randomQuote.citation){
      html += `
      <span class="year"></span>
      </p>`;
    } else {
      html += `
        <span class="citation"></span>
      </p>`;
    }

    if (randomQuote.special){
      specialSpan.innerHTML = `<img src="./images/christmas-tree.png" alt="XMAS tree">`;
    } else {
      specialSpan.innerHTML = ''
    }
    document.getElementById('quote-box').innerHTML = html;
    //generates random background colors for body and button
    document.body.style.backgroundColor = `rgb(${math255()}, ${math255()}, ${math255()})`;
    quoteBox.style.backgroundColor = `rgb(${math255()}, ${math255()}, ${math255()})`;
}

//generates random on first page load
printQuote();
//resets quote every 10sec
setInterval(() => printQuote(), 10000);

quoteBox.addEventListener("click", printQuote, false);

