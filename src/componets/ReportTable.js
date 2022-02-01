import app from '../firebase'
import React, {useState, useEffect} from 'react';
import {Button, Modal} from "@themesberg/react-bootstrap";

import PropTypes from "prop-types";

export default function ReportTable (props) {

  const [commentsDetail, setCommentsDetails] = useState([]);
  const [postDetail, setPostDetail] = useState([])
  const [textShow, setTextShow] = useState("show Post")
  
  const [im, setI] = useState("")
  const listHeader = ["Violation","Post","Action"]
  useEffect(() => {
      return app.firestore().collection("reports").onSnapshot(querySnapshot => {
          const list = [];
          querySnapshot.forEach(doc => {
             
             const {postId,timestamp,type,userId} = doc.data();
              list.push({
                postId,timestamp,type,userId,reportId:doc.id
                  });
          });
          setCommentsDetails(list)

      })
      
  },[])
        
  const handlepass = (reportID) => {
    app.firestore().collection("reports").doc(reportID).delete()
  }
      const selectUserPost = async(userId,postId) =>{
          try{
            app.firestore().collection("cases").doc(userId).collection("cases").get().then((querySnapShot => {
                const list = [];
                querySnapShot.docs.forEach(doc => {
                    const {
                        caseDescription, 
                        caseId, 
                        caseTitle,
                        images } = doc.data();
                    if(postId === caseId)
                    list.push({
                      caseDescription,
                       caseId, 
                       caseTitle,
                       img:images[0]
                    });
                  
                });
                //console.log("userPost what happen",list);
                setPostDetail(list);
                setTextShow(list[0].caseDescription)
                console.log(list[0].caseDescription)
  
  
            })
            )
            setI(true)
        
        }catch(err){console.log(err)}
         
      }
      const [showDefault, setShowDefault] = useState(false);
      const handleClose = () =>{ 
          
          setShowDefault(false)
        };


      const handleDelete = (postID,userID) => {
        console.log("postId => ",postID,"userId => ", userID)
        app.firestore().collection("cases").doc(userID).collection("cases").doc(postID).delete()
      }

    return(
        <div
        className={
          "relative flex  flex-col min-w-0 break-words w-full mt-5 shadow-lg m-6   rounded  " +
          (props.color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0 " >
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4  flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (props.color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                List Of Reports
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full ">
          {/* Projects table */}
          <table className="items-center md:w-auto bg-transparent border-collapse ta">
            <thead>
              <tr>
                {listHeader.map((data) =>(
                  <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (props.color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  {data}
                </th>
                ))}
                
              </tr>
            </thead>
            <tbody>
              {commentsDetail && commentsDetail.map(blog => {
                  
                return(
                  <tr>
                  <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(props.color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    {blog.type}
                  </span>
                </th>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                <>  
                    <Button variant="info" className="my-3 w-100" onClick={() =>{
                         selectUserPost(blog.userId , blog.postId)
                         setShowDefault(true)
                         }} >Show Post</Button>

                    <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}> 
                        <Modal.Header>
                        <Modal.Title className="h6">Post </Modal.Title>
                        <Button variant="close" aria-label="Close" onClick={handleClose} />
                        </Modal.Header>
                        <Modal.Body>
                          {/* {
                          postDetail[0].img &&
                         postDetail.map((detail)=>{<img src={detail.img} 
                            className='img-thembnail' 
                            alt="...."
                            style={{maxWidth: '200px'}}/>}) } */}
                         <p>{textShow}</p>
                        </Modal.Body>
                        <Modal.Footer>
                        
                        </Modal.Footer>
                    </Modal>
                </>
                </td>
                <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                    <Button variant="dadnger" onClick={() => {handleDelete(blog.postId,blog.userId)}} > Delete </Button>__
                    <Button variant="ddd" onClick={() => { handlepass(blog.reportId)}} > pass </Button>

                </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
}

ReportTable.defaultProps = {
    color: "light",
  };
  
  ReportTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
  };