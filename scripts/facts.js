const funFacts = [
    "Fact 1",
    "Fact 2",
    "Fact 3",
    "Fact 4",
    "Fact 5",
    "Fact 6",
    "Fact 7",
    "Fact 8",
    
];

document.addEventListener("DOMContentLoaded", () => {
    const funFactElement = document.getElementById("fun-fact");
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactElement.textContent = funFacts[randomIndex];
});
