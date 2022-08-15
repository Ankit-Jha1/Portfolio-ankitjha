import styles from "../../styles/Home.module.css";
const ContactForm = () => {
  return (
    <>
      <div >
        <form action="#" method="get" className={styles.form}>
          {/* <label for="first">First name:</label> */}
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Name"
            required
            className={styles.inputElement}
          />
          {/* <label for="last">Last name:</label> */}
          <input type="email" id="last" name="email" placeholder="Email id" className={styles.inputElement}/>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            className={styles.inputElement}
          />
          <textarea
            type="text"
            name="Message"
            id="Message"
            placeholder="Message"
            required
            className={styles.textarea}
          />
          <button type="submit" className={styles.formButton}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
