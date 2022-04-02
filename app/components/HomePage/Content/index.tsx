import { Posts } from "./Posts";
import { Projects } from "./Projects";

export const Content = () => {
  return (
    <div className="relative w-screen min-h-screen">
      <div className="w-full flex px-40">
        <Projects />
        <Posts />
      </div>
    </div>
  );
};
