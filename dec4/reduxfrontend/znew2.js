// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
// import Layout from "./components/layout/layout";

// //routes1
// import AddHolidays from "./components/LeaveTracker/Holidays/addHolidays";
// import Holidays from "./components/LeaveTracker/Holidays/holidays";
// import Sidebar from "./components/sidebar/Sidebar";
// import Navbar from "./components/navbar/Navbar";
// import ListView from "./components/LeaveTracker/Leaves/ListView/ListView";
// import ApplyLeave from "./components/LeaveTracker/Leaves/ApplyLeave/ApplyLeave";
// import LeaveApplications from "./components/LeaveTracker/Leaves/LeaveApplications/LeaveApplications";
// import LeaveRecord from "./components/LeaveTracker/Leaves/LeaveRecord/LeaveRecord";
// import CalenderView from "./components/LeaveTracker/Leaves/CalenderView/CalenderView";
// import AddressProof from "./components/AddressProof/AddressProof";

// function App() {
//   return (
//     <Router>
//       <div>
//         <div>
//           <Navbar />
//         </div>
//         <div style={{ display: "flex" }}>
//           <Sidebar />
//           <div className="bl-routes-path">
//             <Routes>
//               <Route path="/" element={<Layout />}>
//                 <Route path="/leave-tracker/holidays" element={<Holidays />} />
//                 <Route element={<PrivateProtectRoute />}>
//                   <Route
//                     path="/leave-tracker/add-holiday"
//                     element={<AddHolidays />}
//                   />
//                 </Route>
//               </Route>
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect } from "react";
// import {
//   Schedule,
//   ViewDirective,
//   ViewsDirective,
//   Day,
//   Week,
//   WorkWeek,
//   Month,
//   Agenda,
//   Inject,
//   Resize,
//   DragAndDrop,
//   ScheduleComponent,
// } from "@syncfusion/ej2-react-schedule";

// import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchHolidaysAction } from "../../../../redux/slices/leaves/holidaySlices";

// const sampleCalenderData = [
//   {
//     Id: 2,
//     Subject: "May Day",
//     Location: "",
//     StartTime: "2023-05-01T00:00:00.000+00:00",
//     EndTime: "2023-05-01T00:00:00.000+00:00",
//     CategoryColor: "#357cd2",
//   },
// ];

// const CalenderView = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchHolidaysAction());
//   }, [dispatch]);

//   const holidaysList = useSelector((state) => state?.holidays);
//   const { allHolidays } = holidaysList;
//   console.log(allHolidays);

//   const calenderData = allHolidays?.map((holiday) => {
//     return {
//       Id: 2,
//       Subject: holiday.name,
//       Location: "",
//       StartTime: holiday.fromDate,
//       EndTime: holiday.toDate,
//       CategoryColor: "#357cd2",
//     };
//   });
//   console.log(calenderData);

//   return (
//     <div>
//       <div>
//         <ScheduleComponent
//           height="600px"
//           eventSettings={{ dataSource: calenderData }}
//         >
//           <Inject services={[Day, Month]} />
//         </ScheduleComponent>
//       </div>
//     </div>
//   );
// };

// export default CalenderView;
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DefaultLayout = ({ children }) => (
  <div>
    <div style={{ height: "3.4em" }}>
      {/* Navbar component */}
      <Navbar />
    </div>
    <div style={{ display: "flex" }}>
      {/* Sidebar component */}
      <Sidebar />
      <div className="bl-routes-path">{children}</div>
    </div>
  </div>
);

const NoSidebarNoNavbarLayout = ({ children }) => (
  <div className="bl-routes-path">{children}</div>
);

const ss = () => (
  <BrowserRouter>
    <Routes>
      {/* Routes with default layout */}
      <Route
        path="/home/*"
        element={
          <DefaultLayout>
            <Routes>
              <Route path="/home/dashboard" element={<Dashboard />} />
            </Routes>
          </DefaultLayout>
        }
      />

      {/* Route without sidebar and navbar */}
      <Route
        path="/leave-tracker/overview"
        element={
          <NoSidebarNoNavbarLayout>
            <ListView />
          </NoSidebarNoNavbarLayout>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default ss;




import React, { useEffect, useState } from "react";
import Timer from "./timer";
import "./attendence.css";

const CheckInOut = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time and date every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = currentTime.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="bl_a_checkin_card">
        <div className="bl_a_checkin_card_head">
          <h1>Attendance</h1>
        </div>
        <div>
          <h2>Time: {formattedTime}</h2>
          <h3>Date: {formattedDate}</h3>
        </div>
      </div>
    </div>
  );
};

export default CheckInOut;




//  


import React, { useEffect, useState } from "react";
import Timer from "./timer";
import "./attendence.css";

import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { AiTwotoneHome } from "react-icons/ai";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { attendencePunchInAction } from "../../redux/slices/attendence/attendenceSlices";
import { fetchDetailsProfileAction } from "../../redux/slices/profileSlice/profileSlice";

// form schema

const formSchema = Yup.object({
  workFrom: Yup.string().required("Work From is Required"),
});

const CheckInOut = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchDetailsProfileAction(userProfile?.userAuth?._id));
  }, []);

  const profile = useSelector((state) => state.profile);
  const { profileData } = profile;

  // console.log(userProfile);

  const formik = useFormik({
    initialValues: {
      workFrom: "Work from Home",
    },
    onSubmit: (values) => {
      // console
    },
    validationSchema: formSchema,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <div className="bl_a_checkin_card">
        <div className="bl_a_checkin_card_head">
          <h1>Attendence</h1>
        </div>
        <div className="bl_a_checkin_card_wf">
          <p className="bl_a_checkin_card_wf_text">Work Mode </p>

          <div className="bl_a_checkin_card_wf_inputs">
            <input
              type="radio"
              value="Work from Home"
              checked={formik.values.workFrom === "Work from Office"}
              onChange={() =>
                formik.setFieldValue("workFrom", "Work from Office")
              }
              name="workFrom"
              id="officeRadio"
            />
            <label htmlFor="officeRadio">
              <HiOutlineBuildingOffice2 />
              Office
            </label>
            <input
              type="radio"
              value="Work from Office"
              checked={formik.values.workFrom === "Work from Home"}
              onChange={() =>
                formik.setFieldValue("workFrom", "Work from Home")
              }
              id="homeRadio"
              name="workFrom"
            />

            <label htmlFor="homeRadio">
              <AiTwotoneHome />
              Home
            </label>
          </div>
        </div>
        <div className="bl_a_checkin_card_body">
          <h1>{formattedTime}</h1>
          <h2>{formattedDate}</h2>

          <button
            className="button"
            onClick={() => {
              dispatch(
                attendencePunchInAction({
                  workFrom: formik.values.workFrom,
                  date: currentTime,
                  punchIn: formattedTime,
                })
              );
            }}
          >
            Punch In
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckInOut;






<BrowserRouter>
<Routes>
  {/* Routes with default layout */}
  <Route
    path="/home/dashboard"
    element={
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    }
  /> 

  

  <Route
    path="/home/feed"
    element={
      <DefaultLayout>
        <ApplyLeave />{" "}
      </DefaultLayout>
    }
  />

  {/* Route without sidebar and navbar */}
  <Route
    path="/documents/adress-proof"
    element={
      <NoSidebarNoNavbarLayout>
        <ListView />
      </NoSidebarNoNavbarLayout>
    }
  />
</Routes>
</BrowserRouter>