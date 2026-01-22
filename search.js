const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const suggestions = document.getElementById("suggestions");
const themeToggle = document.getElementById("themeToggle");

// 🔎 Sökfunktion
function runSearch(query) {
  resultsDiv.innerHTML = "";

  const results = SITES.filter(site =>
    site.title.toLowerCase().includes(query) ||
    site.description.toLowerCase().includes(query) ||
    site.keywords.toLowerCase().includes(query)
  );

  results.forEach(site => {
    const div = document.createElement("div");
    div.className = "result";
    div.innerHTML = `
      <a href="${site.url}" target="_blank">${site.title}</a>
      <p>${site.description}</p>
    `;
    resultsDiv.appendChild(div);
  });
}

// ✨ Autocomplete
input.addEventListener("input", () => {
  const query = input.value.toLowerCase().trim();
  suggestions.innerHTML = "";
  resultsDiv.innerHTML = "";

  if (!query) return;

  const matches = SITES
    .map(s => s.title)
    .filter(t => t.toLowerCase().startsWith(query))
    .slice(0, 5);

  matches.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    li.onclick = () => {
      input.value = text;
      suggestions.innerHTML = "";
      runSearch(text.toLowerCase());
    };
    suggestions.appendChild(li);
  });

  runSearch(query);
});

// 🌙 Dark mode
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};
