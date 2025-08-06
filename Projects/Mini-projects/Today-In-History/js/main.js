const displayDate = document.getElementById("display-date");
const dateInput = document.getElementById("date-input");
const eventImage = document.getElementById("event-image");
const eventYear = document.getElementById("event-year");
const eventText = document.getElementById("event-text");

// formats we'll try to query
function getDateFormats(dateObj) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const yyyy = dateObj.getFullYear();
  const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
  const dd = String(dateObj.getDate()).padStart(2, "0");

  const longMonth = monthNames[dateObj.getMonth()];

  return [
    `${longMonth} ${dd}, ${yyyy}`,
    `${dd} ${longMonth} ${yyyy}`,
    `${yyyy}-${mm}-${dd}`,
  ];
}

//Display readable date
function getDisplayDate(dateObj) {
  return dateObj.toLocaleDateString(`en-US`, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// show loading spinner
function showLoading() {
  eventYear.textContent = "Loading...";
  eventText.textContent = "";
  eventImage.src = "";
}

// Fetch article using Wikipedia API
async function fetchWikiArticle(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts|pageimages|info&exintro=1&explaintext=1&inprop=url&titles=${encodeURIComponent(
    title
  )}&piprop=thumbnail&pithumbsize=500`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const pages = data.query.pages;
    const page = Object.values(pages)[0];

    if (!page || page.missing) return null;

    return {
      title: page.title,
      extract:
        page.extract ||
        "No description available. Click title to view full article.",
      image: page.thumbnail?.source || "",
      fullurl:
        page.fullurl ||
        `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`,
    };
  } catch (error) {
    console.log("Wikipedia fetch error: ", error);
    return null;
  }
}

async function searchDate(dateObj) {
  const dateStr = getDisplayDate(dateObj); // e.g., "August 15, 1947"

  // Search using keywords instead of titles
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(
    dateStr
  )}`;

  try {
    const res = await fetch(searchUrl);
    const data = await res.json();
    const searchResults = data.query.search;

    if (!searchResults || searchResults.length === 0) {
      return null;
    }

    const topResultTitle = searchResults[0].title;
    return await fetchWikiArticle(topResultTitle);
  } catch (err) {
    console.error("Error during Wikipedia search:", err);
    return null;
  }
}

function renderResult(data, dateObj) {
  displayDate.textContent = getDisplayDate(dateObj);

  if (!data) {
    eventYear.textContent = "No Result";
    eventText.textContent = "No historical event fount for this date";
    eventImage.src = "";
    return;
  }

  eventYear.innerHTML = `<a href="${data.fullurl}" target="_blank"> ${data.title} </a>`;
  eventText.textContent = data.extract;
  eventImage.src = data.image;
}

//Master loader
async function loadEvent(dateObj = new Date()) {
  showLoading();
  const result = await searchDate(dateObj);
  renderResult(result, dateObj);
}

window.addEventListener("DOMContentLoaded", () => {
  loadEvent();

  const today = new Date().toISOString().split("T")[0];
  dateInput.setAttribute("max", today);
});

//on user date change
dateInput.addEventListener("change", () => {
  const selected = new Date(dateInput.value);
  if (selected.toString() !== "Invalid Date") {
    loadEvent(selected);
  }
});
