document.addEventListener("DOMContentLoaded", function() {
    const lastVisit = localStorage.getItem("lastVisit");
    const visitElement = document.getElementById("last-visit");
    
    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        visitElement.textContent = `Last visit: ${lastVisitDate.toLocaleString()}`;
    } else {
        visitElement.textContent = "This is your first visit!";
    }
    
    localStorage.setItem("lastVisit", new Date().toISOString());
});