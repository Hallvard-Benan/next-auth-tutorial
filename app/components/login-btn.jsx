"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="flex justify-center gap-4 items-center">
          <h1 className="text-xl">Welcome back, {session.user.name}</h1>

          <img src={session.user.image} alt="" className="h-12" />
        </div>
        <h2 className="text-md bg-green-800 rounded-sm p-2">
          Signed in as {session.user.email}
        </h2>
        <br />
        <button
          onClick={() => signOut()}
          className="bg-red-700 px-8 py-4 rounded-md"
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <h2 className="text-xl bg-red-700 p-2 rounded-sm">Not signed in</h2>
      <br />
      <button
        onClick={() => signIn()}
        className="bg-green-700 px-8 py-4 rounded-md"
      >
        Sign in
      </button>
    </>
  );
}
