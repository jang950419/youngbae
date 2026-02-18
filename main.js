const numbersContainer = document.getElementById('numbers');
const bonusContainer = document.getElementById('bonus-number');
const generateBtn = document.getElementById('generate-btn');

function getColorClass(num) {
    if (num <= 10) return 'num-yellow';
    if (num <= 20) return 'num-blue';
    if (num <= 30) return 'num-red';
    if (num <= 40) return 'num-gray';
    return 'num-green';
}

function createNumberElement(num) {
    const div = document.createElement('div');
    div.className = `number ${getColorClass(num)}`;
    div.innerText = num;
    return div;
}

function generateLotto() {
    // 6개 번호 생성 (1~45)
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    // 오름차순 정렬
    numbers.sort((a, b) => a - b);

    // 보너스 번호 생성 (앞의 6개와 겹치지 않게)
    let bonus;
    while (true) {
        bonus = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(bonus)) {
            break;
        }
    }

    // UI 업데이트
    numbersContainer.innerHTML = '';
    numbers.forEach(num => {
        numbersContainer.appendChild(createNumberElement(num));
    });

    bonusContainer.innerHTML = '';
    bonusContainer.appendChild(createNumberElement(bonus));
}

generateBtn.addEventListener('click', generateLotto);

// 초기 실행
generateLotto();
