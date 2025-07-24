import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import handImage from '../assets/1.png.jpg';
import '../styles/style.css';

function Home() {
  useEffect(() => {
    // GSAP preloader animation
    gsap.to(".progress-bar", {
      width: "100%",
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".top-circle", {
          y: "50%",
          duration: 2.5,
          ease: "power2.inOut",
        });
        gsap.to(".bottom-circle", {
          y: "-50%",
          duration: 2.5,
          ease: "power2.inOut",
          onComplete: () => {
            const intro = document.querySelector(".intro-text");
            gsap.set(intro, { opacity: 0, scale: 0.9 });
            intro.style.display = "block";
            gsap.to(intro, {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
              onComplete: () => {
                setTimeout(() => {
                  gsap.to(".preloader", {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                      document.querySelector(".preloader").style.display = "none";
                    },
                  });
                }, 1500);
              },
            });
          },
        });
      },
    });

    document.querySelectorAll(".cube").forEach((cube) => {
      gsap.to(cube, {
        y: -30,
        duration: Math.random() * 3 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random(),
      });
    });
  }, []);

  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="animated-bg">
          {[...Array(25)].map((_, i) => (
            <div className="cube" key={i}></div>
          ))}
        </div>

        <div className="preloader-content">
          <h1 className="preloader-text">Alana</h1>
          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>
        </div>

        <div className="top-circle"></div>
        <div className="bottom-circle"></div>
        <div className="intro-text">Hi... I am Alana</div>
      </div>

      {/* Background cubes */}
      <div className="animated-bg main-bg-cubes">
        {[...Array(25)].map((_, i) => (
          <div className="cube" key={`bg-${i}`}></div>
        ))}
      </div>

      {/* Intro Content */}
     <section id="what-i-do" className="intro-section">
  <div className="card-combined">
    <div className="card-text">
      <h2 className="static-heading">What I Do</h2>
      <p>
        Hello! I'm Alana, a third-year B.Tech CSE student at Amrita Vishwa Vidyapeetham, with a strong passion for Full Stack Development and creating exceptional digital experiences.<br /><br />
        I'm deeply interested in areas such as Machine Learning, Web Applications, and Automation Scripting. Outside of academics, I love working on personal projects, contributing to open-source communities, and exploring new programming languages.<br /><br />
        I'm always eager to take on new challenges and collaborate with fellow developers to build meaningful, impactful solutions.
      </p>
    </div>

    <div className="card-image">
      <div className="profile-circle">
        <img src={handImage} alt="Alana" />
      </div>
    </div>
  </div>
</section>



    </>
  );
}

export default Home;
