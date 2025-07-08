let clickCount = 0;
const maxClicks = 5;

const shareBtn = document.getElementById("shareBtn");
const shareStatus = document.getElementById("shareStatus");
const shareComplete = document.getElementById("shareComplete");
const form = document.getElementById("registrationForm");
const thanksMessage = document.getElementById("thanksMessage");

shareBtn.addEventListener("click", () => {
  const message = encodeURIComponent("Hey Buddy, Join Tech For Girls Community");
  window.open(`https://wa.me/?text=${message}`, "_blank");

  clickCount++;
  shareStatus.textContent = `Click count: ${clickCount}/5`;
  if (clickCount >= maxClicks) {
    shareBtn.disabled = true;
    shareComplete.classList.remove("hidden");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (clickCount < maxClicks) {
    alert("Please complete WhatsApp sharing first.");
    return;
  }

  // You can send this FormData to your server using fetch()
  const formData = new FormData(form);

  form.querySelectorAll("input, button").forEach(el => el.disabled = true);
  thanksMessage.classList.remove("hidden");
});