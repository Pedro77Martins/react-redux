import { getCompletedTodos } from "./selectors.js";

function testSelectors() {
  const fakeState = {
    todos: {
      value: [
        { text: 1, isCompleted: true },
        { text: 2, isCompleted: false },
        { text: 3, isCompleted: true },
      ],
    },
  };
  const completedTodos = getCompletedTodos(fakeState);
  if (completedTodos.length !== 2) {
    throw new Error("It failed");
  } else {
    console.log("the getCompletedTodos selector works!");
  }
}

testSelectors();
