let food = [];

const input = document.getElementById("searchInput");
const results = document.getElementById("results");

// 👉 render function（统一显示）
function renderData(list) {
  results.innerHTML = "";

  if (list.length === 0) {
    results.innerHTML = "<p>No food found</p>";
    return;
  }

  list.forEach(item => {
    results.innerHTML += `
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <a href="${item.link}" class="btn btn-primary">Find out!</a>
        </div>
      </div>
    `;
  });
}

// 👉 先 fetch，再显示全部
fetch("selangorfood.json")
  .then(response => response.json())
  .then(data => {
    food = data;
    renderData(food); // ⭐ 一开始就显示全部
  });

// 👉 搜索功能（只做 filter）
input.addEventListener("input", function () {
  const keyword = input.value.toLowerCase();

  const filtered = food.filter(item =>
    item.title.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword)
  );

  renderData(filtered);
});