import { useRef } from "react";
import clsx from "clsx";
import "./styles.css";

const ReactCard = (props) => {
  const { children, is_hover, is_circle, classes, url } = props;

  const ref = useRef(null);

  const class_name = clsx([
    "card p-4",
    { "cursor-pointer": is_hover },
    `${is_circle ? "rounded-full" : "rounded-md"}`,
    classes,
  ]);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (e && card) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const openUrl = ()=>{
    if(url){
      window.open(url, "_blank")
    }
  }
  return (
    <div className={class_name} ref={ref} onMouseMove={handleMouseMove} onClick={openUrl}>
      <div className="card-border"></div>
      {children}
    </div>
  );
};

export default ReactCard;
