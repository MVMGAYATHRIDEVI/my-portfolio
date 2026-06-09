function toggleTheme() {
    document.body.classList.toggle("light");

    // Optional: Save theme in browser (so it remembers after refresh)
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// Load saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
    }
};