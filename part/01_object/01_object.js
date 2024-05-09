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
alert(animal.key2);

// 점(.) 표기법으로 다음은 불가능
const key3 = 'like food';
console.log(animal.key2); // undefined