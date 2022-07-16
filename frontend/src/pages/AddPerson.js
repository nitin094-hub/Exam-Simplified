import React from "react";
import LayOut from "../components/LayOut";
import styles from "../styles/AddPerson.module.scss";
import { useParams } from "react-router-dom";

function AddPerson() {
  const { person } = useParams();
  const isStudent = person === "student" ? true : false;
  return (
    <LayOut>
      <div className={styles.addPersonContainer}>
        <h1 className={styles.addPersonHead}>Add {isStudent ? "Student" : "Teacher"}</h1>
        <form className={styles.addPersonForm}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="date" placeholder="Date Of Birth" required />
          <input type="text" placeholder="Father's Name" required />
          <input type="text" placeholder="Mother's Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Nationality" required />
          <button className={styles.addBtn}>
            <h3>Add</h3>
          </button>
        </form>
      </div>
    </LayOut>
  );
}

export default AddPerson;
