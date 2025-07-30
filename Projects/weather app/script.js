const apiKey = "15d2396488f2b62795ce443804f8de69"; // Replace with your real key if needed

document.querySelector(".search-btn").addEventListener("click", async () => {
  const city = document.querySelector("input").value.trim();

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    console.log("API Data:", data);

    // Extract weather info
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const condition = data.weather[0].description.toLowerCase();

    // Update weather info in DOM
    const weatherDetails = document.querySelector(".details");
    weatherDetails.innerHTML = `
      <h4>Current Weather in ${data.name}</h4>
      <p>Temperature: ${temp}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Condition: ${condition}</p>
    `;

    // Generate outfit suggestion message
    let suggestion = "";

    if (temp > 30) {
      suggestion = "It's hot! Wear light clothes like t-shirts and shorts.";
    } else if (temp < 15) {
      suggestion = "It's cold! Wear sweaters, hoodies, and jackets.";
    } else {
      suggestion =
        "The weather is pleasant. Casual wear like jeans and shirts is good.";
    }

    if (condition.includes("rain")) {
      suggestion += " Don't forget a raincoat or umbrella!";
    } else if (condition.includes("cloud")) {
      suggestion += " Maybe keep a light hoodie with you.";
    }

    // Update outfit suggestion heading
    const outfitSectionHeading = document.querySelector(
      ".outfit-suggestions .sub-heading"
    );
    outfitSectionHeading.innerHTML = `
      <h2>Outfit Suggestions</h2>
      <p style="margin-top: 10px;">${suggestion}</p>
    `;

    // Filter and show only matching outfit cards
    const allOutfits = document.querySelectorAll(".outfits > div");
    allOutfits.forEach((card) => {
      card.style.display = "none"; // hide all initially
    });

    // Determine the weather category
    let weatherCategory = "";
    if (temp > 30) weatherCategory = "hot";
    else if (temp < 15) weatherCategory = "cold";
    else weatherCategory = "mild";

    if (condition.includes("rain")) weatherCategory = "rain";
    else if (condition.includes("cloud")) weatherCategory = "cloud";

    console.log("Weather Category:", weatherCategory);

    // Show matching outfit cards
    let shown = 0;
    allOutfits.forEach((card) => {
      const tags = card
        .getAttribute("data-weather")
        ?.toLowerCase()
        .split(",")
        .map((t) => t.trim());
      if (tags.includes(weatherCategory)) {
        card.style.display = "block";
        shown++;
      } else {
        card.style.display = "none";
      }
    });

    // Handle "no outfits found"
    if (shown === 0) {
      outfitSectionHeading.innerHTML += `<p>No specific outfits matched. Try checking our products or refresh for general styles.</p>`;
    }
  } catch (err) {
    alert(err.message);
    console.error("Fetch Error:", err);
  }
});

console.log("Card:", card, "Tags:", tags, "Weather Category:", weatherCategory);
