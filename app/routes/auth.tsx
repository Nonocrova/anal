import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
export const meta = () => {
  return [
    { title: "Auth" },
    { name: "description", content: "Authentication page" },
  ];
};

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  console.log({ next });
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);
  return (
    <main className="bg-[url(/images/bg-main.svg)] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="felx flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>log in to your acc</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                sigining you in...
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    Sign out
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    Sign in
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
