// 取得網頁上的元素
const drawBtn = document.getElementById('drawBtn');
const nameListInput = document.getElementById('nameList');
const winnerDisplay = document.getElementById('winner');

// 當按鈕被點擊時執行
drawBtn.addEventListener('click', function() {
    // 1. 取得輸入的文字，並用「換行」來分割成陣列
    const text = nameListInput.value.trim();
    
    if (text === "") {
        alert("請先輸入名單喔！");
        return;
    }

    const names = text.split('\n').filter(name => name.trim() !== "");

    // 2. 隨機產生一個索引數字 (0 到 名單長度-1)
    const randomIndex = Math.floor(Math.random() * names.length);

    // 3. 顯示結果
    const winner = names[randomIndex];
    winnerDisplay.innerText = winner;

    // 加上一點動感效果
    winnerDisplay.style.color = "#ff4757";
});