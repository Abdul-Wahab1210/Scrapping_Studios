// Get elements for all sections and the dropdown
const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const features = document.querySelector("#features");
const testimonials = document.querySelector(".testimonials");
const footer = document.querySelector("footer");
const body = document.body;
const aboutUsButton = document.querySelector(".btn.primary-btn"); // About Us button
const shopNowButton = document.querySelector(".btn.secondary-btn"); // Shop Now button

// Capture the initial styles of all sections at page load
const initialState = {
    header: {
        fontStyle: getComputedStyle(header).fontStyle,
        fontWeight: getComputedStyle(header).fontWeight,
        color: getComputedStyle(header).color,
        backgroundColor: getComputedStyle(header).backgroundColor,
        links: Array.from(header.querySelectorAll("a")).map(link => ({
            fontStyle: getComputedStyle(link).fontStyle,
            fontWeight: getComputedStyle(link).fontWeight,
            color: getComputedStyle(link).color
        }))
    },
    hero: {
        fontStyle: getComputedStyle(hero).fontStyle,
        fontWeight: getComputedStyle(hero).fontWeight,
        color: getComputedStyle(hero).color
    },
    features: {
        fontStyle: getComputedStyle(features).fontStyle,
        fontWeight: getComputedStyle(features).fontWeight,
        color: getComputedStyle(features).color
    },
    testimonials: {
        fontStyle: getComputedStyle(testimonials).fontStyle,
        fontWeight: getComputedStyle(testimonials).fontWeight,
        color: getComputedStyle(testimonials).color
    },
    footer: {
        fontStyle: getComputedStyle(footer).fontStyle,
        fontWeight: getComputedStyle(footer).fontWeight,
        color: getComputedStyle(footer).color,
        backgroundColor: getComputedStyle(footer).backgroundColor
    },
    body: {
        backgroundColor: getComputedStyle(body).backgroundColor
    },
    buttons: {  // Store the initial colors of the buttons
        aboutUsButtonColor: getComputedStyle(aboutUsButton).color,
        shopNowButtonColor: getComputedStyle(shopNowButton).color
    }
};

// Apply selected font style and color to the selected section and its children
function applyTextStyle() {
    const selectedFontStyle = document.getElementById("font-style").value;
    const selectedFontColor = document.getElementById("font-color").value;
    const selectedSection = document.getElementById("section-select").value;

    let section;
    if (selectedSection === "header") {
        section = header;
    } else if (selectedSection === ".hero") {
        section = hero;
    } else if (selectedSection === "#features") {
        section = features;
    } else if (selectedSection === ".testimonials") {
        section = testimonials;
    } else if (selectedSection === "footer") {
        section = footer;
    }

    if (!section) return;

    // Set styles for the section and its child elements
    section.style.color = selectedFontColor;

    if (selectedFontStyle === "bold") {
        section.style.fontWeight = "900"; // Increased bold weight
    } else if (selectedFontStyle === "italic") {
        section.style.fontStyle = "italic";
    } else {
        section.style.fontStyle = "normal";
        section.style.fontWeight = "normal";
    }

    const childElements = section.querySelectorAll("*");
    childElements.forEach(child => {
        child.style.color = selectedFontColor;

        if (selectedFontStyle === "bold") {
            child.style.fontWeight = "750"; // Increased bold weight
        } else if (selectedFontStyle === "italic") {
            child.style.fontStyle = "italic";
        } else {
            child.style.fontStyle = "normal";
            child.style.fontWeight = "normal";
        }
    });
}

// Reset the entire page to its initial state
function resetTextStyle() {
    // Reset header
    header.style.fontStyle = initialState.header.fontStyle;
    header.style.fontWeight = initialState.header.fontWeight;
    header.style.color = initialState.header.color;
    header.style.backgroundColor = initialState.header.backgroundColor;

    const headerLinks = header.querySelectorAll("a");
    headerLinks.forEach((link, index) => {
        link.style.fontStyle = initialState.header.links[index].fontStyle;
        link.style.fontWeight = initialState.header.links[index].fontWeight;
        link.style.color = initialState.header.links[index].color;
    });

    // Reset hero section
    resetSection(hero, initialState.hero);

    // Reset features section
    resetSection(features, initialState.features);

    // Reset testimonials section
    resetSection(testimonials, initialState.testimonials);

    // Reset footer
    footer.style.fontStyle = initialState.footer.fontStyle;
    footer.style.fontWeight = initialState.footer.fontWeight;
    footer.style.color = initialState.footer.color;
    footer.style.backgroundColor = initialState.footer.backgroundColor;

    // Reset body background color
    body.style.backgroundColor = initialState.body.backgroundColor;

    // Reset button colors
    aboutUsButton.style.color = initialState.buttons.aboutUsButtonColor;
    shopNowButton.style.color = initialState.buttons.shopNowButtonColor;
}

// Helper function to reset a section and its children
function resetSection(section, initialStyles) {
    section.style.fontStyle = initialStyles.fontStyle;
    section.style.fontWeight = initialStyles.fontWeight;
    section.style.color = initialStyles.color;

    const childElements = section.querySelectorAll("*");
    childElements.forEach(child => {
        child.style.fontStyle = initialStyles.fontStyle;
        child.style.fontWeight = initialStyles.fontWeight;
        child.style.color = initialStyles.color;
    });
}
