import React from "react";
import Layout from "../components/LayOut";
import commonStyles from "../styles/Common.module.scss";
import SuccessMsg from "../components/SuccessMsg";

function CreateExam() {
  return (
    <>
    <Layout>
    {/* <SuccessMsg msg="Successfully Created Exam"/> */}
      <div>
        <h1 style={{ padding: "1.6rem 0", textAlign: "center" }}>
          Create Exam
        </h1>
        <form className={commonStyles.fillForm}>
          <input type="text" placeholder="Exam Name" required />
          <input type="date" placeholder="Exam Date" required />
          <input type="text" placeholder="Subject" required />
          <button className={commonStyles.formBtn}>
            <h3>Create</h3>
          </button>
        </form>
      </div>
    </Layout>
    </>
  );
}

export default CreateExam;
