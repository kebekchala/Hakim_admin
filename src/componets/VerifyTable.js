import React from "react";
import { Button } from "@themesberg/react-bootstrap";
import PropTypes from "prop-types";
import IdCardModal from "./IdCardModal";
import { FcApprove, FcDisapprove } from "react-icons/fc";

export default function VerifyTable(props) {
 

  return (
    <div
      className={
        "relative flex   flex-col min-w-0 break-words w-full mb-6 shadow-lg m-3 rounded " +
        (props.color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0 ">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4  flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (props.color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              List Of Doctors
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full ">
        {/* Projects table */}
        <table className="items-center md:w-auto bg-transparent border-collapse ta">
          <thead>
            <tr>
              {props.listHeader.map((data) => (
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
            {props.commentsDetail &&
              props.commentsDetail.map((blog) => {
                return (
                  <tr>
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(props.color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {blog.name}
                      </span>
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                      {blog.isVerified ? (
                        <FcApprove size={30} />
                      ) : (
                        <FcDisapprove size={30} />
                      )}
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4">
                      <IdCardModal img={blog.idPicUrl} />
                    </td>

                    <td className="border-t-0  px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap ">
                      {blog.isVerified ? (
                        <Button
                          className="w-100"
                          variant="danger"
                          onClick={() => {
                            let flag = true;
                            return props.handleApprove(blog.currentID, flag);
                          }}
                        >
                          Disapprove
                        </Button>
                      ) : (
                        <Button
                          className="w-100"
                          onClick={() => {
                            let flag = false;
                            return props.handleApprove(blog.currentID, flag);
                          }}
                        >
                          Approve
                        </Button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

VerifyTable.defaultProps = {
  color: "light",
};

VerifyTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
