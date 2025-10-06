import React, { useState, useEffect, useMemo } from "react";

export default function Main() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [color, setColor] = useState("#000000");
  const [priority, setPriority] = useState(1);
  const [filter, setFilter] = useState("all");

  //로컬 스토리지에서 초기 데이터 불러오기
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  //todos 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //할 일 추가 함수
  const handleAddTodo = () => {
    if (task.trim() === "") return alert("할 일을 입력하세요!");

    const newTodo = {
      id: Date.now(),
      text: task,
      color,
      priority,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
    setColor("#000000");
    setPriority(1);
  };

  //완료 상태 토글
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //삭제
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //useMemo로 필터링된 목록 계산
  const filteredTodos = useMemo(() => {
    if (filter === "completed") return todos.filter((t) => t.completed);
    if (filter === "incomplete") return todos.filter((t) => !t.completed);
    return todos;
  }, [filter, todos]);

  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">할 일 목록</h1>

      {/* 입력 영역 */}
      <div className="mb-4 space-y-2">
        <p>할 일</p>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 w-full rounded"
          placeholder="할 일을 입력하세요"
        />

        <p>색상</p>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <p>우선순위</p>
        <div>
          {[1, 2, 3].map((num) => (
            <label key={num} className="mr-2">
              <input
                type="radio"
                name="priority"
                value={num}
                checked={priority === num}
                onChange={() => setPriority(num)}
              />
              {num}
            </label>
          ))}
        </div>

        <input
          type="button"
          value="할 일 추가"
          onClick={handleAddTodo}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
        />
      </div>

      {/* 필터 버튼 */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("incomplete")}
          className="px-3 py-1 border rounded"
        >
          미 완료 할일 보기
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="px-3 py-1 border rounded"
        >
          완료 할일 보기
        </button>
        <button
          onClick={() => setFilter("all")}
          className="px-3 py-1 border rounded"
        >
          초기화
        </button>
      </div>

      {/* 할 일 목록 */}
      {filteredTodos.length === 0 ? (
        <p className="text-gray-500">할 일이 없습니다.</p>
      ) : (
        filteredTodos.map((todo) => (
          <div
            key={todo.id}
            style={{ border: `3px solid ${todo.color}` }}
            className="p-3 mb-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <p
                className={`font-semibold ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text} (우선순위 {todo.priority})
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className="px-2 py-1 bg-green-400 text-white rounded"
              >
                완료
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-2 py-1 bg-red-400 text-white rounded"
              >
                삭제
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
