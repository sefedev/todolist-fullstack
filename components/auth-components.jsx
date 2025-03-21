import { signIn, signOut } from "next-auth/react";

export const SignIn = ({ ...props }) => {
  return (
    <form action={async () => {
        'use server'
        await signIn("github", {redirectTo: '/'})
        }}>
    <button type="submit" {...props}>
      Sign in
    </button>
    </form>
    // <button
    //   onClick={() => {
    //     signIn("github", { redirectTo: "/" });
    //   }}
    //   {...props}
    // >
    //   Sign in
    // </button>
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
      <button type="submit" {...props}>
        Sign out
      </button>
    </form>
    // <button
    //   onClick={() => {
    //     signOut();
    //   }}
    //   {...props}
    // >
    //   Sign Out
    // </button>
  );
};
