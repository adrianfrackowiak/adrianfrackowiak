import { ProjectsList } from "~/content/projects";

export const Projects = () => {
  return (
    <div className="w-1/2 h-full">
      <ul className="h-full flex flex-col items-start space-y-20">
        {ProjectsList.map(
          ({ title, description, tags, github, live }, index) => {
            return (
              <li key={index} className="cursor-pointer">
                <h3 className="text-[2rem] max-w-[450px]">{title}</h3>
                <p className="text-[1.25rem] my-4 font-light max-w-[450px] text-gray-400">
                  {description}
                </p>
                <ul className="flex max-w-[450px] flex-wrap">
                  {tags.map((tech, index) => {
                    return (
                      <li
                        key={index}
                        className="px-4 py-2 rounded-2xl mr-4 mt-4 bg-black text-white"
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
