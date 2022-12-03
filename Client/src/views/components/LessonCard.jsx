import { Link } from "react-router-dom";

const LessonCard = ({ slug, lesson, activeId }) => {
  const formatDuration = (minutes) => {
    return minutes + " min"
  }

  const formatClassName = () => {
    return `lesson-card ${(lesson.id == activeId) ? "active" : ""}`
  }

  return ( 
  <>
    <Link to={"/courses/" + slug + "/" + lesson.id}>
      <div className={ formatClassName() }>
        <img src="" alt="" className="lesson-thumbnail" />
        <div className="desc">
          <p className="lesson-title">{ lesson.title }</p>
          <p className="lesson-duration">{ formatDuration(lesson.length) }</p>
        </div>
      </div>
    </Link>
  </> );
}

export default LessonCard;