{/* <BrowserRouter>
  <div>
    <Navbar />
  </div>

  <div style={{ display: "flex" }}>
    <Sidebar />
    <div className="bl-routes-path">
      <Routes>
        {/* <Route path="/leave-tracker/list-view" element={<ListView />} /> */}
        {/* <Route
                path="/leave-tracker/calender-view"
                element={<CalenderView />}
              /> */}
        {/* <Route
                path="/leave-tracker/apply-leave"
                element={<ApplyLeave />}
              /> */}
        {/* <Route
                path="/leave-tracker/leave-applications"
                element={<LeaveApplications />}
              /> */}
        {/* <Route
                path="/leave-tracker/leave-applications/:id"
                element={<LeaveRecord />}
              /> */}
        {/* <Route path="/leave-tracker/holidays" element={<Holidays />} /> */}
        {/* <PrivateProtectRoute
                path="/leave-tracker/add-holiday"
                element={<AddHolidays />}
              /> */}
        <Route element={<PrivateProtectRoute />}>
          <Route path="/leave-tracker/add-holiday" element={<AddHolidays />} />
        </Route>
        {/* <PrivateProtectRoute
                path="/leave-tracker/add-holiday"
                element={<AddHolidays />}
              /> */}
        {/* <Route
                path="/hr-letters/adress-proof"
                element={<AddressProof />}
              /> */}
      </Routes>
    </div>
  </div>
</BrowserRouter>;

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
// import ListView from "./components/LeaveTracker/Leaves/ListView/ListView";
import "./App.css";
// import ApplyLeave from "./components/LeaveTracker/Leaves/ApplyLeave/ApplyLeave";
import Holidays from "./components/LeaveTracker/Holidays/holidays";
import AddHolidays from "./components/LeaveTracker/Holidays/addHolidays";
// import LeaveApplications from "./components/LeaveTracker/Leaves/LeaveApplications/LeaveApplications";
// import LeaveRecord from "./components/LeaveTracker/Leaves/LeaveRecord/LeaveRecord";
// import CalenderView from "./components/LeaveTracker/Leaves/CalenderView/CalenderView";
// import AddressProof from "./components/AddressProof/AddressProof";

//imports 2
// import LoginPage from "./components/LoginPage/LoginPage";
// import Profile from "./components/Profile/Profile";
import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
import Layout from "./components/layout/layout";
// import UpdateProfile from "./components/Profile/UpdateProfile";
// import ViewDetails from "./components/Profile/ViewDetails";
// // import Navbar from "./components/Navigation/Admin/Navbar";
// import Team from "./components/Team/Team";
// import Asset from "./components/Asset/Asset";
// import AddAsset from "./components/Asset/AddAsset";
// import UpdateAsset from "./components/Asset/UpdateAsset";
// import DeleteAsset from "./components/Asset/DeleteAsset";
// import ViewAsset from "./components/Asset/ViewAsset";
// import Dummy from "./Dummy/Dummy";
// import Benefit from "./components/Benefit/Benefit";
// import AddBenefit from "./components/Benefit/AddBenefit";
// import DeleteBenefit from "./components/Benefit/DeleteAsset";
// import ViewBenefit from "./components/Benefit/ViewBenefit";
// import UpdateBenefit from "./components/Benefit/UpdateBenefit";
// import ExitDetails from "./components/ExitDetails/ExitDetails";
// import AddExitDetails from "./components/ExitDetails/AddExitDetails";
// import DeleteExitDetails from "./components/ExitDetails/DeleteExitDetails";
// import UpdateExitDetails from "./components/ExitDetails/UpdateExitDetails";
// import ViewExitDetails from "./components/ExitDetails/ViewExitDetails";
// import Designation from "./components/Designation/Designation";
// import AddDesignation from "./components/Designation/AddDesignation";
// import UpdateDesignation from "./components/Designation/UpdateDesignation";
// import DeleteDesignation from "./components/Designation/DeleteDesignation";
// import ViewDesignation from "./components/Designation/ViewDesignation";
// import Department from "./components/Department/Department";
// import AddDepartment from "./components/Department/AddDepartment";
// import DeleteDepartment from "./components/Department/DeleteDepartment";
// import ViewDepartment from "./components/Department/ViewDepartment";
// import UpdateDepartment from "./components/Department/UpdateDepartment";
// import OrgAddProfile from "./components/Organization/OrgProfile/OrgAddProfile";
// import OrgUpdateProfile from "./components/Organization/OrgProfile/OrgUpdateProfile";
// import OrgViewDetails from "./components/Organization/OrgProfile/OrgViewDetails";
// import OrgProfile from "./components/Organization/OrgProfile/OrgProfile";
// import OrgDeleteProfile from "./components/Organization/OrgProfile/OrgDeleteProfile";
// import OrgExitDetails from "./components/Organization/OrgExitDetails/OrgExitDetails";
// import OrgAddExitDetails from "./components/Organization/OrgExitDetails/OrgAddExitDetails";
// import OrgDeleteExitDetails from "./components/Organization/OrgExitDetails/OrgDeleteExitDetails";
// import OrgUpdateExitDetails from "./components/Organization/OrgExitDetails/OrgUpdateExitDetails";
// import OrgViewExitDetails from "./components/Organization/OrgExitDetails/OrgViewExitDetails";
// import OrgAsset from "./components/Organization/OrgAsset/OrgAsset";
// import OrgAddAsset from "./components/Organization/OrgAsset/OrgAddAsset";
// import OrgDeleteAsset from "./components/Organization/OrgAsset/OrgDeleteAsset";
// import OrgUpdateAsset from "./components/Organization/OrgAsset/OrgUpdateAsset";
// import OrgViewAsset from "./components/Organization/OrgAsset/OrgViewAsset";
// import OrgAddBenefit from "./components/Organization/OrgBenefit/OrgAddBenefit";
// import OrgViewBenefit from "./components/Organization/OrgBenefit/OrgViewBenefit";
// import OrgDeleteBenefit from "./components/Organization/OrgBenefit/OrgDeleteBenefit";
// import OrgUpdateBenefit from "./components/Organization/OrgBenefit/OrgUpdateBenefit";
// import OrgBenefit from "./components/Organization/OrgBenefit/OrgBenefit";

// // NewHires
// // NewHires
// import NewHires from "./components/Organization/NewHires/NewHires";
// import ChartTree from "./components/Organization/ChartTree/ChartTree";
// import AllProfiles from "./components/Organization/AllProfiles/AllProfiles";

// // TasksGiven
// // TasksGiven
// import TasksGiven from "./components/TasksGiven/TasksGiven";
// import AddTasksGiven from "./components/TasksGiven/AddTasksGiven";
// import UpdateTasksGiven from "./components/TasksGiven/UpdateTasksGiven";
// import DeleteTasksGiven from "./components/TasksGiven/DeleteTasksGiven";
// import ViewTasksGiven from "./components/TasksGiven/ViewTasksGiven";
// import MyTasks from "./components/TasksGiven/MyTasks";
// import AllTasks from "./components/TasksGiven/AllTasks";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} /> */}

          {/* we want to protect these routes */}
          <Route element={<PrivateProtectRoute />}>
            <Route path="/" element={<AddHolidays />} />
          </Route>

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route> */}

          {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route> */}

          {/* <Route
            element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
          >
            <Route path="lounge" element={<Lounge />} />
          </Route> */}

          {/* catch all */}
          {/* <Route path="*" element={<Missing />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;

<div>
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* public routes */}
      {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} /> */}

      {/* we want to protect these routes */}
      <Route element={<PrivateProtectRoute />}>
        <Route path="/" element={<AddHolidays />} />
      </Route>

      {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route> */}

      {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route> */}

      {/* <Route
            element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}
          >
            <Route path="lounge" element={<Lounge />} />
          </Route> */}

      {/* catch all */}
      {/* <Route path="*" element={<Missing />} /> */}
    </Route>
  </Routes>
</div>; */}


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdharProofsAction } from "../../redux/slices/hr-letters/hrLetters";

const AddAddressProof = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdharProofsAction());
  }, []);

  const pdfobj = useSelector((state) => state?.hrLetters);
  const { pdfs } = pdfobj;

  const downloadSinglePDF = (pdfData, index) => {
    const pdfBlob = new Blob([pdfData.adharPdf], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    console.log(pdfData.adharPdf);

    const downloadLink = document.createElement("a");
    downloadLink.href = pdfUrl;
    downloadLink.download = `pdf_${index}.pdf`; // Set the filename for the download

    // Programmatically trigger the download
    downloadLink.click();
  };

  console.log(pdfs);

  return (
    <div>
      {pdfs?.map((pdf, index) => (
        <div key={pdf._id}>
          <p>PDF {index + 1}</p>
          <button onClick={() => downloadSinglePDF(pdf, index)}>
            Download PDF {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddAddressProof;



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAdharProofsAction } from "../../redux/slices/hr-letters/hrLetters";

// const AddAddressProof = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchAdharProofsAction());
//   }, []);

//   const pdfobj = useSelector((state) => state?.hrLetters);
//   const { pdfs } = pdfobj;

//   const downloadSinglePDF = (pdfData, index) => {
//     const pdfBlob = new Blob([pdfData.adharPdf], { type: "application/pdf" });
//     const pdfUrl = URL.createObjectURL(pdfBlob);
//     console.log(pdfData.adharPdf);

//     const downloadLink = document.createElement("a");
//     downloadLink.href = pdfUrl;
//     downloadLink.download = `pdf_${index}.pdf`; // Set the filename for the download

//     // Programmatically trigger the download
//     downloadLink.click();
//   };

//   console.log(pdfs);

//   return (
//     <div>
//       {pdfs?.map((pdf, index) => (
//         <div key={pdf._id}>
//           <p>PDF {index + 1}</p>
//           <button onClick={() => downloadSinglePDF(pdf, index)}>
//             Download PDF {index + 1}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddAddressProof;

import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addAdressProof.css";

import * as Yup from "yup";
import { addUserDocumentsAction } from "../../redux/slices/hr-letters/hrLetters";

import {
  fetchAllProfileAction,
  fetchDetailsProfileAction,
} from "../../redux/slices/profileSlice/profileSlice";

// Images
import pdfIcon from "../../Assets/documents/pdf-file.png";
import deleteIcon from "../../Assets/documents/delete.png";
import viewIcon from "../../Assets/documents/show-password.png";

//Form Schema
const formSchema = Yup.object({
  employeeId: Yup.string().required("Employee Id is Required"),
  documentName: Yup.string().required("Document Name is Required"),
  document: Yup.mixed().required("Document is Required"),
});

const AddressProof = () => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.profile);
  const { userAuth } = loginUser;

  const formik = useFormik({
    enableReinitialization: true,
    initialValues: {
      employeeId: userAuth?._id,
      documentName: "",
      document: "",
    },
    onSubmit: (values) => {
      // Handle form submission, e.g., dispatch an action with form data
      // console.log(values);
      // dispatch an action or perform your desired action here
    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    dispatch(fetchDetailsProfileAction(userAuth?._id));
    dispatch(fetchAllProfileAction());
  }, [dispatch, userAuth]);

  const userProfile = useSelector((state) => state.profile);
  const { profilesList } = userProfile;

  const handleFileChange = (event) => {
    // Set the selected file to formik values
    formik.setFieldValue("document", event.currentTarget.files[0]);
  };

  const generateAndDownloadPDF = (pdfData, fileName) => {
    // Convert the binary data to a Blob with the appropriate content type
    const blob = new Blob([new Uint8Array(pdfData)], {
      type: "application/pdf",
    });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create an anchor element for downloading
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName || "document.pdf"; // You can specify the filename here
    a.style.display = "none";

    // Append the anchor element to the document and trigger the download
    document.body.appendChild(a);
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const hrLetters2 = useSelector((state) => state.hrLetters);
  const { addUserLoading } = hrLetters2;
  console.log(userProfile);
  if (addUserLoading) console.log("Document");
  return (
    <div className="bl-apply-leave-cont">
      <div className="bl-apply-leave-form-cont">
        <form className="bl-apply-leave-form" onSubmit={formik.handleSubmit}>
          <div class="wrapper">
            <div class="title">Add Address Proof</div>
            <div class="form">
              <div class="inputfield">
                <label>Employee ID</label>
                <div class="custom_select">
                  <select
                    // onChange={formik.employeeId("employeeId")}
                    value={formik.values.employeeId}
                    onChange={(e) => {
                      formik.handleChange("employeeId")(e);
                      dispatch(fetchDetailsProfileAction(e.target.value));
                    }}
                  >
                    {/* <option value="">Select</option>
                  <option value="emp 1">Employee 1</option>
                  <option value="emp 2">Employee 2</option> */}
                    <option value={userAuth?._id}>{userAuth.email}</option>
                    {profilesList
                      ?.filter((userprof) => userprof?._id !== userAuth?._id)
                      ?.map((user) => {
                        return (
                          <option value={user._id}>
                            {user.basicInformation.firstName}{" "}
                            {user.basicInformation.lastName}
                          </option>
                        );
                      })}
                  </select>
                  <div className="bl_err-msg">
                    {formik?.touched?.employeeId && formik?.errors?.employeeId}
                  </div>
                </div>
              </div>

              <div class="inputfield">
                <label>Adress Proof</label>
                <div class="custom_select">
                  <select onChange={formik.handleChange("documentName")}>
                    <option value="">Select</option>
                    <option value="Adhar">Adhar Card</option>
                    <option value="PanCard">Pan Card</option>
                    <option value="Passport">Passport</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="bl_err-msg">
                    {formik?.touched?.employeeId && formik?.errors?.employeeId}
                  </div>
                </div>
              </div>

              <div class="inputfield">
                <label>Upload Document</label>
                <input
                  className="input"
                  type="file"
                  // value={formik.values.adharPdf}
                  onChange={handleFileChange}
                />
              </div>
              <button
                type="submit"
                className="button"
                onClick={() =>
                  dispatch(addUserDocumentsAction(formik.values)).then(() => {
                    // Once the user document is successfully added, fetch the user's details
                    dispatch(
                      fetchDetailsProfileAction(formik.values.employeeId)
                    );
                  })
                }
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {/* <div className="bl_all-address-proofs"> */}
        {/* <div className="bl-apply-leave-form-cont"> */}
        <div className="bl-apply-leave-form" style={{ marginTop: "10px" }}>
          <p>Uploaded Documets</p>
          {userProfile?.userProfloading ? (
            <span>Loading</span>
          ) : (
            <>
              {userProfile?.profileData?.userDocuments.map((doc) => {
                // console.log(doc);
                return (
                  <div className="bl_documents">
                    <div className="bl_document-r_cont">
                      <img className="bl_document_pdf_icon" src={pdfIcon} />
                      <div>
                        <span>
                          {userProfile?.profileData?.basicInformation.firstName}
                          {"_"}
                          {doc.documentName}
                        </span>
                        <span>.pdf</span>
                        <p style={{ color: "#969bad" }}>
                          16 sep 2019 at 11:05 pm
                        </p>
                      </div>
                    </div>
                    <div className="bl_document-r_cont">
                      <button className="button">Approve</button>
                      <img className="bl_document_icon" src={viewIcon} />
                      <button
                        onClick={() =>
                          generateAndDownloadPDF(
                            doc.document.data,
                            `${userProfile?.profileData?.basicInformation.firstName}_${doc.documentName}`
                          )
                        }
                        class="bl_download_button"
                      >
                        <span class="bl_download_button_lg">
                          <span class="bl_download_button_sl"></span>
                          <span class="bl_download_button_text">Download</span>
                        </span>
                      </button>
                      <img className="bl_document_icon" src={deleteIcon} />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* <div className="bl-apply-leave_footer">
        <button
          type="submit"
          onClick={() => dispatch(addUserDocumentsAction(formik.values))}
          className="button"
        >
          Submit
        </button>
        <button
          className="button"
          // onClick={() => navigate("/leave-tracker/list-view")}
        >
          Cancel
        </button>
      </div> */}
    </div>
  );
};

export default AddressProof;

// // <>
//       {/* <div className="bl_leave-applications_header">
//         <h2 className="bl_headings">Add Documents</h2>
//         <div></div>
//       </div> */}
//       {/* <div className="bl-apply-leave-cont">
//         <form className="bl-apply-leave-form" onSubmit={formik.handleSubmit}>
//           <div class="wrapper">
//             <div class="title">Add Address Proof</div>
//             <div class="form">
//               <div class="inputfield">
//                 <label>Employee ID</label>
//                 <div class="custom_select">
//                   <select onChange={formik.handleChange("employeeId")}>
//                     <option value="emp 1">Employee 1</option>
//                     <option value="emp 2">Employee 2</option>
//                   </select>
//                   <div className="bl_err-msg">
//                     {formik?.touched?.employeeId && formik?.errors?.employeeId}
//                   </div>
//                 </div>
//               </div>

//               <div class="inputfield">
//                 <label>Adhar Pdf</label>
//                 <input
//                   className="input"
//                   type="file"
//                   // value={formik.values.adharPdf}
//                   onChange={handleFileChangeAdhar}
//                 />
//               </div>

//               <div class="inputfield">
//                 <label>Pan Card Pdf</label>
//                 <input
//                   className="input"
//                   type="file"
//                   // value={formik.values.adharPdf}
//                   onChange={(e) => {
//                     formik.setFieldValue(
//                       "panCardPdf",
//                       e.currentTarget.files[0]
//                     );
//                   }}
//                 />
//               </div>
//               <div class="inputfield">
//                 <label>Passport</label>
//                 <input
//                   className="input"
//                   type="file"
//                   // value={formik.values.adharPdf}
//                   onChange={(e) => {
//                     formik.setFieldValue(
//                       "passportPdf",
//                       e.currentTarget.files[0]
//                     );
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </form>
//         <div className="bl-apply-leave_footer">
//           <button
//             type="submit"
//             onClick={
//               //   () =>
//               //     console.log(
//               //       formik.values
//               //     )

//               dispatch(addUserDocumentsAction(formik.values))
//             }
//             className="button"
//           >
//             Submit
//           </button>
//           <button
//             className="button"
//             // onClick={() => navigate("/leave-tracker/list-view")}
//           >
//             Cancel
//           </button>
//         </div>
//       </div> */}
//       {/* <div className="bl_holyday-tabel">
//         <tabel>
//           <thead>
//             <tr>
//               <th>Proof Name</th>
//               <th>Upload Pdf File</th>
//               <th>Status</th>
//               <th>View</th>
//               <th>Download</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Adhar Card</td>
//               <td>
//                 <button>Upload</button>
//               </td>
//               <td>Upload Pending</td>
//               <td>Upload to View</td>
//               <td>
//                 <button>Download</button>
//               </td>
//             </tr>
//             <tr>
//               <td>Pan Card</td>
//               <td>
//                 <button>Upload</button>
//               </td>
//               <td>Upload Pending</td>
//               <td>Upload to View</td>
//               <td>
//                 <button>Download</button>
//               </td>
//             </tr>
//             <tr>
//               <td>Passport</td>
//               <td>
//                 <button>Upload</button>
//               </td>
//               <td>Upload Pending</td>
//               <td>Upload to View</td>
//               <td>
//                 <button>Download</button>
//               </td>
//             </tr>
//           </tbody>
//         </tabel>
//       </div> */}
//     // </>



// // import React, { Component } from "react";
// // import Chart from "react-apexcharts";

// // class Donut extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       options: {},
// //       chartOptions: {
// //         colors: ["#008FFB", "#00E396"],
// //         labels: ["Work from Home", "Work from Office"],
// //       },

// //       series: [44, 55],
// //       labels: ["Work from Home", "Work from Office"],
// //     };
// //   }

// //   render() {
// //     return (
// //       <div className="donut">
// //         <Chart
// //           options={this.state.chartOptions}
// //           series={this.state.series}
// //           type="donut"
// //           width="380"
// //         />
// //       </div>
// //     );
// //   }
// // }

// // export default Donut;
// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class Donut extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "donut-chart",
//         },
//         labels: ["Work from Home", "Work from Office"],
//         colors: ["#008FFB", "#00E396"],
//         dataLabels: {
//           enabled: false,
//         },
//         plotOptions: {
//           pie: {
//             size: 150,
//             donut: {
//               size: "75%",
//               labels: {
//                 show: true,
//                 name: {
//                   show: true,
//                   offsetY: 10,
//                   fontSize: "16px",
//                 },
//                 value: {
//                   show: false,
//                 },
//                 total: {
//                   show: true,
//                   label: "Total: 500",
//                   color: "#373d3f",
//                   fontSize: "16px",
//                   offsetY: 0,
//                 },
//               },
//             },
//           },
//         },
//       },
//       series: [44, 55],
//     };
//   }

//   render() {
//     return (
//       <div className="donut">
//         <Chart
//           options={this.state.options}
//           series={this.state.series}
//           type="donut"
//           width="380"
//         />
//       </div>
//     );
//   }
// }

// export default Donut;



// import React, { Component } from "react";
// import Chart from "react-apexcharts";

// class Donut extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: "donut-chart",
//         },
//         labels: ["WFH", "WFO"],
//         colors: ["#008FFB", "#00E396"],
//         dataLabels: {
//           enabled: false,
//           show: false,
//         },
//         // plotOptions: {
//         //   pie: {
//         //     size: 150,
//         //     donut: {
//         //       size: "75%",
//         //       labels: {
//         //         show: true,
//         //         name: {
//         //           show: true,
//         //           offsetY: 8,
//         //           fontSize: "16px",
//         //         },
//         //         value: {
//         //           show: false,
//         //         },
//         //         total: {
//         //           show: true,
//         //           // showAlways: true,
//         //           label: "Total: 500",
//         //           color: "#373d3f",
//         //           fontSize: "14px",
//         //           offsetY: 0,
//         //         },
//         //       },
//         //     },
//         //   },
//         // },
//       },
//       series: [44, 55],
//     };
//   }

//   render() {
//     return (
//       <div className="donut">
//         <Chart
//           options={this.state.options}
//           series={this.state.series}
//           type="donut"
//           width="380"
//         />
//       </div>
//     );
//   }
// }

// export default Donut;



<BrowserRouter>
      <div style={{ height: "7vh" }}>
        <Navbar />
      </div>

      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="bl-routes-path">
          <Routes>
            <Route path="/home/dashboard" element={<Dashboard />} />
            <Route path="/leave-tracker/overview" element={<ListView />} />
            <Route path="/leave-tracker/calender" element={<CalenderView />} />
            <Route path="/leave-tracker/apply-leave" element={<ApplyLeave />} />
            <Route
              path="/leave-tracker/leave-applications"
              element={<Teamm />}
            />
            <Route
              path="/leave-tracker/leave-applications/:id"
              element={<LeaveRecord />}
            />
            <Route
              path="/leave-tracker/leave-applications/update/:id"
              element={<UpdateLeave />}
            />
            <Route path="/leave-tracker/holidays" element={<Holidays2 />} />
            <Route
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            />
            <Route
              path="/leave-tracker/holidays/:id"
              element={<HolidayRecord />}
            />
            <Route
              path="/leave-tracker/holidays/update/:id"
              element={<UpdateHoliday />}
            />
            {/* <PrivateProtectRoute
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            /> */}

            {/* <PrivateProtectRoute 
              path="/leave-tracker/add-holiday"
              element={<AddHolidays />}
            /> */}
            <Route
              path="/documents/adress-proof"
              element={<AddAddressProof />}
            />

            {/* <Route
              path="/documents/bonafide-letter"
              element={<UsersDocuments />}
            /> */}
            <Route
              path="/documents/bonafide-letter/:id"
              element={<DocumentRecords />}
            />

            <Route path="/attendence/checkin-out" element={<CheckInOut />} />

            {/* Routes  2 */}
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/self-service/profile"
              element={
                <PrivateProtectRoute>
                  <Profile />
                </PrivateProtectRoute>
              }
            />

            {/* <Route
              path="/self-service/profile/:id"
              element={
                <PrivateProtectRoute>
                  <Profile />
                </PrivateProtectRoute>
              }
            /> */}

            <Route
              path="/self-service/profile/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateProfile />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/profile/viewdetials/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDetails />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/team"
              element={
                <PrivateProtectRoute>
                  <Team />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/team/:id"
              element={
                <PrivateProtectRoute>
                  <Profile />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset"
              element={
                <PrivateProtectRoute>
                  <Asset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset/create"
              element={
                <PrivateProtectRoute>
                  <AddAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteAsset />
                </PrivateProtectRoute>
              }
            />
            <Route
              path="/self-service/asset/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewAsset />
                </PrivateProtectRoute>
              }
            />

            {/* Benefit */}
            <Route
              path="/self-service/benefit"
              element={
                <PrivateProtectRoute>
                  <Benefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/benefit/create"
              element={
                <PrivateProtectRoute>
                  <AddBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/benefit/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/benefit/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/benefit/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewBenefit />
                </PrivateProtectRoute>
              }
            />

            {/* ExitDetails */}

            <Route
              path="/self-service/exitdetails"
              element={
                <PrivateProtectRoute>
                  <ExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/exitdetails/create"
              element={
                <PrivateProtectRoute>
                  <AddExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/exitdetails/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/exitdetails/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/self-service/exitdetails/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewExitDetails />
                </PrivateProtectRoute>
              }
            />

            {/* Designation */}
            <Route
              path="/organization/designation"
              element={
                <PrivateProtectRoute>
                  <Designation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/designation/create"
              element={
                <PrivateProtectRoute>
                  <AddDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/designation/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/designation/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteDesignation />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/designation/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDesignation />
                </PrivateProtectRoute>
              }
            />

            {/* Department */}

            <Route
              path="/organization/department"
              element={
                <PrivateProtectRoute>
                  <Department />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/department/create"
              element={
                <PrivateProtectRoute>
                  <AddDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/department/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/department/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteDepartment />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/department/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewDepartment />
                </PrivateProtectRoute>
              }
            />

            {/* Organization */}
            {/* Organization Profile */}

            <Route
              path="/organization/profile"
              element={
                <PrivateProtectRoute>
                  <OrgProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateProfile />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/profile/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteProfile />
                </PrivateProtectRoute>
              }
            />

            {/* Organization ExitDetails */}

            <Route
              path="/organization/exitdetails"
              element={
                <PrivateProtectRoute>
                  <OrgExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewExitDetails />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/exitdetails/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteExitDetails />
                </PrivateProtectRoute>
              }
            />

            {/* Organization Asset  */}

            <Route
              path="/organization/asset"
              element={
                <PrivateProtectRoute>
                  <OrgAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/asset/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteAsset />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit"
              element={
                <PrivateProtectRoute>
                  <OrgBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/create"
              element={
                <PrivateProtectRoute>
                  <OrgAddBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/update/:id"
              element={
                <PrivateProtectRoute>
                  <OrgUpdateBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/view/:id"
              element={
                <PrivateProtectRoute>
                  <OrgViewBenefit />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/benefit/delete/:id"
              element={
                <PrivateProtectRoute>
                  <OrgDeleteBenefit />
                </PrivateProtectRoute>
              }
            />

            {/* TasksGiven  */}

            <Route
              path="/tasks/tasks-given"
              element={
                <PrivateProtectRoute>
                  <TasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/tasks-given/create"
              element={
                <PrivateProtectRoute>
                  <AddTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/tasks-given/update/:id"
              element={
                <PrivateProtectRoute>
                  <UpdateTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/tasks-given/view/:id"
              element={
                <PrivateProtectRoute>
                  <ViewTasksGiven />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/tasks-given/delete/:id"
              element={
                <PrivateProtectRoute>
                  <DeleteTasksGiven />
                </PrivateProtectRoute>
              }
            />

            {/* NewHires
          NewHires */}

            <Route
              path="/organization/new-hires"
              element={
                <PrivateProtectRoute>
                  <NewHires />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/tree-chart"
              element={
                <PrivateProtectRoute>
                  <ChartTree />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/organization/all-profiles"
              element={
                <PrivateProtectRoute>
                  <AllProfiles />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/my-tasks"
              element={
                <PrivateProtectRoute>
                  <MyTasks />
                </PrivateProtectRoute>
              }
            />

            <Route
              path="/tasks/all-tasks"
              element={
                <PrivateProtectRoute>
                  <AllTasks />
                </PrivateProtectRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>