function improvePrompt() {
    const prompt = document.getElementById("prompt").value;

    const result = document.getElementById("result");

    if (prompt.trim() === "") {
        result.innerText = "Please enter a prompt.";
        return;
    }

    result.innerText =
        "Improved Prompt:\n\n" +
        "Please provide a clear, detailed and useful answer for: " +
        prompt;
}
