let places = [];

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    places = data;
  });



const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("input", function () {
  const keyword = input.value.toLowerCase();
  results.innerHTML = "";

  const filtered = places.filter(place =>
    place.title.toLowerCase().includes(keyword) ||
    place.description.toLowerCase().includes(keyword)
  );

  filtered.forEach(place => {
    results.innerHTML += `
    <div class="card" style="width: 18rem;">
  <img src="${place.img}" class="card-img-top" alt="...">
  <div class="card-title">
    <h5 class="card-title">${place.title}</h5>
    <p class="card-text">${place.description}</p>
    <a href="${place.link}" class="btn btn-primary">Find out!</a>
  </div>
</div>
    `;
  });
});