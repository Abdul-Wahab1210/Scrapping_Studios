// Get elements for all sections
const header = document.querySelector("header");
const hero = document.querySelector(".hero");
const footer = document.querySelector("footer");
const body = document.body;

// Capture initial state for each section
const initialState = {
    header: {
        color: getComputedStyle(header).color,
        backgroundColor: getComputedStyle(header).backgroundColor,
        fontStyle: getComputedStyle(header).fontStyle,
        fontWeight: getComputedStyle(header).fontWeight,
    },
    hero: {
        color: getComputedStyle(hero).color,
        fontStyle: getComputedStyle(hero).fontStyle,
        fontWeight: getComputedStyle(hero).fontWeight,
    },
    footer: {
        color: getComputedStyle(footer).color,
        backgroundColor: getComputedStyle(footer).backgroundColor,
        fontStyle: getComputedStyle(footer).fontStyle,
        fontWeight: getComputedStyle(footer).fontWeight,
    },
    body: {
        backgroundColor: getComputedStyle(body).backgroundColor
    }
};

// Apply selected colors to sections
function applyColors() {
    const headerColor = document.getElementById("header-color").value;
    const bodyColor = document.getElementById("body-color").value;
    const footerColor = document.getElementById("footer-color").value;

    header.style.backgroundColor = headerColor;
    body.style.backgroundColor = bodyColor;
    footer.style.backgroundColor = footerColor;
}

// Reset all color changes to initial state
function resetColors() {
    header.style.backgroundColor = initialState.header.backgroundColor;
    body.style.backgroundColor = initialState.body.backgroundColor;
    footer.style.backgroundColor = initialState.footer.backgroundColor;
}

// Apply selected font style and color to a section
function applyTextStyle() {
    const selectedFontStyle = document.getElementById("font-style").value;
    const selectedFontColor = document.getElementById("font-color").value;
    const selectedSection = document.getElementById("section-select").value;

    let section;
    if (selectedSection === "header") {
        section = header;
    } else if (selectedSection === ".hero") {
        section = hero;
    } else if (selectedSection === "footer") {
        section = footer;
    }

    if (!section) return;

    section.style.color = selectedFontColor;
    if (selectedFontStyle === "bold") {
        section.style.fontWeight = "bold";
    } else if (selectedFontStyle === "italic") {
        section.style.fontStyle = "italic";
    } else {
        section.style.fontStyle = "normal";
        section.style.fontWeight = "normal";
    }
}

// Reset text styles to initial state
function resetTextStyle() {
    header.style.fontStyle = initialState.header.fontStyle;
    header.style.fontWeight = initialState.header.fontWeight;
    header.style.color = initialState.header.color;

    hero.style.fontStyle = initialState.hero.fontStyle;
    hero.style.fontWeight = initialState.hero.fontWeight;
    hero.style.color = initialState.hero.color;

    footer.style.fontStyle = initialState.footer.fontStyle;
    footer.style.fontWeight = initialState.footer.fontWeight;
    footer.style.color = initialState.footer.color;
}
