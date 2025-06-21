document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const answers = {
      q1: "b",
      q2: "b",
      q3: "c"
    };

    let score = 0;
    Object.keys(answers).forEach((key) => {
      const selected = form.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === answers[key]) {
        score++;
      }
    });

    result.textContent = `You scored ${score} out of ${Object.keys(answers).length}.`;
  });
});