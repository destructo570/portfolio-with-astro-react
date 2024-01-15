import ReactCard from "../ReactCard/ReactCard.jsx";

const ProjectCard = (props) => {
  const { title, sub_title, url, id } = props;
  return (
    <ReactCard is_hover={true} classes="min-h-[100px]" url={url} id={id}>
      <div className="flex card-content">
        <div className="px-4 py-2">
          <h4 className="line-clamp-1 text-lg tracking-wide">{title}</h4>
          <p className="text-sm line-clamp-2 tracking-wider opacity-50">{sub_title}</p>
        </div>
      </div>
    </ReactCard>
  );
};

export default ProjectCard;
