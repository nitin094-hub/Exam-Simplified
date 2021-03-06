import React from "react";
import LayOut from "../components/LayOut";
import styles from "../styles/DashBoard.module.scss";
import { BsFillPersonFill, BsPlusSquare } from "react-icons/bs";
import { AiOutlineQrcode } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { CgDetailsMore } from "react-icons/cg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import profileImg from "../assets/profileImg.jpg";
import { Link } from "react-router-dom";
import teacher from "../assets/teacher.png";
import invigilator from "../assets/invigilator.png";
import addPerson from "../assets/addPerson.png";
import exam from "../assets/exam.png";
import qrCode from "../assets/qrCode.png";
import examCorrection from "../assets/examCorrection.png";
import student from "../assets/student.png";
import { useSelector } from "react-redux";

function DashBoard() {
  const userDetails = useSelector((state) => state.userDetails.value);
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              2nd menu item
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );
  return (
    <LayOut>
      <div className={styles.dashBoardContainer}>
        <div className={styles.dashBoardHead}>
          <h2>
            Exam Simplified{" "}
            {localStorage.getItem("isAdmin") ? "Admin" : "Teacher"}
          </h2>
          <div className={styles.dashBoardProfile}>
            <BsFillPersonFill size={23} color="black" />
            <div className={styles.dashBoardProfileDropDown}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    {localStorage.getItem("isAdmin") ? "Admin" : "Teacher"}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className={styles.dashBoardContent}>
          <div className={styles.dashBoardProfileDetails}>
            <h2 className={styles.dashBoardProfileDetailsHead}>
              My Information
            </h2>
            <div className={styles.dashBoardProfileDetailsContentContainer}>
              <div className={styles.dashBoardProfileDetailsImg}>
                <img src={profileImg} alt="" />
              </div>
              <div className={styles.dashBoardProfileDetailsContent}>
                <div>
                  <h4>Name: </h4>
                  <h4 style={{ fontWeight: "700" }}>Joe</h4>
                </div>
                <div>
                  <h4>Gender: </h4>
                  <h4 style={{ fontWeight: "700" }}>Male</h4>
                </div>
                <div>
                  <h4>Father's Name: </h4>
                  <h4 style={{ fontWeight: "700" }}>RamLal</h4>
                </div>
                <div>
                  <h4>Mother's Name: </h4>
                  <h4 style={{ fontWeight: "700" }}>Yasmin</h4>
                </div>
                <div>
                  <h4>Date of Birth: </h4>
                  <h4 style={{ fontWeight: "700" }}>05-DEC-2001</h4>
                </div>
                <div>
                  <h4>Email: </h4>
                  <h4 style={{ fontWeight: "700" }}>helloworld@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dashBoardFeatures}>
            {JSON.parse(localStorage.getItem("isAdmin")) && (
              <>
                <Link
                  to={"/add-person/student"}
                  className={styles.addToDashBoard}
                >
                  <div>
                    <div className={styles.addToDashBoardImg}>
                      <img src={addPerson} alt="" />
                    </div>
                    <h1>Student</h1>
                  </div>
                  <div className={styles.addLogo}>
                    <p>Add Student</p>
                    <BsPlusSquare size={24} color="black" />
                  </div>
                </Link>
                <Link
                  to={"/add-person/teacher"}
                  className={styles.addToDashBoard}
                >
                  <div>
                    <div className={styles.addToDashBoardImg}>
                      <img src={teacher} alt="" />
                    </div>
                    <h1>Teacher</h1>
                  </div>
                  <div className={styles.addLogo}>
                    <p>Add Teacher</p>
                    <BsPlusSquare size={24} color="black" />
                  </div>
                </Link>
              </>
            )}
            {JSON.parse(localStorage.getItem("isTeacher")) && (
              <>
                <Link to={"/create-exam"} className={styles.addToDashBoard}>
                  <div>
                    <div className={styles.addToDashBoardImg}>
                      <img src={exam} alt="" />
                    </div>
                    <h1>Exam</h1>
                  </div>
                  <div className={styles.addLogo}>
                    <p>Create Exam</p>
                    <BsPlusSquare size={24} color="black" />
                  </div>
                </Link>
                <Link
                  to={"/create-supplementary"}
                  className={styles.addToDashBoard}
                >
                  <div>
                    <div className={styles.addToDashBoardImg}>
                      <img src={qrCode} alt="" />
                    </div>
                    <h1>Supplementry</h1>
                  </div>
                  <div className={styles.addLogo}>
                    <p>Create Supply</p>
                    <BsPlusSquare size={24} color="black" />
                  </div>
                </Link>

                <Link
                  to={"/invigilator-scan"}
                  className={styles.addToDashBoard}
                >
                  <div>
                    <div className={styles.addToDashBoardImg}>
                      <img src={invigilator} alt="" />
                    </div>
                    <h1>Invigilator</h1>
                  </div>
                  <div className={styles.addLogo}>
                    <p>Scan Supply</p>
                    <AiOutlineQrcode size={24} color="black" />
                  </div>
                </Link>
                <Link
                  to={"/teacher-correction"}
                  className={styles.addToDashBoard}
                >
                  <div>
                    <div className={styles.addToDashBoardImg}>
                      <img src={examCorrection} alt="" />
                    </div>
                    <h1>Correction</h1>
                  </div>
                  <div className={styles.addLogo}>
                    <p>Exam Correction</p>
                    <TiTickOutline size={24} color="black" />
                  </div>
                </Link>
              </>
            )}
            <Link
              to={"/check-student-details"}
              className={styles.addToDashBoard}
            >
              <div>
                <div className={styles.addToDashBoardImg}>
                  <img src={student} alt="" />
                </div>
                <h1>Students</h1>
              </div>
              <div className={styles.addLogo}>
                <p>Student Details</p>
                <CgDetailsMore size={24} color="black" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default DashBoard;
