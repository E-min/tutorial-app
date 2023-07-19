import NewTutorialForm from "../newTutorialForm/NewTutorialForm";
import styles from "./editWindow.module.css";

const EditWindow = ({
  setShowWindow,
  handleChange,
  editData,
  tutorial,
}) => {
  return (
    <div
      className={styles.container}
      id="edit"
      onClick={(e) => {
        if(e.target.id === 'edit') {
            setShowWindow(false)
        }
      }}
    >
      <div className={styles.window}>
        <h2>Edit</h2>
        <NewTutorialForm
          handleChange={handleChange}
          handleSubmit={editData}
          tutorial={tutorial}
        />
      </div>
    </div>
  );
};

export default EditWindow;
