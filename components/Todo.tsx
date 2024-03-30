import { Todo } from '@prisma/client';

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <div>
      <h1>{todo.content}</h1>
    </div>
  );
}
