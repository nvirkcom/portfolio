import { MdOutlineArrowOutward } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-b border border-green-800 flex flex-col from-green-900 lg:p-8 p-4 rounded-xl text-green-50 to-green-800"
      id="footer"
    >
      <div className="flex items-center justify-between">
        <h2>Contact</h2>
        <ul className="flex gap-4 sm:text-base text-xs uppercase">
          <li>
            <a
              className="flex gap-1 items-center"
              href="https://github.com/nvirkcom"
              target="_blank"
            >
              GitHub
              <MdOutlineArrowOutward />
            </a>
          </li>
          <li>
            <a
              className="flex gap-1 items-center"
              href="https://ca.linkedin.com/in/nvirkcom"
              target="_blank"
            >
              LinkedIn
              <MdOutlineArrowOutward />
            </a>
          </li>
        </ul>
      </div>
      <p className="py-16 sm:py-32 sm:text-8xl text-5xl">
        Let's work together!
      </p>
      <p className="font-thin sm:text-sm text-xs">
        &copy;{new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
}
