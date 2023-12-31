import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  fetchAllManagersData,
  fetchDetailsProfileAction,
  updateUserAction,
} from "../../../redux/slices/profileSlice/profileSlice";

import { allFetchDesignationAction } from "../../../redux/slices/designation/designationSlice";
import { allFetchDepartmentAction } from "../../../redux/slices/department/departmentSlice";
import { DateModify } from "../../../utils/DateFun/DateModify";
import FormikDateYour from "../../../utils/DateFun/FormDateComp";

const UpdateProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allFetchDesignationAction());
    dispatch(allFetchDepartmentAction());
    dispatch(fetchDetailsProfileAction(id));
    dispatch(fetchAllManagersData());
  }, [dispatch, id]);

  const designationData = useSelector((state) => state?.designation);
  const { DesignationList, loading, appErr, serverErr } = designationData;
  // console.log(designationData, loading, appErr, serverErr);

  const departmentData = useSelector((state) => state?.department);
  const { DepartmentList } = departmentData;

  const profileMain = useSelector((state) => state?.profile);
  const {
    loading: profileLoading,
    appErr: profileAppErr,
    serverErr: profileServerErr,
  } = profileMain;
  // console.log(
  //   profileMain,
  //   profileLoading,
  //   profileAppErr,
  //   profileServerErr,
  //   "profileMain"
  // );

  const profileData = useSelector((state) => state?.profile?.profileData);
  const { firstName, lastName, employerId, email } =
    profileData?.basicInformation ? profileData?.basicInformation : "";

  const { dateOfBirth, gender, age, maritalStatus, aboutMe } =
    profileData?.personalDetails ? profileData?.personalDetails : "";

  const {
    Department,
    location,
    designation,
    appRole,
    employmentType,
    employeeStatus,
    sourceOfHire,
    dateOfJoining,
    currentExperience,
    totalExperience,
  } = profileData?.workInformation ? profileData?.workInformation : "";
  const { uan, pan, adhaar } = profileData?.identityInfo
    ? profileData?.identityInfo
    : "";

  const {
    workNumber,
    personalNumber,
    emailAddress,
    presentAddress,
    permanentAddress,
  } = profileData?.contactDetails ? profileData?.contactDetails : "";

  const { managerDataId } = profileData ? profileData : "";
  console.log(managerDataId, "managerDataId");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      managerDataId: managerDataId?._id,
      basicInformation: {
        firstName,
        lastName,
        employerId,
        email,
      },
      personalDetails: {
        dateOfBirth,
        gender,
        age,
        maritalStatus,
        aboutMe,
      },
      workInformation: {
        Department: Department,
        location,
        designation: designation,
        appRole,
        employmentType,
        employeeStatus,
        sourceOfHire,
        dateOfJoining,
        currentExperience,
        totalExperience,
      },
      identityInfo: { uan, pan, adhaar },
      contactDetails: {
        workNumber,
        personalNumber,
        emailAddress,
        presentAddress,
        permanentAddress,
      },
    },
    onSubmit: (values) => {
      dispatch(updateUserAction({ id, values }));
    },
  });

  // get the user details from store
  const users = useSelector((state) => state?.profile);
  const {
    userDetails,
    appErr: usersAppErr,
    serverErr: usersServerErr,
    loading: usersLoading,
    isProfileUpdated,
    managersList,
  } = users;
  // console.log(users, usersAppErr, usersServerErr, usersLoading, "users");
  const selfUserUpdated = profileMain?.userAuth?._id === profileData?._id;

  // console.log(selfUserUpdated, profileMain?.userAuth?._id, profileData?._id);
  const getProfileEditAccessData = users?.profilesList?.find(
    (item) => item?._id === users?.userAuth?._id
  );
  // console.log(
  //   isProfileUpdated,
  //   selfUserUpdated,
  //   getProfileEditAccessData?.ProfileEditAccess,
  //   "test"
  // );
  if (
    isProfileUpdated ||
    (!selfUserUpdated && profileMain?.userAuth?._id && profileData?._id) ||
    getProfileEditAccessData?.ProfileEditAccess === "Deny"
  )
    return <Navigate to={`/self-service/profile`} />;

  return (
    <div>
      <div className="cs_div_profile">
        <div className="cs_left_back"></div>
        {loading || usersLoading || profileLoading ? (
          <h1>Please Wait Loading...</h1>
        ) : (
          <form onSubmit={formik.handleSubmit} className="cs_edit_div">
            <div>
              <Link
                to={`/self-service/profile`}
                className="cs_edit_employee_head_div"
              >
                <div>
                  <svg
                    className="cs_font_icons"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                  </svg>
                </div>
                <div>
                  <h2 className="cs_edit_employee_head"> Edit Employee</h2>
                </div>
              </Link>
            </div>
            <div className="cs_edit_form_div">
              <div>
                {appErr || serverErr ? (
                  <p>
                    {serverErr} {appErr}
                  </p>
                ) : null}
                {usersAppErr || usersServerErr ? (
                  <p>
                    {usersAppErr} {usersServerErr}
                  </p>
                ) : null}{" "}
                {profileAppErr || profileServerErr ? (
                  <p>
                    {profileServerErr} {profileAppErr}
                  </p>
                ) : null}
                <h1 className="cs_edit_side_head">Basic Information</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Employee ID:</h1>
                      <input
                        value={formik.values.basicInformation.employerId}
                        onChange={formik.handleChange(
                          "basicInformation.employerId"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">First Name:</h1>
                      <input
                        value={formik.values.basicInformation.firstName}
                        onChange={formik.handleChange(
                          "basicInformation.firstName"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Email address:</h1>
                      <input
                        value={formik.values.basicInformation.email}
                        onChange={formik.handleChange("basicInformation.email")}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Last Name:</h1>
                      <input
                        value={formik.values.basicInformation.lastName}
                        onChange={formik.handleChange(
                          "basicInformation.lastName"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cs_edit_side_head">Work Information</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Department:</h1>
                      {/* <input
                      value={formik.values.workInformation.Department}
                      onChange={formik.handleChange(
                        "workInformation.Department"
                      )}
                      className="cs_edit_right_input"
                    /> */}
                      <select
                        className="cs_select_option_all"
                        value={formik.values.workInformation.Department}
                        onChange={formik.handleChange(
                          "workInformation.Department"
                        )}
                      >
                        {DepartmentList?.map((each) => (
                          <option value={`${each?.DepartmentName}`}>
                            {each?.DepartmentName}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Location:</h1>
                      <input
                        value={formik.values.workInformation.location}
                        onChange={formik.handleChange(
                          "workInformation.location"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Designation:</h1>
                      {/* <CategoryDropDown
                      className="cs_edit_right_input"
                      onChange={formik.setFieldValue}
                      value={formik.values.workInformation.designation}
                    /> */}
                      <select
                        className="cs_select_option_all"
                        value={formik.values.workInformation.designation}
                        onChange={formik.handleChange(
                          "workInformation.designation"
                        )}
                      >
                        {DesignationList?.map((each) => (
                          <option value={`${each?.DesignationName}`}>
                            {each?.DesignationName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Manager:</h1>

                      <select
                        className="cs_select_option_all"
                        value={formik.values.managerDataId}
                        onChange={formik.handleChange("managerDataId")}
                      >
                        {managersList?.map((each) => (
                          <option value={`${each?._id}`}>
                            {each?.basicInformation?.firstName}{" "}
                            {each?.basicInformation?.lastName}{" "}
                            {each?.basicInformation?.employerId}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Source of Hire:</h1>
                      <input
                        value={formik.values.workInformation.sourceOfHire}
                        onChange={formik.handleChange(
                          "workInformation.sourceOfHire"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">
                        Current Experience:
                      </h1>
                      <input
                        value={formik.values.workInformation.currentExperience}
                        onChange={formik.handleChange(
                          "workInformation.currentExperience"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">App Role:</h1>
                      <input
                        value={formik.values.workInformation.appRole}
                        onChange={formik.handleChange(
                          "workInformation.appRole"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Employment Type:</h1>
                      <input
                        value={formik.values.workInformation.employmentType}
                        onChange={formik.handleChange(
                          "workInformation.employmentType"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Employment Status:</h1>
                      <input
                        value={formik.values.workInformation.employeeStatus}
                        onChange={formik.handleChange(
                          "workInformation.employeeStatus"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Date of Joining:</h1>

                      <FormikDateYour
                        name="workInformation.dateOfJoining"
                        onChange={formik.setFieldValue}
                        type="text"
                        value={formik?.values?.workInformation?.dateOfJoining}
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Total Experience:</h1>
                      <input
                        value={formik.values.workInformation.totalExperience}
                        onChange={formik.handleChange(
                          "workInformation.totalExperience"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cs_edit_side_head">Personal Details</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Date of Birth:</h1>

                      <FormikDateYour
                        name="personalDetails.dateOfBirth"
                        onChange={formik.setFieldValue}
                        type="text"
                        value={formik?.values?.personalDetails?.dateOfBirth}
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Age:</h1>
                      <input
                        value={formik.values.personalDetails.age}
                        onChange={formik.handleChange("personalDetails.age")}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Gender:</h1>
                      <input
                        value={formik.values.personalDetails.gender}
                        onChange={formik.handleChange("personalDetails.gender")}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">About Me:</h1>
                      <input
                        value={formik.values.personalDetails.aboutMe}
                        onChange={formik.handleChange(
                          "personalDetails.aboutMe"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Marital Status:</h1>
                      <input
                        value={formik.values.personalDetails.maritalStatus}
                        onChange={formik.handleChange(
                          "personalDetails.maritalStatus"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cs_edit_side_head">Identity Information</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">PAN:</h1>
                      <input
                        value={formik.values.identityInfo.pan}
                        onChange={formik.handleChange("identityInfo.pan")}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">UAN:</h1>
                      <input
                        value={formik.values.identityInfo.uan}
                        onChange={formik.handleChange("identityInfo.uan")}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Aadhaar:</h1>
                      <input
                        value={formik.values.identityInfo.adhaar}
                        onChange={formik.handleChange("identityInfo.adhaar")}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="cs_edit_side_head">Contact Details</h1>
                <div className="cs_edit_left_right_div">
                  <div className="cs_edit_left_input_right_input">
                    {" "}
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">
                        {" "}
                        Work Phone Number:
                      </h1>
                      <input
                        value={formik.values.contactDetails.workNumber}
                        onChange={formik.handleChange(
                          "contactDetails.workNumber"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">
                        Personal Phone Number:
                      </h1>
                      <input
                        value={formik.values.contactDetails.personalNumber}
                        onChange={formik.handleChange(
                          "contactDetails.personalNumber"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Email address:</h1>
                      <input
                        value={formik.values.contactDetails.emailAddress}
                        onChange={formik.handleChange(
                          "contactDetails.emailAddress"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                  <div className="cs_edit_left_input_right_input">
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Present Address:</h1>
                      <input
                        value={formik.values.contactDetails.presentAddress}
                        onChange={formik.handleChange(
                          "contactDetails.presentAddress"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                    <div className="cs_edit_input_div">
                      <h1 className="cs_edit_left_input">Permanent Address:</h1>
                      <input
                        value={formik.values.contactDetails.permanentAddress}
                        onChange={formik.handleChange(
                          "contactDetails.permanentAddress"
                        )}
                        className="cs_edit_right_input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_edit_submit_cancel_div">
              <div>
                <button className="cs_edit_submit_button" type="submit">
                  Submit
                </button>
              </div>

              <div>
                <Link to={`/self-service/profile`}>
                  <button className="cs_view_button_close">Cancel</button>
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;
