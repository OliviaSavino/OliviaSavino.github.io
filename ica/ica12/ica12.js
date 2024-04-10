const newQuoteButton = document.querySelector("#js-new-quote");
newQuoteButton.addEventListener("click", async (event) => {
  if (event && event.type === "click") {
    console.log("Button clicked");
    await getQuote();
  }
});
async function getQuote() {
  const apiUrl = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();
    console.log(data.question);
    displayQuote(data.question);
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}

function displayQuote(quote) {
  const quoteTextElement = document.getElementById("js-quote-text");
  quoteTextElement.textContent = quote;
}

document.addEventListener("DOMContentLoaded", getQuote);
