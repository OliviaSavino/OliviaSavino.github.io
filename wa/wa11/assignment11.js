const newQuoteButton = document.querySelector("#js-new-quote");
newQuoteButton.addEventListener("click", async (event) => {
  if (event && event.type === "click") {
    console.log("Button clicked");
    await getQuote();
  }
});

const tweetButton = document.querySelector("#js-tweet");
tweetButton.addEventListener("click", tweetQuote);

async function getQuote() {
  const apiUrl = "https://api.quotable.io/random";

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();

    if (!data.content || !data.author) {
      throw new Error("Failed to fetch quote");
    }

    console.log(`${data.content} — ${data.author}`);
    displayQuote(`${data.content} — ${data.author}`);
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}

async function tweetQuote() {
  const quoteTextElement = document.getElementById("js-quote-text");
  const quote = quoteTextElement.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}`;
  window.open(twitterUrl, "_blank");
}

function displayQuote(quote) {
  const quoteTextElement = document.getElementById("js-quote-text");
  quoteTextElement.textContent = quote;
}

document.addEventListener("DOMContentLoaded", getQuote);
