import { resumes } from "../../constants/index";
import type { Route } from "./+types/home";
import NavBar from "~/components/NavBar";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "anal" },
    { name: "description", content: "Define your future!" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);
  return (
    <main className="bg-[url(/images/bg-main.svg)] bg-cover">
      <NavBar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your app</h1>
          <h2>Define your future!</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resumeData={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
