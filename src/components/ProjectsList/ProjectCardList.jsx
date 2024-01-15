import React from "react";
import { PROJECTS } from "../../constants/projects.ts";
import ProjectCard from "./ProjectCard.jsx";
const ProjectCardList = () => {
  React.useEffect(() => {
    const list = document.getElementsByClassName("cards");
    for (let card_list of list) {
      if (card_list) {
        card_list.onmousemove = (e) => {
          for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
        };
      }
    }
  }, []);

  return (
    <>
      {PROJECTS.map((category, index) => {
        return (
          <div className="py-5" key={`category-${index}`}>
            <h4 className={"decoration-solid underline"}>
              {category.category}
            </h4>
            <div className="grid grid-cols-2 gap-3 py-5 cards max-sm:grid-cols-1">
              {category.projects.map((project) => (
                <ProjectCard
                  title={project.title}
                  sub_title={project.sub_title}
                  url={project.url}
                  id={project.id}
                  key={project.id}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCardList;
