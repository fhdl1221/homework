/**
 * 1부터 시작해서 target까지 +1, -1, *2 연산으로 도달하는 최소 횟수를 구하는 DFS 함수
 * @param {number} target - 목표 숫자 (2~100)
 * @returns {number} 최소 연산 횟수
 */
function findMinOperations(target) {
  // target 제약 조건 검사 (2~100)
  if (target < 2 || target > 100) {
    throw new Error("Target은 2 이상 100 이하의 숫자여야 합니다.");
  }

  // 메모이제이션을 위한 Map
  const memo = new Map();

  function dfs(current, operations) {
    // 목표에 도달한 경우
    if (current === target) {
      return operations;
    }

    // 이미 계산된 값이 있고, 더 적은 연산으로 도달 가능한 경우
    if (memo.has(current) && memo.get(current) <= operations) {
      return Infinity;
    }

    // 현재 상태를 메모에 저장
    memo.set(current, operations);

    // 무한 루프 방지를 위한 경계 조건
    if (current > target * 2 || current < 0 || operations > 50) {
      return Infinity;
    }

    // 세 가지 연산 시도
    const results = [
      dfs(current + 1, operations + 1), // +1 연산
      dfs(current - 1, operations + 1), // -1 연산
      dfs(current * 2, operations + 1), // *2 연산
    ];

    // 최소값 반환
    return Math.min(...results);
  }

  // 1부터 시작
  return dfs(1, 0);
}
export default findMinOperations;
