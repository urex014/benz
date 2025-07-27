import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  function downloadResume( filename="resume.pdf"){
        const url = 'https://1drv.ms/b/c/bf0a134d06099cf1/Eemokjmih6lIn11yF6cIsAwBYKC5Imz7SJpscduVDie-8w?e=Cwu7P7'
        const link = document.createElement("a");
        link.href=url;
        link.setAttribute("download", filename);
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  const handleCopy = () => {
    navigator.clipboard.writeText('chukwubenedicta533@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Chukwu Benedicta</p>
              <p className="grid-subtext">
                A frontend developer and UI/UX enthusiast, I’m a student on a mission to craft interfaces that not only look great but feel intuitive. I bridge the gap between code and design to bring ideas to life on the web.
              </p>
              <button className="field-btn mt-6" onClick={downloadResume}>Download my resume</button>
            </div>
          </div>
        </div>

        {/* <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
              <button className="w-full mt-10" onClick={downloadResume}>download my resume here </button>
            </div>
          </div>
        </div> */}

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I'm a Lagos-based frontend developer and UI/UX designer, actively seeking internship opportunities — whether onsite or remote — where I can grow, contribute, and create impactful user experiences.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div> */}

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">chukwubenedicta533@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
