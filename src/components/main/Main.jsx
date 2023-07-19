import { useEffect, useState } from "react";
import NewTutorialForm from "../newTutorialForm/NewTutorialForm";
import TutorialList from "../tutorialList/TutorialList";
import styles from "./main.module.css";
import axios from "axios";
import EditWindow from "../editWindow/EditWindow";

const Main = () => {
  const [data, setData] = useState([]);
  const [showWindow, setShowWindow] = useState(false);
  const [tutorial, setTutorial] = useState({
    title: "",
    description: "",
  });
  const [editTutorial, setEditTutorial] = useState({
    id: "",
    title: "",
    description: "",
  });

  const submitData = async () => {
    try {
      const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
      await axios.post(URL, tutorial);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteData = async (e) => {
    const dataID = e.target.closest("tr").firstChild.innerText;
    try {
      const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
      await axios.delete(`${URL}${dataID}/`);
    } catch (err) {
      console.log(err);
    }
    requestData();
  };

  const requestData = async () => {
    try {
      const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
      const data = await axios(URL);
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const editData = async (e) => {
    e.preventDefault();
    try {
      const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
      await axios.patch(URL + editTutorial.id + "/", {
        title: editTutorial.title,
        description: editTutorial.description,
      });
    } catch (err) {
      console.log(err);
    }
    requestData();
    setShowWindow(false);
  };

  const handleEdit = (e) => {
    setShowWindow(true);
    setEditTutorial({
      id: e.target.closest("tr").childNodes[0].innerText,
      title: e.target.closest("tr").childNodes[1].innerText,
      description: e.target.closest("tr").childNodes[2].innerText,
    });
  };

  const handleChange = (e) => {
    setTutorial({ ...tutorial, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditTutorial({ ...editTutorial, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    submitData();
    requestData();
    setTutorial({
      title: "",
      description: "",
    });
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add Your Tutorial</h1>
      <NewTutorialForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        tutorial={tutorial}
      />
      <TutorialList
        requestData={requestData}
        data={data}
        deleteData={deleteData}
        handleEdit={handleEdit}
      />
      {showWindow && (
        <EditWindow
          handleChange={handleEditChange}
          editData={editData}
          setShowWindow={setShowWindow}
          tutorial={editTutorial}
        />
      )}
    </div>
  );
};

export default Main;
