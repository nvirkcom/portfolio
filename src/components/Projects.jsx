import { MdOutlineArrowOutward } from "react-icons/md";

export default function Projects() {
  const projects = [];
  // const projects = [
  //   {
  //     links: {
  //       live: "https://www.project.com",
  //       sourceCode: "https://github.com/username/project",
  //     },
  //     title: "Project",
  //   },
  // ];

  return (
    <section className="bg-gradient-to-b flex flex-col from-green-100 gap-8 lg:p-8 p-4 rounded-xl sm:gap-16 to-green-50 text-green-950 w-full">
      <h2>Projects</h2>
      <ul className="flex flex-col gap-8 sm:text-lg">
        {projects.length < 1 && (
          <p className="font-thin italic">Coming soon!</p>
        )}
        {projects.map(({ links: { live, sourceCode }, title }, i) => (
          <li
            className="flex flex-col gap-2 items-start sm:flex-row sm:items-center sm:justify-between"
            key={i}
          >
            {title}
            <ul className="flex gap-4">
              <li>
                <a
                  className="flex font-light gap-1 items-center sm:text-sm text-xs uppercase"
                  href={sourceCode}
                  target="_blank"
                >
                  Source Code
                  <MdOutlineArrowOutward />
                </a>
              </li>
              <li>
                <a
                  className="flex font-light gap-1 items-center sm:text-sm text-xs uppercase"
                  href={live}
                  target="_blank"
                >
                  Live
                  <MdOutlineArrowOutward />
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
