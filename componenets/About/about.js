import styles from "../../styles/Home.module.css";

const AboutContent = () => {
  return (
    <>
      <div className={styles.shadow}>
      <div className={styles.aboutHeading}><span className={styles.webdev}>About Me</span></div>
        <div className={styles.aboutIntro}>
          <div>
            <li className={styles.para}>
              I'm a very ambitious developer looking for a role in established
              IT company with the opportunity to work with the latest
              technologies on challenging and diverse projects.
            </li>
          </div>
          <div>
            <li className={styles.para}>
              I'm quiet confident, naturally curious, and perpetually working on
              improving my skills.
            </li>
          </div>
        </div>
        <div className={styles.aboutHeading}><span className={styles.webdev}>Contact Details</span></div>
        <div className={styles.aboutIntro}>
          <li>
            Email ID : ankitjha1st@gmail.com <br />
          </li>
          <li>
            Linkedin :{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ankit-jha-9a89b01ba/"
            >
              Ankit Jha
            </a>{" "}
            <br />
          </li>
        </div>
        <div className={styles.aboutHeading}> <span className={styles.webdev}>Education</span> </div>
        <div className={styles.aboutIntro}>
          <li>
            College : Bharati Vidyapeeth's College of Engineering
            <br />
          </li>
          <li>Specialization : Information Technology</li>
          <li>
            Current CGPA : 9.1 <br />
          </li>
        </div>
        <div className={styles.aboutIntro}>
          <li>
            Higher Secondary School : S.D.R Pub. Sr. Sec. School <br />
          </li>
          <li>
            Board : CBSE <br />
          </li>
          <li>
            Score : 80% <br />
          </li>
        </div>
        <div className={styles.aboutIntro}>
          <li>
            High School : S.D.R Pub. Sr. Sec. School <br />
          </li>
          <li>
            Board : CBSE <br />
          </li>
          <li>
            CGPA : 9.8 <br />
          </li>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
