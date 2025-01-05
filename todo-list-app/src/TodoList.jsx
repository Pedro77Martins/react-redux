import { useSelector } from "react-redux";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "./selectors";

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  color: #555;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #888;
  text-align: center;
`;

const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function TodoList() {
  const todosAreLoading = useSelector(getTodosLoading);
  const completedTodos = useSelector(getCompletedTodos);
  const incompletedTodos = useSelector(getIncompleteTodos);

  return (
    <Container>
      <Header>My Todos</Header>
      <NewTodoForm />
      {todosAreLoading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <>
          <SectionHeader>Completed:</SectionHeader>
          <TodoListWrapper>
            {completedTodos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
          </TodoListWrapper>
          <SectionHeader>Incomplete:</SectionHeader>
          <TodoListWrapper>
            {incompletedTodos.map((todo) => (
              <TodoListItem todo={todo} key={todo.id} />
            ))}
          </TodoListWrapper>
        </>
      )}
    </Container>
  );
}
