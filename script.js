// Define color themes
const colors = {
    0: { bg: "#020d1a", text: "#ffffff", nav: "#031627", car: "#041d33" }, // Deep Navy
    1: { bg: "#232323", text: "#ffffff", nav: "#1a1a1a", car: "#333333" }, // Dark Grey
    2: { bg: "#121212", text: "#ffffff", nav: "#0e0e0e", car: "#222222" }  // Midnight Black
};

// Log the first color for debugging purposes
console.log("The first color in the array is:", colors[0].bg);

// Prompt the user for their name and color choice
const userName = prompt("What is your name?");
const colorChoice = prompt(`Hi ${userName}, pick a background color:
0 for Deep Navy,
1 for Dark Grey,
2 for Midnight Black`);


if (colors[colorChoice]) {
    const selectedColors = colors[colorChoice];


    document.body.style.backgroundColor = selectedColors.bg;
    document.body.style.color = selectedColors.text;

   
    document.querySelector("header").style.backgroundColor = selectedColors.nav;
    const navElement = document.querySelector("nav");
    if (navElement) {
        navElement.style.backgroundColor = selectedColors.nav;
        navElement.style.border = `1px solid ${adjustColorBrightness(selectedColors.nav, -20)}`; // slightly darker border
        navElement.style.boxShadow = `0 2px 8px ${adjustColorBrightness(selectedColors.nav, -50)}`; 
    }

    // Update all car sections
    document.querySelectorAll(".car").forEach(car => {
        car.style.backgroundColor = selectedColors.car;
        car.style.color = selectedColors.text;
        car.style.borderRadius = "8px";
        car.style.padding = "15px"; 
        car.style.boxShadow = `0 2px 8px ${adjustColorBrightness(selectedColors.car, -30)}`; 
    });

 
    document.querySelectorAll(".contact-form-section, .visit-link").forEach(section => {
        section.style.backgroundColor = selectedColors.bg;
        section.style.color = selectedColors.text;
    });
} else {
    alert(" Default to Deep Navy.");
    const defaultColors = colors[0];
    
    document.body.style.backgroundColor = defaultColors.bg;
    document.body.style.color = defaultColors.text;

    document.querySelector("header").style.backgroundColor = defaultColors.nav;
    const navElement = document.querySelector("nav");
    if (navElement) {
        navElement.style.backgroundColor = defaultColors.nav;
        navElement.style.border = `1px solid ${adjustColorBrightness(defaultColors.nav, -20)}`;
        navElement.style.boxShadow = `0 2px 8px ${adjustColorBrightness(defaultColors.nav, -50)}`;
    }

    document.querySelectorAll(".car").forEach(car => {
        car.style.backgroundColor = defaultColors.car;
        car.style.color = defaultColors.text;
        car.style.borderRadius = "8px";
        car.style.padding = "15px";
        car.style.boxShadow = `0 2px 8px ${adjustColorBrightness(defaultColors.car, -30)}`;
    });

    document.querySelectorAll(".contact-form-section, .visit-link").forEach(section => {
        section.style.backgroundColor = defaultColors.bg;
        section.style.color = defaultColors.text;
    });
}


function adjustColorBrightness(hex, amount) {
    let usePound = false;

    if (hex[0] === "#") {
        hex = hex.slice(1);
        usePound = true;
    }

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.min(Math.max(0, r + amount), 255);
    g = Math.min(Math.max(0, g + amount), 255);
    b = Math.min(Math.max(0, b + amount), 255);

    const adjustedHex =
        (usePound ? "#" : "") +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    return adjustedHex;
}


