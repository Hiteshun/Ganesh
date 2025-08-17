document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const nameInput = document.getElementById('name-input');
    const generateBtn = document.getElementById('generate-btn');
    const greetingDisplay = document.getElementById('greeting-display');
    const whatsappShare = document.getElementById('whatsapp-share');
    const facebookShare = document.getElementById('facebook-share');
    const twitterShare = document.getElementById('twitter-share');

    // The core greeting message
    const coreMessage = "Wishing you a Ganesh Chaturthi filled with joy, peace, and prosperity. May Lord Ganesha bless you!";

    // Function to update the greeting text and share links
    function updateGreeting() {
        const name = nameInput.value.trim();
        let finalMessage = "";

        if (name) {
            // If a name is entered, create a personalized message
            finalMessage = `Dear ${name}, \n\n${coreMessage}`;
        } else {
            // Otherwise, use the default message
            finalMessage = coreMessage;
        }

        // Display the generated greeting on the page
        greetingDisplay.innerHTML = `<p>${finalMessage.replace(/\n/g, '<br>')}</p>`;

        // Encode the message for use in a URL
        const encodedMessage = encodeURIComponent(finalMessage);

        // Update the href attribute of the share links
        whatsappShare.href = `https://api.whatsapp.com/send?text=${encodedMessage}`;
        facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodedMessage}`;
        twitterShare.href = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
    }

    // Add a click event listener to the "Create Greeting" button
    generateBtn.addEventListener('click', updateGreeting);
    
    // Optional: Allow pressing 'Enter' in the input field to generate the greeting
    nameInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            updateGreeting();
        }
    });

    // Initialize with a default greeting when the page loads
    updateGreeting();
});
