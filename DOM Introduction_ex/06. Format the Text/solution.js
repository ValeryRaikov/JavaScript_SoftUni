// 01
function solve() {
    const inputAreaElement = document.getElementById('input');
    const outputElement = document.getElementById('output');

    const text = inputAreaElement.value;

    const result = text
        .split('.')
        .filter(sentence => !!sentence)
        .reduce((result, sentence, i) => {
            const resultIndex = Math.floor(i / 3);
            if (!result[resultIndex]) {
                result[resultIndex] = []
            }

            result[resultIndex].push(sentence.trim());

            return result;
        }, [])
        .map(sentences => `<p>${sentences.join('. ')}.</p>`)
        .join('\n');

    outputElement.innerHTML = result;
}

// 02
function solve() {
    const inputAreaElement = document.getElementById('input');
    const outputElement = document.getElementById('output');

    const text = inputAreaElement.value;

    let resultArr = [];

    const sentences = text.split('. ');
    for (let i = 0; i < sentences.length; i++) {
        const resultIndex = Math.floor(i / 3);
        if (!resultArr[resultIndex]) {
            resultArr[resultIndex] = []
        }

        resultArr[resultIndex].push(sentences[i].trim());
    }

    let resultHtml = resultArr.map(sentences => `<p>${sentences.join('. ')}.</p>`).join('\n');
    resultHtml = resultHtml.slice(0, resultHtml.length - 1);

    outputElement.innerHTML = resultHtml;
}