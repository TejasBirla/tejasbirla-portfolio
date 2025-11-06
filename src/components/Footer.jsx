// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { Typewriter } from "react-simple-typewriter";

// export default function Footer() {
//   return (
//     <footer className="bg-[#f5f5f5] text-gray-700 py-6 border-t border-gray-200">
//       <div className="max-w-[1170px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
//         <p className="text-[16px]">
//           Built with ❤️ by{" "}
//           <span className="green-text font-semibold">Tejas Birla</span>
//         </p>

//         <p className="italic text-[16px] font-semibold">
//           <Typewriter
//             words={["Code. Create. Innovate."]}
//             loop={true}
//             cursor
//             cursorStyle="|"
//             typeSpeed={80}
//             deleteSpeed={40}
//             delaySpeed={1500}
//           />
//         </p>

//         <div className="flex gap-5 text-[22px]">
//           <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=tejasbirla3@gmail.com"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:scale-110 transition-transform"
//             style={{ color: "#EA4335" }} // Gmail Red
//           >
//             <MdEmail />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/tejas-birla/"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:scale-110 transition-transform"
//             style={{ color: "#0A66C2" }} // LinkedIn Blue
//           >
//             <FaLinkedin />
//           </a>

//           <a
//             href="https://github.com/TejasBirla"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:scale-110 transition-transform"
//             style={{ color: "#171515" }} // GitHub Black
//           >
//             <FaGithub />
//           </a>

//           <a
//             href="https://x.com/TejasBytes"
//             target="_blank"
//             rel="noreferrer"
//             className="hover:scale-110 transition-transform"
//             style={{ color: "#000000" }} // X Dark
//           >
//             <FaXTwitter />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-gray-700 py-6 border-t border-gray-200">
      <div className="max-w-[1170px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left - Name */}
        <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
          Built with ❤️ by{" "}
          <span className="green-text font-semibold">Tejas Birla</span>
        </p>

        {/* Center - Typewriter text */}
        <p className="italic text-[15px] sm:text-[16px] md:text-[17px] font-semibold">
          <Typewriter
            words={["Code. Create. Innovate."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        {/* Right - Social Icons */}
        <div className="flex gap-4 sm:gap-5 text-[20px] sm:text-[22px] justify-center md:justify-end">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tejasbirla3@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
            style={{ color: "#EA4335" }}
          >
            <MdEmail />
          </a>

          <a
            href="https://www.linkedin.com/in/tejas-birla/"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
            style={{ color: "#0A66C2" }}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/TejasBirla"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
            style={{ color: "#171515" }}
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/TejasBytes"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
            style={{ color: "#000000" }}
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
