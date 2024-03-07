import { useRef, useState } from "react";

import { ScreenFitText } from "./ScreenToFit";

export default function App() {
  const toggleRef = useRef(null);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);

  // when I click the toggle tag, toggle a class of open on the main tag
  // and if it is open, make the toggle tag say closed
  // and if not, make the toggle tag say open
  // toggleRef.addEventListener("click", function () {
  //   // mainTag.classList.toggle("open");
  //   // if (mainTag.classList.contains("open")) {
  //   //   toggleTag.innerHTML = `<img src="./public/assets/menu.svg"> Close`;
  //   // } else {
  //   //   toggleTag.innerHTML = `<img src="./public/assets/close.svg"> Menu`;
  //   // }
  // });

  const [navOpen, setNavOpen] = useState(false);
  const handleSidebar = () => {
    console.log(sidebarRef.current);
    sidebarRef.current.classList.toggle("open");
    contentRef.current.classList.toggle("translate");
    contentRef.current.style.width = "1500px";

    setNavOpen(!navOpen);
  };

  return (
    <div className=" relative flex overflow-x-hidden bg-[#f9ecca]">
      {/* <div className=" absolute top-0 left-0"> */}

      {/* </div> */}
      <div className=" relative transition-all" ref={sidebarRef}>
        <a
          onClick={handleSidebar}
          ref={toggleRef}
          href="#"
          className=" absolute top-2 -right-2 translate-x-[100%] z-[100]">
          <img
            src={
              navOpen ? "./public/assets/menu.svg" : "./public/assets/close.svg"
            }
          />
        </a>
        <nav className=" top-0 left-0 w-[350px]   h-[100dvh] bg-[#753a18] text-2xl transition-all flex justify-center gap-2 flex-col no-underline p-2">
          <NavLink text={"Join our cult"} />
          <NavLink text={"Buy artifacts"} />
          <NavLink text={"Initiate Someone"} />
          <NavLink text={"Use a relative"} />
        </nav>
      </div>

      <main className="transition-all" ref={contentRef}>
        <ScreenFitText />
        <section className=" relative h-full">
          <div className=" flex justify-center items-center border h-full bg-[#f9ecca]  p-10">
            <div className="slides  flex-1">
              <img src="/public/assets/01.jpeg" />
              <img src="./public/assets/01.jpeg" />
              <img src="./public/assets/07.png" />

              <img src="./public/assets/03.webp" />
              <img src="./public/assets/08.png" />
            </div>
            <div className="content flex-1">
              <h2>The Ojuju Typeface</h2>
              <p>
                Ojuju is a reverse contrast Weight axis variable font inspired
                by African Masquerades. It draws inspiration from a variety of
                African traditional dance costumes to inform the design
                decisions. <br />{" "}
                <span className=" text-[#652003]">
                  It is uniquely designed to strike fear in the hearts of your
                  enemies, so use it with pride.
                </span>
              </p>
              <a
                href="https://t.co/zw9j8mBUOW"
                target="_blank"
                className="button">
                Get it now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function NavLink({ text }) {
  return (
    <a
      href="#"
      className=" text-[#f9ecca]  py-2 px-4 rounded-md font-semibold transition-all hover:bg-[#f9ecca] hover:text-[#753a18]">
      {text}
    </a>
  );
}
