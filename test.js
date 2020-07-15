const schools = [
  'Yorktown',
  'Washington',
  'Wakefield',
];

// Array.join (합치기): 콤마(,)로 각 학교를 구분한 문자열 얻기
console.log(schools.join(',')); // "Yorktown", "Washington", "Wakefield"

// Array.filter (걸러내기): 'W'로 시작하는 학교만 있는 새로운 배열 만들기
// 원소를 제거하는 경우 Array.pop, Array.slice가 아닌 순수함수인 filter를 사용할 것
console.log(schools.filter((school) => school[0] === 'W')); // ["Washington", "Wakefield"]

// Array.map (맵핑): 모든 원소에 'High School' 문자열 추가된 새로운 배열 만들기
const highSchools = (schools.map((school) => `${school} High School`));
console.log(highSchools.join('\n'));

// Array.reduce (축약): 배열에서 최대 값 찾기 (배열을 하나의 수로 변환)
const result = [21, 18, 42, 40, 64, 63, 24].reduce((max, num) => (num > max ? num : max), 0);
console.log(result); // 64
