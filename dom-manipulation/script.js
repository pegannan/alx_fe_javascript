quote = ["text","category"];

function showRandomQuote (
    let random = document.getElementById("quoteDisplay").innerHTML;
    random = Math.random
);

function createAddQuoteForm (
    const add = document.createElement("button");
para.innerHTML = "This is a paragraph.";
document.getElementById("myDIV").appendChild(para)
);

const newQuote = createAddQuoteForm

newQuote.addEventListener(click, showRandomQuote)


function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
  }

// Storing data
localStorage.setItem('quotes');

// Retrieving data
const username = localStorage.getItem('quotes');

function exportToJsonFile (
    application/json", "JSON.stringify", "Blob
);

function importFromJsonFile (
    object = URL.createObjectURL 
);

<select id="categoryFilter" onchange="filterQuotes()">
    <option value="all">All Categories</option>
    <!-- Dynamically populated categories -->
  </select>

  function populateCategories (
    quote = 'map', 'textContent'
  );

  function filterQuotes(

  );
