// Open Review Form
function openForm() {
    document.getElementById("reviewForm").style.display = "flex";
}

// Close Review Form
function closeForm() {
    document.getElementById("reviewForm").style.display = "none";
}

// Open Login Form
function openLogin() {
    document.getElementById("loginForm").style.display = "flex";
}

// Close Login Form
function closeLogin() {
    document.getElementById("loginForm").style.display = "none";
}

// Submit Review
function submitReview() {
    let foodName = document.getElementById("foodName").value;
    let reviewText = document.getElementById("reviewText").value;

    if (foodName === "" || reviewText === "") {
        alert("Please fill in all fields.");
        return;
    }

    let newReview = document.createElement("div");
    newReview.classList.add("review-card");

    newReview.innerHTML = `
        <img src="food-placeholder.jpg" alt="${foodName}">
        <h3>${foodName}</h3>
        <p>"${reviewText}"</p>
        <span>⭐️⭐️⭐️⭐️⭐️</span>
    `;

    document.querySelector(".reviews").appendChild(newReview);

    // Close and Clear Form
    closeForm();
    document.getElementById("foodName").value = "";
    document.getElementById("reviewText").value = "";
}