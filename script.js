function toggleSection(section) {
    var sectionElement = document.getElementById("".concat(section, "-section"));
    var visibilityStatus = document.getElementById("".concat(section, "-visibility"));
    if (sectionElement.classList.contains("hidden")) {
        sectionElement.classList.remove("hidden");
        visibilityStatus.textContent = "Yes";
        visibilityStatus.style.color = "green";
    }
    else {
        sectionElement.classList.add("hidden");
        visibilityStatus.textContent = "No";
        visibilityStatus.style.color = "red";
    }
}
// Attach to the global `window` object to make it accessible in HTML
window.toggleSection = toggleSection;
