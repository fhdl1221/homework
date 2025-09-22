const HIGH_PRIORITY = 0;
const MEDIUM_PRIORITY = 1;
const LOW_PRIORITY = 2;
const IS_COMPLETED = true;
const IS_NOT_COMPLETED = false;

const originTodos = [
  {
    id: 1,
    text: "할 일 1",
    completed: IS_COMPLETED,
    priority: HIGH_PRIORITY,
  },
  {
    id: 2,
    text: "할 일 2",
    completed: IS_NOT_COMPLETED,
    priority: MEDIUM_PRIORITY,
  },
  {
    id: 3,
    text: "할 일 3",
    completed: IS_NOT_COMPLETED,
    priority: LOW_PRIORITY,
  },
  {
    id: 4,
    text: "할 일 4",
    completed: IS_COMPLETED,
    priority: MEDIUM_PRIORITY,
  },
  {
    id: 5,
    text: "할 일 5",
    completed: IS_NOT_COMPLETED,
    priority: HIGH_PRIORITY,
  },
];

// TODO: 높은 우선순위 할 일 필터링
// originTodos 배열에서 높은 우선순위(HIGH_PRIORITY)인 할 일만 필터링하기
let highPriorityTodos;

/* 로직 코드 작성 */
highPriorityTodos = originTodos.filter((element) => {
  if (element.priority === HIGH_PRIORITY) return element;
});

// 출력 코드
console.log(highPriorityTodos);

console.log("-----------------------------");

/* 출력 결과
[
  { id: 1, text: '할 일 1', completed: true, priority: 0 },
  { id: 5, text: '할 일 5', completed: false, priority: 0 }
]
*/

// TODO: 완료되지 않은 할 일만 필터링
// originTodos 배열에서 완료되지 않은(completed가 false인) 할 일만 필터링하기
let incompleteTodos;

/* 로직 코드 작성 */
incompleteTodos = originTodos.filter((element) => {
  if (element.completed === IS_NOT_COMPLETED) return element;
});

// 출력 코드
console.log(incompleteTodos);

console.log("-----------------------------");

/* 출력 결과
[
  { id: 2, text: '할 일 2', completed: false, priority: 1 },
  { id: 3, text: '할 일 3', completed: false, priority: 2 },
  { id: 5, text: '할 일 5', completed: false, priority: 0 }
]
*/

// TODO: 할 일 텍스트에 우선순위 표시 추가
// originTodos 배열의 각 할 일 텍스트 앞에 우선순위 표시를 추가한 새로운 배열 만들기
// 우선순위 표시: HIGH_PRIORITY → "[긴급]", MEDIUM_PRIORITY → "[보통]", LOW_PRIORITY → "[낮음]"

let todosWithPriorityLabels;

/* 로직 코드 작성 */
todosWithPriorityLabels = originTodos.map((element) => {
  let tag = "";
  if (element.priority === HIGH_PRIORITY) tag = "[긴급]";
  else if (element.priority === MEDIUM_PRIORITY) tag = "[보통]";
  else tag = "[낮음]";

  return {
    id: element.id,
    text: `text: '${tag} ${element.text}'`,
    completed: element.completed,
    priority: element.priority,
  };
});

// 출력 코드
console.log(todosWithPriorityLabels);

console.log("-----------------------------");

/* 출력 결과
[
  { id: 1, text: '[긴급] 할 일 1', completed: true, priority: 0 },
  { id: 2, text: '[보통] 할 일 2', completed: false, priority: 1 },
  { id: 3, text: '[낮음] 할 일 3', completed: false, priority: 2 },
  { id: 4, text: '[보통] 할 일 4', completed: true, priority: 1 },
  { id: 5, text: '[긴급] 할 일 5', completed: false, priority: 0 }
]
*/

// TODO: 특정 ID 할 일 찾기
// originTodos 배열에서 ID가 3인 할 일 찾기
let todoById3;

/* 로직 코드 작성 */
todoById3 = originTodos.find((element) => {
  if (element.id === 3) return element;
});

// 출력 코드
console.log("ID 3인 할 일:", todoById3);

// ID가 10인 할 일 찾기 (존재하지 않음)
let todoById10;

/* 로직 코드 작성 */
todoById10 = originTodos.find((element) => {
  if (element.id === 10) return element;
});

// 출력 코드
console.log("ID 10인 할 일:", todoById10);

console.log("-----------------------------");

/* 출력 결과
ID 3인 할 일: { id: 3, text: '할 일 3', completed: false, priority: 2 }
ID 10인 할 일: undefined
*/

// TODO: 모든 할 일이 완료되었는지 확인
// originTodos 배열의 모든 할 일이 완료되었는지(completed가 true인지) 확인하기
let allTodosCompleted;

/* 로직 코드 작성 */
allTodosCompleted = originTodos.every((element) => {
  if (element.completed === true) return true;
});

// 출력 코드
console.log("모든 할 일 완료 여부:", allTodosCompleted);

console.log("-----------------------------");

/* 출력 결과
모든 할 일 완료 여부: false
*/

// TODO: 긴급한 할 일이 있는지 확인
// originTodos 배열에서 높은 우선순위(HIGH_PRIORITY)이면서 완료되지 않은 할 일이 하나라도 있는지 확인하기
let hasUrgentTodos;

/* 로직 코드 작성 */
hasUrgentTodos = originTodos.some((element) => {
  if (element.priority === HIGH_PRIORITY && element.completed === false)
    return true;
});

// 출력 코드
console.log("긴급한 할 일 존재 여부:", hasUrgentTodos);

console.log("-----------------------------");

/* 출력 결과
긴급한 할 일 존재 여부: true
*/

// TODO: 완료된 할 일 개수 계산
// originTodos 배열에서 완료된 할 일(completed가 true인)의 개수 계산하기
let completedCount;

/* 로직 코드 작성 */
completedCount = originTodos.reduce((accValue, element) => {
  if (element.completed === true) return accValue + 1;
  return accValue; //if문의 accValue는 블록스코프때문에 if문 안에서만 존재하므로 return accValue작성해야함
}, 0);

// 출력 코드
console.log("완료된 할 일 개수:", completedCount);

console.log("-----------------------------");

/* 출력 결과
완료된 할 일 개수: 2
*/

// TODO: 복합 조건 필터링
// originTodos 배열에서 완료되지 않고 중간 우선순위(MEDIUM_PRIORITY) 이상인 할 일 필터링하기
let importantIncompleteTodos;

/* 로직 코드 작성 */
importantIncompleteTodos = originTodos.filter((element) => {
  if (element.completed === false && element.priority <= 1) return element;
});

// 출력 코드
console.log(importantIncompleteTodos);

console.log("-----------------------------");

/* 출력 결과
[
  { id: 2, text: '할 일 2', completed: false, priority: 1 },
  { id: 5, text: '할 일 5', completed: false, priority: 0 }
]
*/

// TODO: 우선순위 정렬
// originTodos 배열을 우선순위(priority) 순서대로 정렬하기
let sortedTodos;

/* 로직 코드 작성 */
sortedTodos = originTodos.sort((a, b) => {
  if (a.priority > b.priority)
    return 1;
  else if (a.priority < b.priority)
    return -1;
  else
    return 0;
})

// 출력 코드
console.log(sortedTodos);

/* 출력 결과
[
  { id: 1, text: '할 일 1', completed: true, priority: 0 },
  { id: 5, text: '할 일 5', completed: false, priority: 0 },
  { id: 2, text: '할 일 2', completed: false, priority: 1 },
  { id: 4, text: '할 일 4', completed: true, priority: 1 },
  { id: 3, text: '할 일 3', completed: false, priority: 2 }
]
*/
