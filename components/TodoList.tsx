import { Todo as ITodo } from '@prisma/client';
import Todo from './Todo';

export default function TodoList({ todos }: { todos: ITodo[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
