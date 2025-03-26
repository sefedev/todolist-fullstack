import { getTodos } from "../action/todos";
import { auth } from "../auth";
import { SignIn, SignOut } from "../components/auth-components";
import TodoList from "../components/todo-list";

export default async function Home() {
  const session = await auth();
  
  let todos = []

  if(session){
    const userId = session.user.id
    todos = await getTodos(userId)
  }

  return (
    <div className="min-h-screen relative flex flex-col place-items-center px-4 md:px-12 lg:px-24 overflow-auto">
      <div className="flex justify-end w-full py-4">
        {session ? (
          <div className="flex items-center gap-1">
            <p className="text-xs mt-0.5 line-clamp-1">Signed in as | {session.user.name}</p>
            
            <SignOut />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
      <div className="w-full grid place-items-center flex-1">
        <div className="w-full">
          {session ? (
            <>
              {" "}
              <h1 className="mb-8 text-center font-bold text-2xl">TODO App</h1>
              
              <TodoList todos={todos}/>{" "}
            </>
          ) : (
            <h1 className="text-center text-2xl">Please Sign in to continue</h1>
          )}
        </div>
      </div>
    </div>
  );
}
