// Array.prototype.join()
// join() 메서드는 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환한다.

const alphabet = ["A", "B", "C", "D", "E"];

const a = alphabet.join();
console.log(a); // "A,B,C,D,E"

const a2 = alphabet.join("");
console.log(a2); // "ABCDE"

const a3 = alphabet.join("-");
console.log(a3); // "A-B-C-D-E"

console.log(alphabet);

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9

// 디렉토리, URL, CSS, CSS 동적 클래스 등에 활용이 가능하다