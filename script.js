const data = {
    "Travel": [
        {"word": "Luggage", "meaning": "Hành lý"},
        {"word": "Passport", "meaning": "Hộ chiếu"},
        {"word": "Flight", "meaning": "Chuyến bay"}
    ],
    "Food": [
        {"word": "Apple", "meaning": "Quả táo"},
        {"word": "Bread", "meaning": "Bánh mì"},
        {"word": "Rice", "meaning": "Cơm"}
    ]
};

// Tạo danh sách chủ đề
const topicList = document.getElementById('topic-list');
Object.keys(data).forEach(topic => {
    const button = document.createElement('button');
    button.textContent = topic;
    button.onclick = () => startLearning(topic, data[topic]);
    topicList.appendChild(button);
});

// Hàm xử lý chế độ học
function startLearning(topic, words) {
    document.getElementById('topics').style.display = 'none';
    document.getElementById('learning').style.display = 'block';

    let index = 0;
    const wordDisplay = document.getElementById('word');
    const meaningDisplay = document.getElementById('meaning');

    function updateFlashcard() {
        wordDisplay.textContent = words[index].word;
        meaningDisplay.style.display = 'none';
        meaningDisplay.textContent = words[index].meaning;
    }

    document.getElementById('show-meaning').onclick = () => {
        meaningDisplay.style.display = 'block';
    };

    document.getElementById('next-word').onclick = () => {
        index = (index + 1) % words.length;
        updateFlashcard();
    };

    updateFlashcard();
}
