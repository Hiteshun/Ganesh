document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromName = urlParams.get('from');
    
    const greetingMessage = document.getElementById('greetingMessage');
    const inputSection = document.getElementById('inputSection');
    const shareSection = document.getElementById('shareSection');
    const nameInput = document.getElementById('nameInput');
    const createLinkButton = document.getElementById('createLinkButton');
    const shareLinkInput = document.getElementById('shareLink');
    const copyButton = document.getElementById('copyButton');

    // अगर URL में नाम है, तो व्यक्तिगत संदेश दिखाएं
    if (fromName) {
        const decodedName = decodeURIComponent(fromName);
        const senderMessage = document.createElement('p');
        senderMessage.innerHTML = `<strong>${decodedName}</strong> की तरफ से आपको...`;
        senderMessage.style.fontWeight = 'bold';
        senderMessage.style.fontSize = '1.2rem';
        senderMessage.style.color = '#c8404a';
        
        greetingMessage.parentNode.insertBefore(senderMessage, greetingMessage);
        
        inputSection.style.display = 'none'; // इनपुट फॉर्म छिपाएं
    }

    // "लिंक बनाएं" बटन पर क्लिक करने पर
    createLinkButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            const baseUrl = window.location.href.split('?')[0];
            const newUrl = `${baseUrl}?from=${encodeURIComponent(name)}`;
            
            shareLinkInput.value = newUrl;
            inputSection.style.display = 'none';
            shareSection.style.display = 'block';
        } else {
            alert('कृपया अपना नाम दर्ज करें।');
        }
    });

    // "लिंक कॉपी करें" बटन पर क्लिक करने पर
    copyButton.addEventListener('click', () => {
        shareLinkInput.select();
        document.execCommand('copy');
        alert('लिंक क्लिपबोर्ड पर कॉपी हो गया है!');
    });
});