document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector(".search-btn");
  const city = document.querySelector("#cityInput");

  search.addEventListener("click", function () {
    const cityName = city.value;
    console.log(cityName);
  });
});
