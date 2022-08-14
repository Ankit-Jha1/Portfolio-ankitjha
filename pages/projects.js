import ProjectList from "../componenets/ProjectList";
import styles from "../styles/Home.module.css";
const Projects = () => {
  return (
    <>
      <div className={styles.projectList}>
        <ProjectList />
      </div>
    </>
  );
};

export default Projects;
