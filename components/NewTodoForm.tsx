import { newTodo } from '@/utils/actions';

export default function NewTodoForm() {
  return (
    <div>
      <form action={newTodo}>
        <input
          type="text"
          name="todo"
          className="border border-white text-black mr-2"
        />
        <button type="submit">create</button>
      </form>
    </div>
  );
}
