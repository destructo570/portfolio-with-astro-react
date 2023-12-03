import ReactCard from "../ReactCard/ReactCard.jsx";

const ProjectCard = (props) => {
  const { title, sub_title, url, id } = props;
  return (
    <ReactCard is_hover={true} classes="min-h-[100px]" url={url} id={id}>
      <div class="flex gap-4 card-content">
        <img src="https:/picsum.photos/48" alt="" class="p-2" />
        <div class="p-2">
          <h4>{title}</h4>
          <p className="text-xs line-clamp-2">{sub_title}</p>
        </div>
      </div>
    </ReactCard>
  );
};

export default ProjectCard;
