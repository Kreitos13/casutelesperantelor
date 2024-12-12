document.getElementById("add-article").addEventListener("click", () => {
	const container = document.getElementById("articles-container");
	const newArticle = document.createElement("article");
	newArticle.innerHTML = `
        <h3>Articol nou</h3>
        <p>Acesta este un articol adăugat manual.</p>
    `;
	container.appendChild(newArticle);
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
	e.preventDefault();
	alert("Mulțumim pentru mesajul tău! Vom reveni curând.");
});
