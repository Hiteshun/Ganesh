// Wait for the entire HTML document to be loaded and parsed before running the script.
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ELEMENT SELECTION ---
    // Get all the HTML elements we need to work with.
    
    // Check the URL for a 'from' parameter (e.g., ?from=John)
    const urlParams = new URLSearchParams(window.location.search);
    const fromName = urlParams.get('from');

    // Get the containers and sections
    const greetingContainer = document.getElementById('greetingContainer');
    const inputSection = document.getElementById('inputSection');
    const shareSection = document.getElementById('shareSection');
    const createOwnSection = document.getElementById('createOwnSection');
    
    // Get the inputs and buttons
    const nameInput = document.getElementById('nameInput');
    const createLinkButton = document.getElementById('createLinkButton');
    const shareLinkInput = document.getElementById('shareLink');
    const copyButton = document.getElementById('copyButton');
    const createOwnButton = document.getElementById('createOwnButton');
    
    // --- 2. FIREWORKS SETUP ---
    // Initialize the fireworks animation using the fireworks-js library.
    const fireworksContainer = document.getElementById('fireworks-container');
    const fireworks = new Fireworks.default(fireworksContainer, {
        opacity: 0.5,
        rocketsPoint: { min: 45, max: 55 },
        hue: { min: 0, max: 360 },
        delay: { min: 30, max: 60 },
        traceSpeed: 2,
        explosion: 6,
    });

    // --- 3. MAIN LOGIC ---
    // Check if the page was loaded from a shared link.
    if (fromName) {
        // This block runs ONLY if a name is found in the URL.
        
        // Decode the name from the URL (e.g., "%20" becomes a space).
        const decodedName = decodeURIComponent(fromName);
        
        // Create a new paragraph element to display the sender's name.
        const senderElement = document.createElement('p');
        senderElement.className = 'sender-info'; // Apply CSS styling
        senderElement.innerHTML = `A festive wish from <strong>${decodedName}</strong>`;
        
        // Add the sender's name message to the top of the greeting card.
        greetingContainer.prepend(senderElement);
        
        // Hide the section for creating a link.
        inputSection.style.display = 'none';
        
        // Show the button that allows the recipient to create their own greeting.
        createOwnSection.style.display = 'block';

        // Start the fireworks animation!
        fireworks.start();
        
        // Stop the fireworks after 8 seconds to save resources.
        setTimeout(() => {
            fireworks.stop();
        }, 8000);
    }

    // --- 4. EVENT LISTENERS ---
    // Define what happens when buttons are clicked.

    // A. When the "Create Greeting Link" button is clicked:
    createLinkButton.addEventListener('click', () => {
        const name = nameInput.value.trim(); // Get the name from the input field.
        
        if (name) { // Proceed only if a name was entered.
            const baseUrl = window.location.href.split('?')[0]; // Get the clean URL without any parameters.
            const newUrl = `${baseUrl}?from=${encodeURIComponent(name)}`; // Create the new shareable link.
            
            shareLinkInput.value = newUrl; // Put the new link into the share input box.
            inputSection.style.display = 'none'; // Hide the input section.
            shareSection.style.display = 'block'; // Show the share section.
        } else {
            // If the name input is empty, show an alert.
            alert('Please enter your name.');
        }
    });

    // B. When the "Copy Link" button is clicked:
    copyButton.addEventListener('click', () => {
        shareLinkInput.select(); // Select the text in the input field.
        
        // Use the modern Navigator Clipboard API to copy the text.
        navigator.clipboard.writeText(shareLinkInput.value).then(() => {
            // If successful, show a confirmation message.
            alert('Link copied to clipboard! Share it with your loved ones.');
        }).catch(err => {
            // If it fails, log the error and show an alert.
            console.error('Failed to copy text: ', err);
            alert('Failed to copy the link.');
        });
    });

    // C. When the recipient clicks the "Create Your Own Greeting" button:
    createOwnButton.addEventListener('click', () => {
        // Redirect the user to the base URL of the page, removing the "?from=..." parameter.
        // This resets the page to its original state so they can create their own greeting.
        window.location.href = window.location.pathname;
    });
});