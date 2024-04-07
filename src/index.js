const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// 카운터의 변수를 정의
let count = 0;

// 앱 렌더링시 1번만 작동함
number.innerHTML = count;

const updateText = () => {
  // count를 number에 표시
  number.innerHTML = count;
}

const handleAdd = () => {
  // count에 1을 더하는 로직을 작성
  count += 1;
  // count를 업데이트하는 함수를 호출
  updateText();
}

const handleMinus = () => {
  // count에 1을 빼는 로직을 작성
  count -= 1;
  // count를 업데이트하는 함수를 호출
  updateText();
}

// add와 minus 버튼에 클릭 이벤트를 추가
add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)