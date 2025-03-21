import { signIn, signOut } from "../auth";

export const SignIn = ({ ...props }) => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <button type="submit" className="bg-blue-600 py-2 px-3 rounded cursor-pointer hover:bg-blue-300" {...props}>
        Sign in
      </button>
    </form>
  );
};

export const SignOut = ({ ...props }) => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" className="p-0 text-xs hover:underline cursor-pointer" {...props}>
        Sign out
      </button>
    </form>
  );
};
