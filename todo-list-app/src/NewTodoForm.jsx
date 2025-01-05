import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createTodo } from "./thunks";

// Styled Components
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default function NewTodoForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <Input
        type="text"
        value={inputText}
        placeholder="Enter a new todo"
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button
        onClick={() => {
          dispatch(createTodo(inputText));
          setInputText("");
        }}
        disabled={!inputText.trim()}
      >
        Create Todo
      </Button>
    </FormContainer>
  );
}
