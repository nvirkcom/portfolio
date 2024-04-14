import { MdOutlineArrowOutward } from "react-icons/md";

export default function PrimaryNav() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="font-serif italic sm:text-3xl text-xl">Navpreet Virk</h1>
      <a
        className="flex gap-1 items-center sm:text-base text-sm uppercase"
        href=""
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("footer")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Let's talk
        <MdOutlineArrowOutward />
      </a>
    </header>
  );
}
