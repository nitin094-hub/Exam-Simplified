import React, { useEffect, useState } from "react";
import LayOut from "../components/LayOut";
import styles from "../styles/CheckStudentDetails.module.scss";
import { Select } from "antd";
import student from "../assets/student.png";
import api from "../api/ProtectedApi";
const { Option } = Select;

export default function CheckStudentDetails() {
  const [studentDetailsList, setStudentDetailsList] = useState(null);

  useEffect(() => {
    let isApiSubscribed = true;
    const fetch = async () => {
      try {
        const response = await api.get("users/student/");
        setStudentDetailsList(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetch();
    return () => {
      isApiSubscribed = false;
    };
  }, []);

  return (
    <LayOut>
      <h1 style={{ padding: "1.6rem 0", textAlign: "center" }}>
        Student Details
      </h1>
      <div className={styles.studentDetailsContainer}>
        <div className={styles.studentDetailsFilter}>
          <h1>Filter</h1>
          <input type="text" placeholder="Name" required />
          <Select
            defaultValue="Select Class"
            style={{ width: "100%" }}
            // onChange={handleChange}
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
          </Select>
        </div>
        <div className={styles.studentDetailsLists} style={studentDetailsList ? studentDetailsList.length<=6 ? {height:"auto"} : {height:"33rem"} : {}}>
          {studentDetailsList &&
            studentDetailsList.map((item) => {
              return (
                <div className={styles.studentDetailsList} key={item.id}>
                  <div className={styles.studentImg}>
                    <img src={student} alt="" />
                  </div>
                  <h2>{item.name}</h2>
                </div>
              );
            })}
        </div>
      </div>
    </LayOut>
  );
}
