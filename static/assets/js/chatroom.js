// Get elements
const chatButton = document.getElementById('chat-button');
const chatRoom = document.getElementById('chat-room');
const closeChat = document.getElementById('close-chat');
const sendMessageButton = document.getElementById('send-message');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const nameInput = document.getElementById('name-input');

// Toggle chat room visibility
chatButton.addEventListener('click', () => {
    chatRoom.style.display = 'flex';
});

closeChat.addEventListener('click', () => {
    chatRoom.style.display = 'none';
});

// Send message
sendMessageButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const message = chatInput.value.trim();
    if (name && message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${name}: ${message}`;
        messageElement.style.padding = '5px';
        messageElement.style.marginBottom = '5px';
        messageElement.style.backgroundColor = '#e1f5fe';
        messageElement.style.borderRadius = '5px';
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    } else {
        alert('Please enter your name and a message.');
    }
});

// Allow "Enter" key to send messages
chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessageButton.click();
    }
});