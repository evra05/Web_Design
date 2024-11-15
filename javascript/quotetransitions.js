document.addEventListener('DOMContentLoaded', function() {
  const quotes = document.querySelectorAll('.quote-slider .quote');
  let currentQuoteIndex = 0;

  function showNextQuote() {
    quotes[currentQuoteIndex].classList.remove('active');
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    quotes[currentQuoteIndex].classList.add('active');
  }

  // Initialize the first quote as active
  quotes[currentQuoteIndex].classList.add('active');

  // Change quote every 5 seconds
  setInterval(showNextQuote, 5000);
});