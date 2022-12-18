import { Link } from "react-router-dom";

const LessonCard = ({ slug, lesson, activeId }) => {
  const formatDuration = (minutes) => {
    let hours = minutes / 60
    console.log(hours)
    hours = Math.floor(hours)
    console.log(hours)
    if(hours > 0){
      minutes = minutes % (hours*60)
      console.log(minutes)
    }
    return `${ (hours > 0) ? hours + "h": ""}${ minutes }min`
  }

  const formatClassName = () => {
    return `lesson-card ${(lesson.id === activeId) ? "active" : ""}`
  }

  return ( 
  <>
    <Link to={"/courses/" + slug + "/" + lesson.id}>
      <div className={ formatClassName() }>
        <img src="" alt="" className="lesson-thumbnail" />
        <div>
          <p className="lesson-title">{ lesson.title }</p>
          <p className="lesson-duration">{ formatDuration(lesson.length) }</p>
        </div>
      </div>
    </Link>
  </> );
}

export default LessonCard;