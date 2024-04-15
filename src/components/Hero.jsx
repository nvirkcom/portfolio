import { FaLocationDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 sm:gap-8 lg:py-28 py-32">
      <p className="sm:text-8xl text-5xl">
        Hi, I'm
        <br />
        <span className="font-extralight text-green-300">Navpreet Virk</span>
      </p>
      <p className="flex flex-col font-thin gap-2 sm:flex-row sm:gap-8 sm:text-2xl text-xl uppercase">
        Full-stack Developer
        <span className="flex font-light gap-1 items-center sm:gap-2 sm:text-sm text-green-50/50 text-xs uppercase">
          <FaLocationDot />
          Vancouver
        </span>
      </p>
    </section>
  );
}
