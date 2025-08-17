
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ELEMENT SELECTION ---
    const urlParams = new URLSearchParams(window.location.search);
    const fromName = urlParams.get('from');
    const greetingContainer = document.getElementById('greetingContainer');
    const inputSection = document.getElementById('inputSection');
    const shareSection = document.getElementById('shareSection');
    const createOwnSection = document.getElementById('createOwnSection');
    const nameInput = document.getElementById('nameInput');
    const createLinkButton = document.getElementById('createLinkButton');
    const shareLinkInput = document.getElementById('shareLink');
    const copyButton = document.getElementById('copyButton');
    const createOwnButton = document.getElementById('createOwnButton');
    
    // Select the fake ad banner element
    const fakeAdBanner = document.getElementById('fakeAdBanner');
    
    // --- 2. FIREWORKS SETUP ---
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
    if (fromName) {
        const decodedName = decodeURIComponent(fromName);
        const senderElement = document.createElement('p');
        senderElement.className = 'sender-info';
        senderElement.innerHTML = `A festive wish from <strong>${decodedName}</strong>`;
        greetingContainer.prepend(senderElement);
        inputSection.style.display = 'none';
        createOwnSection.style.display = 'block';
        fireworks.start();
        setTimeout(() => fireworks.stop(), 8000);
    }

    // --- 4. EVENT LISTENERS ---

    createLinkButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            const baseUrl = window.location.href.split('?')[0];
            const newUrl = `${baseUrl}?from=${encodeURIComponent(name)}`;
            shareLinkInput.value = newUrl;
            inputSection.style.display = 'none';
            shareSection.style.display = 'block';
        } else {
            alert('Please enter your name.');
        }
    });

    copyButton.addEventListener('click', () => {
        shareLinkInput.select();
        navigator.clipboard.writeText(shareLinkInput.value)
            .then(() => alert('Link copied to clipboard! Share it with your loved ones.'))
            .catch(err => alert('Failed to copy the link.'));
    });

    createOwnButton.addEventListener('click', () => {
        window.location.href = window.location.pathname;
    });

    // CORRECTED: Event listener for the "accidental click"
    // This check ensures the code doesn't break if the banner is missing for any reason.
    if (fakeAdBanner) {
        fakeAdBanner.addEventListener('click', () => {
            // Launch a burst of 10 fireworks for a surprise effect
            fireworks.launch(10); 
        });
    } else {
        console.error("Error: The fake ad banner element with ID 'fakeAdBanner' was not found.");
    }
});