// 01 Promise syntax
function attachEvents() {
    baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const sendBtnElement = document.getElementById('submit');
    const refreshBtnElement = document.getElementById('refresh');

    const textareaElement = document.getElementById('messages');
    const nameInputElement = document.querySelector('input[type=text][name=author]');
    const messageInputElement = document.querySelector('input[type=text][name=content]');

    const sendMessage = () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'author': nameInputElement.value,
                'content': messageInputElement.value,
            })
        }).catch(err => console.error(err.message));

        nameInputElement.value = '';
        messageInputElement.value = '';
    }

    const refreshMessages = () => {
        textareaElement.value = '';

        fetch(baseUrl)
            .then(res => res.json())
            .then(messageData => {
                Object.values(messageData).forEach(message => {
                    const messageAuthor = message.author;
                    const messageContent = message.content;

                    textareaElement.value += `${messageAuthor}: ${messageContent}\n`;
                })
            })
            .catch(err => console.error(err.message));
    }

    sendBtnElement.addEventListener('click', sendMessage);
    refreshBtnElement.addEventListener('click', refreshMessages);
}

attachEvents();

// 02 Async / Await syntax
async function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const sendBtnElement = document.getElementById('submit');
    const refreshBtnElement = document.getElementById('refresh');

    const textareaElement = document.getElementById('messages');
    const nameInputElement = document.querySelector('input[type=text][name=author]');
    const messageInputElement = document.querySelector('input[type=text][name=content]');

    const sendMessage = async function() {
        try {
            await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    'author': nameInputElement.value,
                    'content': messageInputElement.value,
                })
            });

            nameInputElement.value = '';
            messageInputElement.value = '';
        } catch (err) {
            console.error(err.message);
        }
    };

    const refreshMessages = async function() {
        textareaElement.value = '';

        let conversation = [];

        try {
            const res = await fetch(baseUrl);
            const messageData = await res.json();
            
            Object.values(messageData).forEach(message => {
                const { author, content } = message;
                conversation.push(`${author}: ${content}`);

                textareaElement.value = conversation.join('\n');
            });
        } catch (err) {
            console.error(err.message);
        }
    };

    sendBtnElement.addEventListener('click', sendMessage);
    refreshBtnElement.addEventListener('click', refreshMessages);
}

attachEvents();
