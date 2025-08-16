// Global variables
let currentMusic = null;
let musicPlaying = false;

// Sample music URLs (using placeholder URLs - in real deployment, you'd use actual audio files)
const musicTracks = {
    aarti: {
        name: "Ganesh Aarti",
        url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
        description: "Traditional Ganesh Aarti"
    },
    bhajan: {
        name: "Ganesh Bhajan",
        url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
        description: "Devotional Ganesh Bhajan"
    },
    instrumental: {
        name: "Instrumental Music",
        url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
        description: "Peaceful Instrumental Music"
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add enter key support for form inputs
    document.getElementById('userName').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('relativeName').focus();
        }
    });
    
    document.getElementById('relativeName').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            createGreeting();
        }
    });
    
    // Add input validation
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[<>]/g, ''); // Basic XSS prevention
        });
    });
});

// Create personalized greeting
function createGreeting() {
    const userName = document.getElementById('userName').value.trim();
    const relativeName = document.getElementById('relativeName').value.trim();
    
    if (!userName || !relativeName) {
        alert('Please enter both names to create your greeting!');
        return;
    }
    
    // Update display names
    document.getElementById('displayUserName').textContent = userName;
    document.getElementById('displayRelativeName').textContent = relativeName;
    
    // Hide form and show greeting
    document.getElementById('personalizationCard').style.display = 'none';
    document.getElementById('greetingDisplay').style.display = 'block';
    
    // Scroll to greeting
    document.getElementById('greetingDisplay').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Change Ganesh image randomly
    const images = ['ganesh1.jpg', 'ganesh2.jpg', 'ganesh3.jpg'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('ganeshImg').src = randomImage;
    
    // Add celebration effect
    createCelebrationEffect();
}

// Go back to form
function goBack() {
    document.getElementById('greetingDisplay').style.display = 'none';
    document.getElementById('personalizationCard').style.display = 'block';
    
    // Stop any playing music
    stopMusic();
    
    // Clear form
    document.getElementById('userName').value = '';
    document.getElementById('relativeName').value = '';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Music functions
function playMusic(type) {
    const audio = document.getElementById('backgroundMusic');
    const musicInfo = document.getElementById('musicInfo');
    
    // Remove active class from all buttons
    document.querySelectorAll('.music-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (musicTracks[type]) {
        // Note: In a real deployment, you would have actual audio files
        // For demo purposes, we'll show the music info without actual playback
        currentMusic = type;
        musicInfo.innerHTML = `🎵 Now playing: ${musicTracks[type].name}<br><small>${musicTracks[type].description}</small>`;
        
        // Add active class to clicked button
        event.target.classList.add('active');
        
        // In a real implementation, you would:
        // audio.src = musicTracks[type].url;
        // audio.play();
        musicPlaying = true;
        
        // Show a message about music (since we don't have actual audio files)
        showMusicMessage(musicTracks[type].name);
    }
}

function stopMusic() {
    const audio = document.getElementById('backgroundMusic');
    const musicInfo = document.getElementById('musicInfo');
    
    audio.pause();
    audio.currentTime = 0;
    musicPlaying = false;
    currentMusic = null;
    
    musicInfo.innerHTML = '';
    
    // Remove active class from all buttons
    document.querySelectorAll('.music-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

function showMusicMessage(musicName) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 107, 53, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.innerHTML = `🎵 ${musicName} would be playing<br><small>Add your own audio files for actual playback</small>`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Share functions
function shareOnWhatsApp() {
    const userName = document.getElementById('displayUserName').textContent;
    const relativeName = document.getElementById('displayRelativeName').textContent;
    const message = `🙏 Happy Ganesh Chaturthi! 🙏\n\nDear ${relativeName},\n\nMay Lord Ganesha remove all obstacles from your path and fill your life with joy, prosperity, and success. Wishing you and your family a very Happy Ganesh Chaturthi!\n\nWith love and blessings,\n${userName}\n\nGanpati Bappa Morya! 🕉️`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function shareOnFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
}

function shareOnTwitter() {
    const userName = document.getElementById('displayUserName').textContent;
    const message = `🙏 Wishing everyone a blessed Ganesh Chaturthi! May Lord Ganesha bring happiness and prosperity to all. Ganpati Bappa Morya! 🕉️ #GaneshChaturthi #GanpatiBappaMorya`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(twitterUrl, '_blank');
}

function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showCopyMessage('Link copied to clipboard!');
        }).catch(() => {
            fallbackCopyTextToClipboard(url);
        });
    } else {
        fallbackCopyTextToClipboard(url);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyMessage('Link copied to clipboard!');
    } catch (err) {
        showCopyMessage('Unable to copy link');
    }
    
    document.body.removeChild(textArea);
}

function showCopyMessage(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(40, 167, 69, 0.9);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Celebration effect
function createCelebrationEffect() {
    const colors = ['#ff6b35', '#ff9a56', '#f7931e', '#ffd700', '#ff69b4'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 50);
    }
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${color};
        top: -10px;
        left: ${Math.random() * 100}vw;
        z-index: 1000;
        border-radius: 50%;
        pointer-events: none;
        animation: confettiFall 3s linear forwards;
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5)';
            this.style.opacity = '0.8';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '0.3';
        });
    });
});

