"use client";

export default function ProfilePage() {
  return (
    <div className="min-h-screen profile-bg py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Main Profile Card */}
        <div className="profile-card">

          {/* Cover Banner */}
          <div className="doctor-banner"></div>

          {/* Profile Section */}
          <div className="px-8 pb-10">

            <div className="flex flex-col lg:flex-row lg:items-end gap-6 -mt-20">

              {/* Avatar */}
              <div className="doctor-avatar">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500"
                  alt="Doctor"
                />
              </div>

              {/* Doctor Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-white">
                  Dr. Sarah Johnson
                </h1>

                <p className="text-cyan-400 text-xl mt-2">
                  Senior Cardiologist
                </p>

                <p className="text-slate-300 mt-2">
                  Apollo Hospital • Bangalore, India
                </p>

                <div className="flex gap-3 mt-4 flex-wrap">
                  <span className="status-badge">
                    🟢 Open to Opportunities
                  </span>

                  <span className="rating-badge">
                    ⭐ 4.9 Rating
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="profile-btn">
                  Edit Profile
                </button>

                <button className="resume-btn">
                  Upload Resume
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-grid mt-10">
              <div className="stat-card">
                <h2>15K+</h2>
                <p>Patients Treated</p>
              </div>

              <div className="stat-card">
                <h2>12+</h2>
                <p>Years Experience</p>
              </div>

              <div className="stat-card">
                <h2>8</h2>
                <p>Hospitals Served</p>
              </div>

              <div className="stat-card">
                <h2>6</h2>
                <p>Certifications</p>
              </div>
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-3 gap-6 mt-8">

              {/* Left */}
              <div className="lg:col-span-2 space-y-6">

                <div className="section-card">
                  <h2 className="section-title">
                    About Doctor
                  </h2>

                  <p className="section-text">
                    Experienced Cardiologist with over 12 years of
                    expertise in cardiovascular diagnosis,
                    treatment, interventional cardiology, and
                    preventive cardiac care.
                  </p>
                </div>

                <div className="section-card">
                  <h2 className="section-title">
                    Medical Skills
                  </h2>

                  <div className="skills-grid">
                    {[
                      "Cardiology",
                      "ECG Interpretation",
                      "Heart Failure",
                      "Patient Care",
                      "Emergency Medicine",
                      "Clinical Research",
                      "Medical Documentation",
                      "Preventive Care",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="section-card">
                  <h2 className="section-title">
                    Experience
                  </h2>

                  <div className="timeline">
                    <div>
                      <h3>Senior Cardiologist</h3>
                      <p>Apollo Hospital</p>
                      <span>2021 - Present</span>
                    </div>

                    <div>
                      <h3>Consultant Cardiologist</h3>
                      <p>Aster Healthcare</p>
                      <span>2018 - 2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-6">

                <div className="section-card">
                  <h2 className="section-title">
                    Professional Details
                  </h2>

                  <div className="info-list">
                    <p><strong>Specialization:</strong> Cardiology</p>
                    <p><strong>Qualification:</strong> MBBS, MD</p>
                    <p><strong>Experience:</strong> 12 Years</p>
                    <p><strong>Location:</strong> Bangalore</p>
                  </div>
                </div>

                <div className="section-card">
                  <h2 className="section-title">
                    Certifications
                  </h2>

                  <ul className="cert-list">
                    <li>ACLS Certified</li>
                    <li>BLS Certified</li>
                    <li>Medical Council Registration</li>
                  </ul>
                </div>

                <div className="section-card">
                  <h2 className="section-title">
                    Resume
                  </h2>

                  <div className="resume-box">
                    📄 Dr_Sarah_Resume.pdf
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}