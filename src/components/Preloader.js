// components/Preloader.js
import { useEffect } from 'react';
import { gsap } from 'gsap';

function Preloader() {
  useEffect(() => {
    gsap.to(".progress-bar", {
      width: "100%",
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".top-circle", { y: "50%", duration: 2.5, ease: "power2.inOut" });
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
      <div className="preloader">
        <div className="animated-bg">
          {[...Array(25)].map((_, i) => <div className="cube" key={i}></div>)}
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

      <div className="animated-bg main-bg-cubes">
        {[...Array(25)].map((_, i) => <div className="cube" key={`bg-${i}`}></div>)}
      </div>
    </>
  );
}

export default Preloader;
