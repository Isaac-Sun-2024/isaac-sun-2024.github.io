document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copyButton");
    const statusMessage = document.getElementById("statusMessage");

    // The text to be copied
    const textToCopy = '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Isaac-Sun-2024/Bible-Access/main/install.sh)"';

    copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(textToCopy).then(() => {
            statusMessage.textContent = "Text copied to clipboard!";
        }).catch(err => {
            statusMessage.textContent = "Failed to copy text.";
        });
    });
});
