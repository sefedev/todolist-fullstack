import { createUser } from "../action/users";
import { auth, signIn, signOut } from "../auth";

export const SignIn = async ({ ...props }) => {
  const session = await auth()
  const onSignIn = async () => {
    "use server";
    await signIn("github", { redirectTo: "/" });
    if (session) await createUser(session?.user)
  };

  return (
    <form action={onSignIn}>
      <button
        type="submit"
        className="bg-blue-500 py-2 px-3 rounded cursor-pointer hover:bg-blue-300"
        {...props}
      >
        Sign in
      </button>
    </form>
  );
};

export const SignOut = ({ ...props }) => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="p-0 text-xs hover:underline cursor-pointer"
        {...props}
      >
        Sign out
      </button>
    </form>
  );
};
