/* --- COPY TEXT FUNCTIONALITY --- */
function copyText(elementId) {
    // Get the text field
    var textToCopy = document.getElementById(elementId).innerText;
    var tooltip = document.querySelector(`#${elementId} + .copy-btn .tooltiptext`);

    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Select the text field
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(tempInput.value).then(function() {
        // Success!
        tooltip.innerText = "Copied!";
        tooltip.style.backgroundColor = "#00cec9"; // Cyan for success
        tooltip.style.color = "#fff";
        
        // Reset tooltip text after 2 seconds
        setTimeout(function() {
            tooltip.innerText = (elementId === 'serverIP' ? "Copy IP" : "Copy Port");
            tooltip.style.backgroundColor = ""; // Reset background
            tooltip.style.color = ""; // Reset text color
        }, 2000);
    }, function(err) {
        // Failure
        console.error('Async: Could not copy text: ', err);
        tooltip.innerText = "Error!";
    });

    // Remove the temporary element
    document.body.removeChild(tempInput);
}

/* --- PARTICLES.JS BACKGROUND CONFIG --- */
// (This creates the subtle floating particle effect seen in the reference)
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.2, "random": true },
        "size": { "value": 2, "random": true },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "bubble": { "distance": 100, "size": 4, "duration": 2, "opacity": 0.5, "speed": 3 } }
    },
    "retina_detect": true
});
