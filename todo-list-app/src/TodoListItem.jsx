import { useDispatch } from "react-redux";
import { deleteTodo, markTodoAsCompleted } from "./thunks";
import styled from "styled-components";

// Styled Components
const CardContainer = styled.div`
  ${(props) => props.important && "background-color: #ffcc80;"}
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  padding: 20px;
  margin: 10px 0;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

const TodoTitle = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => (props.completed ? "#4caf50" : "#333")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  margin: 0 0 10px;
`;

const StatusText = styled.p`
  font-size: 0.9rem;
  color: #757575;
  margin: 0 0 10px;
`;

const ActionButton = styled.button`
  background-color: ${(props) =>
    props.primary
      ? "#4caf50"
      : "#f44336"}; /* Green for primary, red for delete */
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "#388e3c" : "#d32f2f"}; /* Darker shades on hover */
  }
`;

export default function TodoListItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <CardContainer important={todo.text.endsWith("!")}>
      <TodoTitle completed={todo.isCompleted}>{todo.text}</TodoTitle>
      {todo.isCompleted && <StatusText>Complete!</StatusText>}
      {todo.isCompleted ? (
        <ActionButton onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete Item
        </ActionButton>
      ) : (
        <ActionButton
          primary
          onClick={() => dispatch(markTodoAsCompleted(todo.id))}
        >
          Mark as Completed
        </ActionButton>
      )}
    </CardContainer>
  );
}
