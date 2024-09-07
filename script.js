function saveData(fieldId) {
    const fieldValue = document.getElementById(fieldId).value;
    if (fieldValue.trim() === "") {
        alert("Please fill out this field before saving.");
        return;
    }
    
    alert(`${fieldId} saved successfully!`);
    displayConfirmation('save', fieldId);
}

function deleteData(fieldId) {
    document.getElementById(fieldId).value = "";
    alert(`${fieldId} deleted successfully!`);
    displayConfirmation('delete', fieldId);
}

function displayConfirmation(action, fieldId) {
    const msg = action === 'save' ? 'Saved' : 'Deleted';
    const confirmationBox = document.createElement('div');
    confirmationBox.innerText = `${msg} successfully!`;
    confirmationBox.classList.add('confirmation-box');
    
    document.body.appendChild(confirmationBox);
    
    setTimeout(() => {
        confirmationBox.remove();
    }, 3000);
}

function checkGSTIN() {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const loading = document.getElementById('loading');

    // Display the popup with loading animation and blue message
    popupMessage.classList.add('semi-opaque', 'blue');
    popupMessage.classList.remove('red');
    popupMessage.innerText = "Your GSTIN is being verified by the Authority. Please wait.";
    popup.classList.remove('hidden');
    

    // After 15 minutes, show the rejection message
    setTimeout(() => {
        popupMessage.classList.remove('blue');
        popupMessage.classList.add('red');
        popupMessage.innerText = "Your provided GSTIN is invalid or rejected. Please try again after some time.";
  

        // After 5 minutes, hide the popup
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 300000); // 5 minutes in milliseconds
    }, 9000000); // 15 minutes in milliseconds
}