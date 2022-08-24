import Project from "../componenets/Project";
import ProjectList from "../componenets/ProjectList";
import styles from "../styles/Home.module.css";
const Projects = () => {
  const projects = [
    {
      id: 1,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/pokemon_website/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/Pokemon_website",
      Projectname: "Pokemon Website",
    },
    {
      id: 2,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/image_slider/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/Image_Slider",
      Projectname: "Image Slider",
    },
    {
      id: 3,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/popup_toggle/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/PopUp_Toggle",
      Projectname: "Toggle Pop Up",
    },
    {
      id: 4,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/todolist/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/ToDoList",
      Projectname: "To Do List",
    },
    {
      id: 5,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/formvalidation/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/FormValidation",
      Projectname: "Form Validation",
    },
    {
      id: 6,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/weightconverter/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/weightConverter",
      Projectname: "Weight Converter",
    },
    {
      id: 7,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/cricketapi/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/CricketApi",
      Projectname: "Cricket API",
    },
    {
      Projectname: "Copy to Clipboard",
      id: 8,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/copyclipboard/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/copyClipboard",
    },
    {
      Projectname: "Weather App",
      id: 9,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/weatherapi/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/WeatherAPI",
    },
    {
      Projectname: "Theme Change",
      id: 10,
      LiveLink: "https://fabulous-kitten-ec0621.netlify.app/themechange/",
      GithubLink:
        "https://github.com/Ankit-Jha1/Projects_Page/tree/master/ThemeChange",
    },
    {
      Projectname: "Heroku Deployed App",
      id: 11,
      LiveLink: "https://cricket-api-ankit.herokuapp.com/",
      GithubLink: "http://localhost:3000/projects#",
    },
    {
      id: 12,
      Projectname: "Twitter Clone",
      LiveLink: "https://twitter-ankit-jha.vercel.app/",
      GithubLink: "https://github.com/Ankit-Jha1/Twitter",
    },
    {
      id: 13,
      Projectname: "Ecommerce Website",
      GithubLink: "https://github.com/Ankit-Jha1/Ecommerce-website",
      LiveLink: "",
    },
  ];
  return (
    <>
      {/* <div className={styles.projectList}>
        <ProjectList />
      </div> */}

      {/* using component */}
      <div className={styles.ProjectsList}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
