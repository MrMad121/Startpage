let google_logo = document.getElementById("google-logo");
let bing_logo = document.getElementById("bing-logo");
let search_box = document.getElementById("search-box");
let ai_icon = document.getElementById("ai-icon");
let ai_link = document.getElementById("ai-link");
let input_search = document.getElementById("input-search");

google_logo.addEventListener("click", () => {
    google_logo.style.display = "none";
    bing_logo.style.display = "flex";
    search_box.setAttribute("action", "https://www.bing.com/search");
    ai_icon.setAttribute("src", "copilot.svg");
    ai_link.setAttribute("href", "https://copilot.microsoft.com/#");
    input_search.setAttribute("placeholder", "Bing Search");
});

bing_logo.addEventListener("click", () => {
    bing_logo.style.display = "none";
    google_logo.style.display = "flex";
    search_box.setAttribute("action", "https://www.google.com/search");
    ai_icon.setAttribute("src", "gemini.svg");
    ai_link.setAttribute("href", "https://gemini.google.com/app");
    input_search.setAttribute("placeholder", "Google Search");
});
