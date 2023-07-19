import { BiEdit, BiRefresh, BiTrash } from "react-icons/bi";
import styles from "./tutorial.module.css";

const TutorialList = ({data, requestData, deleteData, handleEdit}) => {
  return (
    <div className={styles.container}>
      <BiRefresh className={styles.refresh} onClick={requestData}/>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tablerow} >
            <th>#Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody >
          {data?.map((item) => {
            return (
              <tr className={styles.tablerow} key={item.id}>
                <th>{item.id}</th>
                <th>{item.title}</th>
                <th>{item.description}</th>
                <th>
                    <BiEdit className={styles.iconedit} onClick={handleEdit}/>
                    <BiTrash className={styles.icontrash} onClick={deleteData}/>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
