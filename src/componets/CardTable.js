import app from "../firebase";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../assets/tailwind.css";
import ReportTable from "./ReportTable";
import VerifyTable from "./VerifyTable";

// components

export default function CardTable(props, { color }) {
  console.log(props);
  const listHeader = ["Name", "Verified", "PG Doc", "Verify"];
  const [commentsDetail, setCommentsDetails] = useState([]);
  useEffect(() => {
    return app
      .firestore()
      .collection("doctors")
      .onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          const {
            fullName,
            bio,
            city,
            country,
            email,
            isVerified,
            uid,
            idPicUrl,
          } = doc.data();
          list.push({
            currentID: uid,
            name: fullName,
            bio,
            city,
            country,
            email,
            isVerified,
            idPicUrl,
          });
        });
        setCommentsDetails(list);
      });
  }, []);

  const handleApprove = (currentID, flag) => {
    const doctorApprove = app.firestore().collection("doctors").doc(currentID);
    let isVerified = true;
    if (!flag) {
      isVerified = true;
    } else {
      isVerified = false;
    }
    doctorApprove
      .update({
        isVerified: isVerified,
      })
      .then(() => {
        console.log("Document updated");
      })
      .catch((error) => {
        console.error("error updating doc");
      });
  };

  return (
    <>
      {props.val === "verify" ? (
        <VerifyTable
          listHeader={listHeader}
          commentsDetail={commentsDetail}
          handleApprove={handleApprove}
        />
      ) : (
        <ReportTable listHeader={listHeader} />
      )}
    </>
  );
}
CardTable.defaultProps = {
  color: "dark",
};
CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
