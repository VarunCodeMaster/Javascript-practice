//variables

let btn = document.querySelector("#btn-change");
let quote = document.querySelector(".text-area");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Be the change that you wish to see in the world."`,
    person: `"— Mahatma Gandhi"`,
  },
  {
    quote: `"In the middle of difficulty lies opportunity."`,
    person: `"— Albert Einstein"`,
  },
  {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: `— Nelson Mandela`,
  },
  {
    quote: `"Life is what happens when you're busy making other plans."`,
    person: `— John Lennon`,
  },
  {
    quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
    person: `— Ralph Waldo Emerson`,
  },
  {
    quote: `"I think, therefore I am."`,
    person: `— René Descartes`,
  },
  {
    quote: `"In the middle of difficulty lies opportunity."`,
    person: `— Albert Einstein`,
  },
  {
    quote: `"The only thing we have to fear is fear itself."`,
    person: `— Franklin D. Roosevelt`,
  },
  {
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: `— Winston Churchill`,
  },
  {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: `— Confucius`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
