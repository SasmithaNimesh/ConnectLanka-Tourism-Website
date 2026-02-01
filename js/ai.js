async function runAIPlanner() {
    const budget = Number(document.getElementById("aiBudget").value);
    const days = Number(document.getElementById("aiDays").value);
    const interest = document.getElementById("aiInterest").value.toLowerCase();
    const resultBox = document.getElementById("aiResult");

    if (!budget || !days || !interest) {
        alert("Please fill in all fields!");
        return;
    }

    resultBox.style.display = "block";
    resultBox.innerHTML = "🤖 Generating travel plan...";

    try {
        const response = await fetch("/api/prolog-ai-options", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ budget, interest })
        });

        const data = await response.json();

        if (!data.options || data.options.length === 0) {
            resultBox.innerHTML = "No options found for the given budget/interest.";
            return;
        }

        // Render options as cards
        resultBox.innerHTML = `<h4>AI Recommended Travel Plans:</h4><div class="ai-options-grid"></div>`;
        const grid = document.querySelector(".ai-options-grid");
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";
        grid.style.gap = "20px";
        grid.style.marginTop = "20px";

        data.options.forEach((opt, index) => {
            const [destination, hotel, transport] = opt;
            const card = document.createElement("div");
            card.className = "card";
            card.style.padding = "15px";
            card.style.border = "1px solid #ddd";
            card.style.borderRadius = "12px";
            card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
            card.innerHTML = `
                <h3 style="color: var(--color-primary);">Option ${index + 1}</h3>
                <p><b>Destination:</b> ${destination}</p>
                <p><b>Hotel:</b> ${hotel}</p>
                <p><b>Transport:</b> ${transport}</p>
            `;
            grid.appendChild(card);
        });

    } catch (error) {
        console.error(error);
        resultBox.innerHTML = "❌ Failed to get AI recommendation.";
    }
}
