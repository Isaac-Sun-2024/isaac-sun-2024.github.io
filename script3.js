document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copyButton");
    const statusMessage = document.getElementById("statusMessage");

    // The text to be copied
    const textToCopy = "alias startmining='./xmrig -o gulf.moneroocean.stream:10128 -u 4A9K7U3Hp4T54z8aqm15okf8ZNA2JMrCagqUZdagqUZdhMoh6ECCVjrTuXWVeG6feCoc94QQFzyjDbCDKeb6SXnwbzfykuFAiqEPN -p matthew1'";

    copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(textToCopy).then(() => {
            statusMessage.textContent = "Text copied to clipboard!";
        }).catch(err => {
            statusMessage.textContent = "Failed to copy text.";
        });
    });
});
