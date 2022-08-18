import styles from "../styles/Home.module.css";
export default function Project({ project }) {
  return (
    <div className={styles.project}>
      <div >
        <span className={styles.projectNames}>{project.Projectname}</span>
      </div>
      <div className={styles.buttons}>
        <button className={styles.eachbutton}>
          <a target="_blank" href={project.LiveLink}>
            Live
          </a>
        </button>
        <button className={styles.eachbutton}>
          <a target="_blank" href={project.GithubLink}>
            Github
          </a>
        </button>
      </div>
    </div>
  );
}
