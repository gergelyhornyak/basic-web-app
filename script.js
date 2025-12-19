function updateMessage() {
    document.getElementById('message').innerText = "The deployment from GitHub worked!";
    console.log("Button clicked!");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('message').innerText = "Ready to deploy.";
});
