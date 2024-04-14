import Hero from "./components/Hero";
import PrimaryNav from "./components/PrimaryNav";
import SkillsCard from "./components/SkillsCard";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaAngular, FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-green-950 min-h-screen select-none">
      <div className="flex flex-col gap-4 lg:gap-8 lg:p-8 max-w-6xl mx-auto p-4">
        <div className="bg-gradient-to-b border border-green-800 from-green-900 lg:p-8 p-4 rounded-xl text-green-50 to-green-800">
          <PrimaryNav />
          <Hero />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 w-full">
          <div className="bg-gradient-to-b border border-green-700 from-green-800 lg:bg-gradient-to-r lg:w-1/2 rounded-xl to-green-700 text-green-50">
            <SkillsCard
              badges={[
                <SiExpress />,
                <SiGraphql />,
                <SiMongodb />,
                <GrMysql />,
                <FaNodeJs />,
              ]}
              fromColor="green-800"
              heading="Back-end Development"
              toColor="green-700"
            >
              As a back-end specialist, I design and build the digital backbone
              of web applications, focusing on databases, server logic, and
              system integration. With a knack for optimization and
              problem-solving, I excel in crafting efficient, scalable solutions
              that ensure seamless user experiences and drive innovation.
            </SkillsCard>
          </div>
          <div className="bg-gradient-to-b border border-green-600 from-green-700 lg:bg-gradient-to-r lg:w-1/2 rounded-xl to-green-600 text-green-50">
            <SkillsCard
              badges={[
                <FaAngular />,
                <FaCss3 />,
                <FaHtml5 />,
                <SiNextdotjs />,
                <FaReact />,
                <SiTailwindcss />,
                <SiTypescript />,
              ]}
              fromColor="green-700"
              heading="Front-end Development"
              toColor="green-600"
            >
              Specializing in front-end development, I focus on creating
              captivating user interfaces that prioritize seamless experiences
              and user engagement. My work emphasizes creative design and
              technical precision to ensure optimal performance across various
              platforms and devices.
            </SkillsCard>
          </div>
        </div>
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
