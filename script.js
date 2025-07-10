window.onload = function () {
  let clickCount = 0;

  const shareBtn = document.getElementById('shareBtn');
  const counter = document.getElementById('counter');
  const submitBtn = document.getElementById('submitBtn');
  const form = document.getElementById('regForm');
  const message = document.getElementById('message');

  // Check if already submitted
  if (localStorage.getItem("submitted") === "true") {
    form.style.display = "none";
    message.textContent = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
  }

  // WhatsApp Share Button
  shareBtn.addEventListener('click', () => {
    if (clickCount < 5) {
      clickCount++;
      counter.textContent = `Click Count: ${clickCount}/5`;

      const url = `https://wa.me/?text=Hey%20Buddy,%20Join%20Tech%20For%20Girls%20Community!`;
      window.open(url, "_blank");

      if (clickCount === 5) {
        alert("Sharing complete. Please continue.");
        submitBtn.disabled = false;
      }
    }
  });

  // Submit Form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (clickCount < 5) {
      alert("Please share 5 times before submitting.");
      return;
    }

    localStorage.setItem("submitted", "true");
    form.style.display = "none";
    message.textContent = "🎉 Your submission has been recorded. Thanks for being part of Tech for Girls!";
  });
};
