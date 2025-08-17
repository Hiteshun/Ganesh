if (name) {
    message = `Dear ${name}, Wishing you a very Happy Ganesh Chaturthi. May Lord Ganesha always be by your side in every test of your life.`;
}

greetingMessage.innerHTML = `<p>${message}</p>`;

// Update social share links
const encodedMessage = encodeURIComponent(message);
document.getElementById('whatsapp-share').href = `https://api.whatsapp.com/send?text=${encodedMessage}`;
document.getElementById('facebook-share').href = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodedMessage}`;
document.getElementById('twitter-share').href = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
