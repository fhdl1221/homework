// TODO: 0부터 4까지 출력
// 0부터 4까지의 숫자를 한 줄씩 출력한다

/* 출력 결과
0
1
2
3
4
*/
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("---");

// TODO: Hello 5번 출력
// "Hello"를 5번 반복해서 출력한다

/* 출력 결과
Hello
Hello
Hello
Hello
Hello
*/
for (let i = 0; i < 5; i++) {
  console.log("Hello");
}
console.log("---");

// TODO: 3부터 7까지 출력
// 3부터 7까지의 숫자를 한 줄씩 출력한다
// 그런데 5는 출력하지 않는다

/* 출력 결과
3
4
6
7
*/
for (let i = 3; i <= 7; i++) {
  if (i === 5) continue;
  console.log(i);
}
console.log("---");

// TODO: 층수 출력하기
// 변수 building 에 5를 할당한다
// 1층부터 building층까지 "N층" 형식으로 출력한다

/* 출력 결과
1층
2층
3층
4층
5층
*/
let building = 5;
for (let i = 1; i <= building; i++) {
  console.log(`${i}층`);
}
console.log("---");

// TODO: 10부터 5까지 역순 출력
// 8부터 5까지의 숫자를 역순으로 한 줄씩 출력한다
// 그런데 3의 배수이거나 짝수는 출력하지 않는다

/* 출력 결과
7
5
*/
for (let i = 10; i >= 5; i--) {
  if (i % 3 === 0 || i % 2 === 0) continue;
  console.log(i);
}
console.log("---");

// TODO: 짝수 개수 세기
// 변수 start에 5, 변수 end에 10을 할당한다
// start부터 end까지의 숫자 중 짝수의 개수를 세어서 출력한다
// 힌트: 짝수의 수를 할당받을 변수 count를 선언하고, 짝수를 찾을 때마다 count를 1씩 증가시킨다

/* 출력 결과
3
*/
let start = 5;
let end = 10;
let count = 0;
for (let i = start; i <= end; i++) {
  if (i % 2 === 0) count++;
}
console.log(count);
console.log("---");

// TODO: 1부터 100까지 짝수 이면서 3의 배수인 숫자 출력
// 1부터 100까지의 숫자 중 짝수이고, 3의 배수인 숫자를 출력한다

/* 출력 결과
6
12
18
24
30
36
42
48
54
60
...
*/
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 && i % 3 === 0) console.log(i);
}
console.log("---");

// TODO: 1부터 100까지 짝수이거나 5의 배수인 숫자 출력
// 1부터 100까지의 숫자 중 짝수이거나 5의 배수인 숫자를 출력한다
// 그런데 10의 배수와 3의 배수는 출력 하지 않는다

/* 출력 결과
2
4
5
8
14
16
22
25
26
28
32
34
35
38
44
...
*/
for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0 || i % 3 === 0) continue;
  if (i % 2 === 0 || i % 5 === 0) console.log(i);
}
console.log("---");

// TODO: 1부터 100까지 7의 배수 중 가장 큰 숫자 출력
// 1부터 100까지의 숫자 중 7의 배수 중 가장 큰 숫자를 출력한다
// 힌트: 가장 큰 숫자를 할당받을 변수 max를 선언하고, 7의 배수를 찾을 때마다 max를 갱신한다

/* 출력 결과
98
*/
let max;
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) max = i;
}
console.log(max);
