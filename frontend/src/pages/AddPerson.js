import React from "react";
import LayOut from "../components/LayOut";
import commonStyles from "../styles/Common.module.scss";
import { useParams } from "react-router-dom";

function AddPerson() {
  const { person } = useParams();
  const isStudent = person === "student" ? true : false;
  return (
    <LayOut>
      <div>
        <h1 style={{padding: "1.6rem 0",textAlign:"center"}}>
          Add {isStudent ? "Student" : "Teacher"}
        </h1>
        <form className={commonStyles.fillForm}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <select name="gender">
            <option value="none" selected>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>
          <input type="date" placeholder="Date Of Birth" required />
          <input type="text" placeholder="Father's Name" required />
          <input type="text" placeholder="Mother's Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Nationality" required />
          <button className={commonStyles.formBtn}>
            <h3>Add</h3>
          </button>
        </form>
      </div>
    </LayOut>
  );
}

export default AddPerson;
