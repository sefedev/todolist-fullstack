import { auth } from "../auth";
import TodoList from "../components/todo-list";

export default async function Home() {
  const session = await auth()
  console.log("helli world")
  return (
    <div className="min-h-screen relative flex flex-col place-items-center px-4 md:px-12 lg:px-24 overflow-auto">
      <div className="flex justify-end w-full">
        <p className="">Sign In</p>
      </div>
      <div className="w-full grid place-items-center border flex-1">
        <div className="w-full">
          <h1 className="mb-8 text-center font-bold text-2xl">TODO App</h1>

          <TodoList />
        </div>
      </div>
    </div>
  );
}
