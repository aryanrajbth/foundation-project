function improvePrompt() {
    const prompt = document.getElementById("prompt").value;
    const result = document.getElementById("result");

    if (prompt.trim() === "") {
        result.innerText = "Please enter a prompt.";
        return;
    }

    let improvedPrompt = "";

    const text = prompt.toLowerCase();

    if (text.includes("resume") || text.includes("cv")) {
        improvedPrompt =
            "Create a professional, ATS-friendly resume. " +
            "Include a strong summary, relevant skills, education, experience, " +
            "and measurable achievements. Use clear formatting and professional language.";
    } 
    else if (text.includes("study") || text.includes("learn")) {
        improvedPrompt =
            "Create a structured study plan for this goal: " + prompt +
            ". Include topics, daily tasks, practice exercises, revision sessions, " +
            "and realistic time estimates.";
    } 
    else if (text.includes("website")) {
        improvedPrompt =
            "Create a modern, responsive website based on this request: " + prompt +
            ". Provide a clear structure, user-friendly design, responsive layout, " +
            "and accessible HTML, CSS, and JavaScript.";
    } 
    else {
        improvedPrompt =
            "Provide a clear, detailed, practical, and well-structured answer for: " +
            prompt +
            ". Include useful steps, examples, and important considerations.";
    }

    result.innerText = "Improved Prompt:\n\n" + improvedPrompt;
}

function copyPrompt() {
    const result = document.getElementById("result").innerText;

    if (result.trim() === "") {
        alert("Please improve a prompt first.");
        return;
    }

    navigator.clipboard.writeText(result);
    alert("Improved prompt copied!");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
