import styles from "./newTutorialForm.module.css";

const NewTutorialForm = ({ handleChange, handleSubmit, tutorial }) => {
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputset}>
        <label htmlFor="title">Title</label>
        <input
          className={styles.input}
          type="text"
          id="title"
          name="title"
          placeholder="Enter your title"
          value={tutorial.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputset}>
        <label htmlFor="description">Description</label>
        <input
          className={styles.input}
          type="text"
          id="description"
          name="description"
          placeholder="Enter your description"
          value={tutorial.description}
          onChange={handleChange}
          required
        />
      </div>
      <button className={styles.btnsubmit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewTutorialForm;
