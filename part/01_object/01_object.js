// Object: 객체

// `키: 값` 쌍으로 구성된 프로퍼티를 여러개 넣을 수 있다.
// 키에는 문자형, 값에는 모든 자료형이 허용된다.

// 객체 생성자
let person = new Object();
person.name = 'john';
person.age = '30';
person.job = 'engineer';

console.log(person);
console.log('------------------------------');

// 객체 리터럴
const animal = {
  name: 'choco',
  group: 'dog',
  'like food': 'meat', // 복수의 단어는 따옴표로 묶는다.
  action: function() {
    return `${this.name} is barking.`;
  },
};

console.log(animal);
console.log(animal.action());

/**
 * 객체를 const로 선언하는 경우 객체 자체를 변경할 수는 없다.
 * 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */
animal['group'] = 'mammal';
console.log(animal.group);

animal['age'] = 2;
console.log(animal);

/**
 * ERROR - Assignment to constant variable.
 * const로 선언되어 이미 초기화가 되어 값을 변경할 수 없다.
 * 
 */
// animal = {};

console.log('------------------------------');
const keys = Object.keys(animal);
console.log(keys);

const values = Object.values(animal);
console.log(values);

console.log('------------------------------');
delete animal.age;
console.log(animal);

/**
 * 대괄호 표기법
 * 여러 단어를 조합해 프로퍼티 키를 만든 경우 대괄호 표기법을 이용해야한다.
 * animal.like food = true; (x) - 문법 에러, 점(.) 표기법은 키가 '유효한 변수 식별자'인 경우에만 사용이 가능하다.
 * 유효한 변수 식별자 - 공백이 없고, 숫자로 시작하지 않으며, $와 _를 제외한 특수문자가 없어야 한다.
 */
animal['like food'] = 'fruit';
console.log(animal['like food']);

const key1 = 'like food';
animal[key1] = 'milk';
console.log(animal['like food']);

// 점(.) 표기법으로 다음은 가능
const key2 = prompt('What information do you want to know?', 'name');
alert(animal.key2); // 프롬프트에서 name을 입력했다면 'choco'

// 점(.) 표기법으로 다음은 불가능
const key3 = 'like food';
console.log(animal.key2); // undefined

// 계산된 프로퍼티: 객체 리터럴 안의 프로퍼티 키가 대괄호로 된 경우
const fruit = prompt('Which fruit would you like to buy?', 'apple');

const market = {
  [fruit]: 500,
};

alert(market.apple); // fruit에 apple을 입력했다면 500

const brand = 'apple';
const computer = {
  [brand + 'Computer']: 'mac',
};

console.log(computer.appleComputer);

// 단축 프로퍼티 - 프로퍼티의 이름과 값이 변수의 이름과 동일
const makeUser = (name, age) => {
  // return {
  //   name: name,
  //   age: age,
  // };
  return {
    name,
    age,
  };
}

const user = makeUser("John", 30);
console.log(user.name)

// 변수명에는 예약어를 사용할 수 없는 제약사항이 있으나 객체 프로퍼티에는 없다.
const obj = {
  for: 1,
  let: 2,
  const: 3,
  return: 4,
};

console.log(obj.for, obj.let, obj.const, obj.return);

// 프로퍼티 키가 문자형이나 심볼형이 아닌 경우 문자열로 자동 형 변환이 된다.
const obj2 = {
  0: "apple",
};

console.log(obj2["0"], obj2[0]); // 동일한 프로퍼티에 접근

// 단, __proto__는 다르다. 아래 코드에서 5를 할당해도 무시된다.
// @TODO 추후 프로토타입에서 자세히 알아보고 링크
const obj3 = {
  __proto__: 5,
};

const obj4 = {};
obj4.__proto__ = 5;

console.log(obj3.__proto__, obj4.__proto__); // [Object: null prototype] {}

// 객체의 프로퍼티 존재 여부 체크
const info = {
  address: "abc",
  phone: undefined,
};

// 존재하지 않는 프로퍼티에 접근하면 에러가 발생하지 않고 undefined를 반환
console.log(info.name === undefined); // true
console.log(info.address === undefined); // false

// in 연산자로 프로퍼티 존재 여부 확인
console.log("name" in info); // false
console.log("address" in info); // true

// 아래와 같은 경우로 값이 알 수 없거나 비어 있다면 null을 사용할 것
// 프로퍼티의 존재 여부는 in 연산자가 더 적합하다.
console.log(info.phone); // undefined
console.log("phone" in info); // true

for (const key in info) {
  console.log(key); // address, phone
}

// 객체 정렬 방식
// 정수 프로퍼티는 자동으로 정렬, 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬된다.
// 정수 프로퍼티: 예로 문자열 "49"는 정수로 변환하거나 변환한 정수를 다시 문자열료 바꿔도 변형이 없다.
const codes1 = {
  "49": "독일",
  "41": "스위스",
  "44": "영국",
  "1": "미국",
};

for (const code in codes1) {
  console.log(code); // 1, 41, 44, 49
}

// 프로퍼티가 정수로 취급되지 않도록 처리해서 하면 추가한 순서 그대로 정렬
const codes2 = {
  "+49": "독일",
  "+41": "스위스",
  "+44": "영국",
  "+1": "미국",
};

for (const code in codes2) {
  // 피연산자를 숫자로 변환
  console.log(+code); // 49, 41, 44, 1
}

