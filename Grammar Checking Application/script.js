function checkGrammar() {

```
let text = document.getElementById("textInput").value;
let result = document.getElementById("resultText");

if (text.trim() === "") {
    result.innerHTML = "⚠️ Please enter some text.";
    return;
}

let mistakes = [];

// Check for multiple spaces
if (/\s{2,}/.test(text)) {
    mistakes.push("❌ Multiple spaces found.");
}

// Check first letter capitalization
let firstLetter = text.trim().charAt(0);

if (firstLetter !== firstLetter.toUpperCase()) {
    mistakes.push("❌ The first letter should be capitalized.");
}

// Check punctuation at the end
let trimmedText = text.trim();

if (!/[.!?]$/.test(trimmedText)) {
    mistakes.push("❌ Add punctuation at the end of the sentence.");
}

// Common grammar mistakes
let corrections = {
    " i ": " I ",
    " he go ": " he goes ",
    " she go ": " she goes ",
    " they is ": " they are ",
    " we is ": " we are ",
    " you is ": " you are ",
    " he are ": " he is ",
    " she are ": " she is ",
    " i am agree ": " I agree ",
    " he have ": " he has ",
    " she have ": " she has ",
    " they has ": " they have ",
    " your welcome": "you're welcome",
    " its a": "it's a"
};

let lowerText = " " + text.toLowerCase() + " ";

for (let mistake in corrections) {

    if (lowerText.includes(mistake)) {

        mistakes.push(
            "❌ Possible correction: <b>" +
            mistake.trim() +
            "</b> → <b>" +
            corrections[mistake].trim() +
            "</b>"
        );
    }
}

// Check repeated words
let words = text.toLowerCase().split(/\s+/);

for (let i = 0; i < words.length - 1; i++) {

    let currentWord = words[i].replace(/[.,!?]/g, "");
    let nextWord = words[i + 1].replace(/[.,!?]/g, "");

    if (currentWord === nextWord && currentWord !== "") {

        mistakes.push(
            "❌ Repeated word found: <b>" +
            currentWord +
            "</b>"
        );
    }
}

// Display result
if (mistakes.length === 0) {

    result.innerHTML =
        "<span class='success'>✅ No common grammar mistakes found!</span>";

} else {

    result.innerHTML =
        "<span class='error'>⚠️ Grammar issues found:</span><br><br>" +
        mistakes.join("<br>");
}
```

}

// Clear text
function clearText() {

```
document.getElementById("textInput").value = "";

document.getElementById("resultText").innerHTML =
    "Your grammar results will appear here.";
```

}

// Load example
function loadExample() {

```
let example =
    "i am agree with this idea  they is very good";

document.getElementById("textInput").value = example;

checkGrammar();
```

}

