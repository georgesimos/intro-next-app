import NewTodoForm from '@/components/NewTodoForm';
import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany();
  return todos;
};

export default async function Todos() {
  const todos = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewTodoForm />
      <TodoList todos={todos} />
    </main>
  );
}
