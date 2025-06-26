document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const mood = btn.textContent.toLowerCase().trim();

    fetch(`http://localhost:5000/recommend/${mood}`)


      .then(res => res.json())
      .then(data => {
        const output = data.movies.map(movie => `<li>${movie}</li>`).join("");
        document.getElementById("recommendations").innerHTML = `
          <h3>Movies for "${data.mood}" mood:</h3>
          <ul>${output}</ul>
        `;
      })
      .catch(err => {
        console.error("Error:", err);
        document.getElementById("recommendations").innerHTML = `<p>Error fetching movies.</p>`;
      });
  });
});
