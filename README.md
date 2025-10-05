# Simple Interactive Quiz

This repository contains instructions and templates for a simple interactive quiz. You will use the provided HTML and CSS and implement the required JavaScript to make the quiz functional. The goal is to produce uniform submissions suitable for automated checking.


## Provided HTML and CSS Templates

Create the following files with the exact content below.

1) index.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="quiz-container">
        <p id="quiz-question">What is 2 + 2?</p>
        <div>
            <input type="radio" id="choice1" name="quiz" value="4">
            <label for="choice1">4</label><br>
            <input type="radio" id="choice2" name="quiz" value="22">
            <label for="choice2">22</label><br>
            <input type="radio" id="choice3" name="quiz" value="3">
            <label for="choice3">3</label>
        </div>
        <button id="submit-answer">Submit Answer</button>
        <p id="feedback"></p>
    </div>
    <script src="quiz.js"></script>
</body>
</html>
```

2) style.css

```
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

#quiz-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#quiz-question {
    font-size: 20px;
    margin-bottom: 20px;
}

input[type="radio"] {
    margin-right: 10px;
}

label {
    margin-right: 30px;
    cursor: pointer;
}

#submit-answer {
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

#submit-answer:hover {
    background-color: #0056b3;
}

#feedback {
    margin-top: 20px;
    font-size: 18px;
}
```


## Task: Implement checkAnswer and add the event listener

implementing the JavaScript logic in quiz.js.

1) Start with the function declaration

- Define a function named `checkAnswer`.

```
function checkAnswer() {
    // Function body
}
```

2) Identify the correct answer

- Inside `checkAnswer`, declare a variable named `correctAnswer` and assign the string value `"4"`.

```
function checkAnswer() {
    const correctAnswer = "4";
}
```

3) Retrieve the user’s answer

- Use `document.querySelector` to select the checked radio button with the name attribute `name="quiz"`.
- Access the `value` of the selected radio button and store it in a variable named `userAnswer`.

```
function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
}
```

4) Compare the user’s answer with the correct answer

- Use an `if` statement to compare `userAnswer` with `correctAnswer`.
  - If they match, set the `textContent` of the element with ID `feedback` to `"Correct! Well done."`.
  - If they do not match, set it to `"That's incorrect. Try again!"`.

```
function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}
```

5) Add an event listener to the Submit button

- Use `document.getElementById` to select the button with ID `submit-answer`.
- Add a `click` event listener and pass the `checkAnswer` function as the callback (do not call it directly; do not add parentheses).

```
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
```


## Final expected JavaScript (quiz.js)

Copy the following into a file named `quiz.js` in the same directory as `index.html`:

```
function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
```

Note: Ensure one option is selected before clicking Submit; otherwise, there will be no checked radio input.


## How to run

- Open `index.html` in your web browser (double-click or drag it into the browser).
- Select an answer and click "Submit Answer".
- Observe the feedback text below the button.


## Automated checking criteria

Submissions are considered correct if they meet all of the following:

- A function named `checkAnswer` is defined.
- Inside `checkAnswer`, a variable `correctAnswer` is set to the string `"4"`.
- The selected radio input is retrieved using `document.querySelector('input[name="quiz"]:checked')`, and its `value` is stored in `userAnswer`.
- The element with ID `feedback` has its `textContent` set to exactly one of:
  - `Correct! Well done.` when correct
  - `That's incorrect. Try again!` when incorrect
- An event listener is added to the element with ID `submit-answer` using `addEventListener('click', checkAnswer)` (function passed by reference, not invoked).

Adhere precisely to the strings and structure above to ensure uniform, automatable results.