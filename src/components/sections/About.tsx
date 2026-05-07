import ProfileCard from "../ProfileCard";

const headingWords = [
  "Building",
  " products",
  " that",
  " people",
  " love",
  " to",
  " use.",
];

const stats = [
  { num: "1+", label: "Years Exp." },
  { num: "12", label: "Projects Done" },
  { num: "8", label: "Happy Clients" },
];

export default function About() {
  return (
    <section id="about">
      {/* Left column */}
      <div className="about-left ml-0 md:ml-16 mx-auto">
        {/* <p className="about-label">/ About Me</p>
        <div className="about-number">01</div> */}
        <ProfileCard
          name="Ahmad Fawazi"
          title="Not a Web Developer"
          handle="neckjun__"
          status="Sleep"
          contactText="Follow Me"
          avatarUrl="Profile.png"
          miniAvatarUrl="https://p1-image.cdn-aihelp.net/FileService/UserFile/0/202509/202509160046461461491656bf6_lite.jpg"
          // avatarUrl="/assets/img/profile.png"
          // miniAvatarUrl="/assets/img/profile_square.jpg"
          // iconUrl="/assets/img/profile-square.jpg"
          showUserInfo={true}
          enableTilt={false}
          onContactClick={() =>
            window.open(
              "https://instagram.com/neckjun__?igsh=MXVucjNjY3VkNno1ZA==",
              "_blank",
            )
          }
        />
      </div>

      {/* Right column */}
      <div className="about-text">
        <h2 id="about-heading">
          {headingWords.map((word, i) => (
            <span key={i} className="word">
              {word}
            </span>
          ))}
        </h2>

        <p className="about-body" id="about-body">
          I&apos;m a developer based in Tasikmalaya, with 1 year of experience
          building web applications. I specialize in creating seamless user
          experiences with modern technologies like React, Next.js, and Node.js.
          When I&apos;m not coding, I&apos;m going hiking and outdoor
          activities.
        </p>

        <div className="about-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
