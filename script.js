// 번호 추첨 기능 함수
function generateLottoNumbers() {
  let numbers = [];
  while (numbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  numbers.sort((a, b) => a - b);

  // 추첨된 번호를 화면에 표시
  let lottoNumbersDiv = document.getElementById('lottoNumbers');
  lottoNumbersDiv.textContent = numbers.join(', ');

  // SweetAlert2 알림창 띄우기
  Swal.fire({
    icon: 'success',
    title: '학급 청소당번 뽑기 완료!',
    text: '뽑힌 번호는' + numbers.join(', ') + ' 입니다.',
    confirmButtonColor: '#3085d6',
    confirmButtonText: '확인'
  });
}

// 번호 추첨 버튼 클릭 이벤트 리스너 등록
document.getElementById('generateButton').addEventListener('click', generateLottoNumbers);
