import React from "react";
import Layout from "../components/LayOut";
import commonStyles from "../styles/Common.module.scss";
import QRCode from "qrcode";
import { saveAs } from 'file-saver'

function CreateSupplementary() {

    const arr = ["31"];

    const generateQrCode = async(testId)=>{
        try{
            const response = await QRCode.toDataURL(testId);
            saveAs(response, 'image.jpg')
        }
        catch(err){
            console.log(err)
        }
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        arr.forEach((item)=>{
            generateQrCode(item);
        })
    }

  return (
    <Layout>
      <h1 style={{ padding: "1.6rem 0", textAlign: "center" }}>
        Create Supplementary
      </h1>
      <form className={commonStyles.fillForm} onSubmit={onSubmit}>
        <input type="number" placeholder="Number of Supplementaries" required />
        <button type="submit" className={commonStyles.formBtn}>
          <h3>Create</h3>
        </button>
      </form>
    </Layout>
  );
}

export default CreateSupplementary;
