import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const heroStyle = {
    minHeight: "90vh",
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCXZtGH2QT3kHsQDRAuLRPdExY_16r6lwIwh3xpKQBc8h4xjMiRBoAsEd&s=10')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="container-fluid p-0">
      {/* Hero */}

      <div
        style={heroStyle}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="col-lg-6 border border-3 border-light text-center text-light p-4">
          <h3>Build Your Resume</h3>
          <h5>Your skills, your story, your next job — all in one.</h5>

          <Link to="/steps" className="btn btn-primary mt-3">
            Make Your Resume Now
          </Link>
        </div>
      </div>

      {/* Tools */}

      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Tools</h2>

        <div className="row align-items-start gy-4">
          {/* Left Side */}

          <div className="col-lg-6">
            <div className="mb-4">
              <h2 className="fw-bold">Resume</h2>
              <p className="text-secondary">
                Create a professional resume by entering your personal,
                educational, and professional details. Showcase your skills,
                experience, and achievements in a well-structured format that
                attracts recruiters.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="fw-bold">Cover Letter</h2>
              <p className="text-secondary">
                Generate a personalized cover letter that complements your
                resume. Highlight your strengths and explain why you are the
                right candidate for your desired job role.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="fw-bold">Jobs</h2>
              <p className="text-secondary">
                Build job-ready resumes that help you stand out in today's
                competitive market. Organize your qualifications and skills in a
                way that increases your chances of getting shortlisted.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="fw-bold">Applications</h2>
              <p className="text-secondary">
                Download your resume as a PDF and use it for internships, campus
                placements, and professional job applications with confidence.
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            <img
              src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ZpbGVzL3dlYnNpdGVfY29udGVudC90cDE4OC1iMi1yZXN1bWUtMjdfMi5qcGc.jpg"
              alt="Resume Preview"
              className="img-fluid rounded shadow"
              width="80%"
            />
          </div>
        </div>
      </div>

      {/* Office Banner */}

      <div
        style={{
          // height: "400px",
          minHeight: "90vh",
          backgroundImage:
            "url('https://www.ambius.com/dam/jcr:864755f9-e59f-4999-ac30-d4c1a0c701fe/1200-image-banner-stock-white-color-theme-modern-style-office-with-1460755337.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Testimony */}

      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Testimony</h2>

        <div className="row align-items-start">
          {/* Left Side */}

          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">
              Trusted By Professionals World Wide
            </h2>

            <p className="text-secondary">
              Our Resume Builder is designed to help job seekers create
              professional, well-structured resumes with ease. Whether you are a
              student, a fresher, or an experienced professional, our platform
              provides an intuitive way to organize your personal information,
              education, skills, and work experience into a polished resume that
              leaves a lasting impression on recruiters.
            </p>

            <p className="text-secondary">
              With professionally designed templates, live resume previews, and
              one-click PDF downloads, creating a job-ready resume becomes quick
              and hassle-free. You can edit your details anytime and instantly
              see how your resume will appear before downloading or sharing it
              with potential employers.
            </p>

            <p className="text-secondary">
              Trusted by aspiring professionals and career enthusiasts, our
              Resume Builder simplifies the resume creation process while
              maintaining a clean and modern design. Start building your resume
              today and take the first step toward securing internships, campus
              placements, or your dream job with confidence.
            </p>
          </div>

          {/* Right Side */}

          <div className="col-lg-6 text-center">
            <img
              src="	https://www.nicepng.com/png/full/509-5093378_office-staff-png-people-business.png"
              alt="Professionals"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
