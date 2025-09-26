import { useState } from "react";
import NavBar from "~/components/NavBar";
import FileUploader from "~/components/FileUploader";

const upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!file) {
      alert("Please upload a resume file.");
      return;
    }
    const formData = form ? new FormData(form) : null;
    if (!formData) return;
    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;
    console.log(companyName, jobDescription, jobTitle, file);
  };
  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };
  return (
    <main className="bg-[url(/images/bg-main.svg)] bg-cover">
      <NavBar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Upload your resume</h1>

          {isProcessing ? (
            <>
              <h2>{statusText || "Processing your resume..."}</h2>
              <img
                src="/images/resume-scan.gif"
                alt="Loading..."
                className="w-full"
              />
            </>
          ) : (
            <h2>Drop your resume</h2>
          )}

          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  name="company-name"
                  placeholder="Company Name"
                  id="company-name"
                />
              </div>

              <div className="form-div">
                <label htmlFor="job-title">Job Title</label>
                <input
                  type="text"
                  name="job-title"
                  placeholder="Job Title"
                  id="job-title"
                />
              </div>

              <div className="form-div">
                <label htmlFor="job-description">Job Description</label>
                <textarea
                  rows={5}
                  name="job-description"
                  placeholder="Job Description"
                  id="job-description"
                />
              </div>

              <div className="form-div">
                <label htmlFor="uploader">Upload Resume</label>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>

              <button type="submit" className="primary-button">
                Upload Resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default upload;
