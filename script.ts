function toggleSection(section: string): void {
    const sectionElement = document.getElementById(`${section}-section`) as HTMLElement;
    const visibilityStatus = document.getElementById(`${section}-visibility`) as HTMLElement;

    if (sectionElement.classList.contains("hidden")) {
        sectionElement.classList.remove("hidden");
        visibilityStatus.textContent = "Yes";
        visibilityStatus.style.color = "green";
    } else {
        sectionElement.classList.add("hidden");
        visibilityStatus.textContent = "No";
        visibilityStatus.style.color = "red";
    }
}

// Attach to the global `window` object to make it accessible in HTML
(window as any).toggleSection = toggleSection;
