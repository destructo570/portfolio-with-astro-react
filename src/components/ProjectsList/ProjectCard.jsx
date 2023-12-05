import ReactCard from "../ReactCard/ReactCard.jsx";

const ProjectCard = (props) => {
  const { title, sub_title, url, id } = props;
  return (
    <ReactCard is_hover={true} classes="min-h-[100px]" url={url} id={id}>
      <div className="flex gap-4 card-content">
        <img src="/icons/layout.svg" alt="" className="p-2" />
        <div className="p-2">
          <h4 className="line-clamp-1">{title}</h4>
          <p className="text-xs line-clamp-2">{sub_title}</p>
        </div>
      </div>
    </ReactCard>
  );
};

export default ProjectCard;
