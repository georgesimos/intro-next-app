'use client';

import { completeTodo } from '@/utils/actions';
import { Todo } from '@prisma/client';
import { useTransition } from 'react';

export default function Todo({ todo }: { todo: Todo }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`border border-white/20 cursor-pointer p-4 my-4 ${
        todo.completed ? 'line-through text-gray-10' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      <h1>{todo.content}</h1>
    </div>
  );
}
