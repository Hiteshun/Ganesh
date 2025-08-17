// यह सुनिश्चित करता है कि पूरा वेबपेज लोड होने के बाद ही कोड चले
document.addEventListener('DOMContentLoaded', () => {
    
    // URL से पैरामीटर (नाम) प्राप्त करने के लिए
    const urlParams = new URLSearchParams(window.location.search);
    const fromName = urlParams.get('from');

    // HTML तत्वों का चयन
    const greetingContainer = document.getElementById('greetingContainer');
    const inputSection = document.getElementById('inputSection');
    const shareSection = document.getElementById('shareSection');
    const nameInput = document.getElementById('nameInput');
    const createLinkButton = document.getElementById('createLinkButton');
    const shareLinkInput = document.getElementById('shareLink');
    const copyButton = document.getElementById('copyButton');

    // अगर URL में 'from' पैरामीटर है, तो शुभकामना संदेश दिखाएं
    if (fromName) {
        // नाम को डिकोड करें (जैसे %20 को स्पेस में बदलना)
        const decodedName = decodeURIComponent(fromName);
        
        // भेजने वाले का नाम दिखाने के लिए एक नया एलिमेंट बनाएं
        const senderElement = document.createElement('p');
        senderElement.className = 'sender-info';
        senderElement.innerHTML = `<strong>${decodedName}</strong> की तरफ से आपको...`;
        
        // संदेश को ग्रीटिंग कंटेनर में सबसे ऊपर जोड़ें
        greetingContainer.prepend(senderElement);
        
        // नाम दर्ज करने वाले सेक्शन को छिपा दें
        inputSection.style.display = 'none';
    }

    // "शुभकामना लिंक बनाएं" बटन पर क्लिक होने पर
    createLinkButton.addEventListener('click', () => {
        const name = nameInput.value.trim(); // इनपुट से नाम लें और फालतू स्पेस हटा दें
        
        if (name) { // अगर नाम खाली नहीं है
            // वर्तमान URL प्राप्त करें और उसमें नाम जोड़ें
            const baseUrl = window.location.href.split('?')[0];
            const newUrl = `${baseUrl}?from=${encodeURIComponent(name)}`;
            
            shareLinkInput.value = newUrl; // नए लिंक को शेयर बॉक्स में दिखाएं
            inputSection.style.display = 'none'; // इनपुट सेक्शन छिपाएं
            shareSection.style.display = 'block'; // शेयर सेक्शन दिखाएं
        } else {
            alert('कृपया अपना नाम दर्ज करें।'); // अगर नाम खाली है तो अलर्ट दिखाएं
        }
    });

    // "लिंक कॉपी करें" बटन पर क्लिक होने पर
    copyButton.addEventListener('click', () => {
        shareLinkInput.select(); // लिंक को चुनें
        shareLinkInput.setSelectionRange(0, 99999); // मोबाइल उपकरणों के लिए

        // क्लिपबोर्ड पर कॉपी करें
        navigator.clipboard.writeText(shareLinkInput.value).then(() => {
            alert('लिंक क्लिपबोर्ड पर कॉपी हो गया है!');
        }).catch(err => {
            console.error('लिंक कॉपी नहीं हो सका: ', err);
            // पुराना तरीका (fallback)
            try {
                document.execCommand('copy');
                alert('लिंक क्लिपबोर्ड पर कॉपी हो गया है!');
            } catch (e) {
                alert('लिंक कॉपी करने में विफल।');
            }
        });
    });
});