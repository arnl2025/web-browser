const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase().trim();
  resultsDiv.innerHTML = "";

  if (!query) return;

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
});
