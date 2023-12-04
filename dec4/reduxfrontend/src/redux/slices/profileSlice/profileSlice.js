import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import baseurl from "../../../utils/baseUrl";

const resetRegisterProfile = createAction("registerprofile/reset");
const resetUpdateProfile = createAction("updateprofile/reset");
const resetDeleteProfile = createAction("deleteprofile/reset");
//----------------------------------------------------------------
// register action
//----------------------------------------------------------------

export const registerUserAction = createAsyncThunk(
  "users/register",
  async (user, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${baseurl}/api/users/register`,
        user,
        config
      );

      if (!data?.name) {
        dispatch(resetRegisterProfile());
      }

      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//----------------------------------------------------------------
// Login
//----------------------------------------------------------------

export const loginUserAction = createAsyncThunk(
  "users/login",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      // make http call
      const { data } = await axios.post(
        `${baseurl}/api/users/login`,
        userData,
        config
      );
      // save user into local storage
      localStorage.setItem("userInfo", JSON.stringify(data));
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Logout action

export const logoutUserAction = createAsyncThunk(
  "/user/logout",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      localStorage.removeItem("userInfo");
      const responseData = { message: "Logout successful" };
      return responseData;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
//----------------------------------------------------------------
// Fetch User Details
//----------------------------------------------------------------

export const fetchDetailsProfileAction = createAsyncThunk(
  "users/fetchdetails",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseurl}/api/users/${id}`);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
//----------------------------------------------------------------
// Fetch All Users
//----------------------------------------------------------------

export const fetchAllProfileAction = createAsyncThunk(
  "users/fetchallProfile",
  async (id, { rejectWithValue, getState, dispatch }) => {
    // const user = getState()?.users;
    // const { userAuth } = user;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };
    try {
      const { data } = await axios.get(`${baseurl}/api/users`);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//----------------------------------------------------------------
// Fetch All New Hires
//----------------------------------------------------------------

export const fetchAllNewHiresAction = createAsyncThunk(
  "users/fetchallNewHires",
  async (id, { rejectWithValue, getState, dispatch }) => {
    // const user = getState()?.users;
    // const { userAuth } = user;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };
    try {
      const { data } = await axios.get(`${baseurl}/api/users/new/hires`);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
//----------------------------------------------------------------
// Update User Details
//----------------------------------------------------------------

export const updateUserAction = createAsyncThunk(
  "users/update",
  async (userDet, { rejectWithValue, getState, dispatch }) => {
    const { id, values } = userDet;
    // console.log(values, "updateUserAction");
    // const user = getState().profile;
    // const { userAuth } = user;

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };
    //http call

    try {
      const { data } = await axios.put(`${baseurl}/api/users/update/${id}`, {
        ...values,
      });
      console.log(data, "update users ");
      if (!data?.name) {
        dispatch(resetUpdateProfile());
      }

      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//----------------------------------------------------------------
// delete Profile
//----------------------------------------------------------------
export const deleteProfileAction = createAsyncThunk(
  "Profile/delete",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const user = getState()?.profile;
    const { userAuth } = user;

    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      // http call

      const { data } = await axios.delete(
        `${baseurl}/api/users/delete/${id}`,

        config
      );
      dispatch(resetDeleteProfile());
      return data;
    } catch (error) {
      if (!error?.message) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//----------------------------------------------------------------
// forgotPassword
//----------------------------------------------------------------

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    try {
      // make http call
      const { data } = await axios.post(
        `${baseurl}/api/users/forgotPassword`,
        userData
      );

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

//----------------------------------------------------------------
// resetPassword
//----------------------------------------------------------------

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ userData, resetToken }, { rejectWithValue, getState, dispatch }) => {
    try {
      // make http call
      const { data } = await axios.post(
        `${baseurl}/api/users/resetPassword/${resetToken}`,
        userData
      );

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

//----------------------------------------------------------------
// change Password
//----------------------------------------------------------------

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (userData, { rejectWithValue, getState, dispatch }) => {
    const profile = getState()?.profile;
    const { userAuth } = profile;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      // make http call
      const { data } = await axios.patch(
        `${baseurl}/api/users/changePassword`,
        userData,
        config
      );

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const fetchAllManagersData = createAsyncThunk(
  "users/fetchManager",
  async (id, { rejectWithValue, getState, dispatch }) => {
    // const user = getState()?.users;
    // const { userAuth } = user;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };
    try {
      const { data } = await axios.get(`${baseurl}/api/users/manager/data`);
      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const userLoginFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const profileSlices = createSlice({
  // register
  name: "user",
  initialState: { userAuth: userLoginFromStorage },
  reducers: {
    RESET(state) {
      state.twoFactor = false;
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetRegisterProfile, (state, action) => {
      state.isProfileAdded = true;
    });
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      // state.loading = false;
      // state.isProfileAdded = false;
      // state.registerd = action?.payload;
      // state.appErr = undefined;
      // state.serverErr = undefined;

      if (action?.payload && action?.payload?.name) {
        // Handle validation error
        state.appErr = action?.payload?.message;
        state.serverErr = undefined;
        state.isProfileAdded = false;
        state.registered = undefined; // Clear any potential registration data
      } else {
        // Handle successful registration
        state.registered = action?.payload;
        state.appErr = undefined;
        state.serverErr = undefined;
        state.isProfileAdded = false;
      }
    });

    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // login
    //----------------------------------------------------------------

    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loading = true;
      state.userAuth = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
      toast.success("user login successful");
    });

    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      if (action?.payload) {
        if (action?.payload?.message) {
          toast.error(action?.payload?.message);
        } else {
          toast.error(action?.payload);
        }
      } else {
        toast.error(action?.error?.message);
      }
    });

    //----------------------------------------------------------------
    // forgotPassword
    //----------------------------------------------------------------

    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
      toast.success(action?.payload?.message);
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      if (action?.payload) {
        if (action?.payload?.message) {
          toast.error(action?.payload?.message);
        } else {
          toast.error(action?.payload);
        }
      } else {
        toast.error(action?.error?.message);
      }
    });
    //----------------------------------------------------------------
    // resetPassword
    //----------------------------------------------------------------
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action?.payload?.message;
      toast.success(action?.payload?.message);
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      if (action?.payload) {
        if (action?.payload?.message) {
          toast.error(action?.payload?.message);
        } else {
          toast.error(action?.payload);
        }
      } else {
        toast.error(action?.error?.message);
      }
    });
    //----------------------------------------------------------------
    // changePassword
    //----------------------------------------------------------------

    builder.addCase(changePassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action?.payload?.message;
      toast.success(action?.payload?.message);
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action?.payload?.message;
      if (action?.payload) {
        if (action?.payload?.message) {
          toast.error(action?.payload?.message);
        } else {
          toast.error(action?.payload);
        }
      } else {
        toast.error(action?.error?.message);
      }
    });

    //----------------------------------------------------------------
    // Logout
    //----------------------------------------------------------------

    builder.addCase(logoutUserAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logoutUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.userAuth = undefined;
      state.appErr = undefined;
      state.serverErr = undefined;
      toast.success(action?.payload?.message);
    });

    builder.addCase(logoutUserAction.rejected, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
      toast.error(
        action?.payload || action?.payload?.message || action?.error?.message
      );
    });
    //----------------------------------------------------------------
    // Fetch user Details
    //----------------------------------------------------------------

    builder.addCase(fetchDetailsProfileAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchDetailsProfileAction.fulfilled, (state, action) => {
      state.loading = false;

      state.profileData = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchDetailsProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch All Users
    //----------------------------------------------------------------

    builder.addCase(fetchAllProfileAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchAllProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profilesList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch All New Hires
    //----------------------------------------------------------------

    builder.addCase(fetchAllNewHiresAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchAllNewHiresAction.fulfilled, (state, action) => {
      state.loading = false;
      state.newHiresList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllNewHiresAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Update profile
    //----------------------------------------------------------------

    builder.addCase(updateUserAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetUpdateProfile, (state, action) => {
      state.isProfileUpdated = true;
    });
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      if (action?.payload && action?.payload?.name) {
        state.loading = false;
        state.isProfileUpdated = false;
        state.userUpdated = undefined;
        state.appErr = action?.payload?.message;
        state.serverErr = undefined;
      } else {
        state.loading = false;
        state.isProfileUpdated = false;
        state.userUpdated = action?.payload;
        state.appErr = undefined;
        state.serverErr = undefined;
      }
    });
    builder.addCase(updateUserAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // delete Profile
    //----------------------------------------------------------------

    builder.addCase(deleteProfileAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetDeleteProfile, (state, action) => {
      state.isDeleted = true;
    });

    builder.addCase(deleteProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.ProfileDeleted = action?.payload;
      state.isDeleted = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteProfileAction.rejected, (state, action) => {
      state.loading = false;

      state.appErr = action?.payload?.message;
      state.serverErr = action?.errors?.message;
    });

    // fetch manager data
    builder.addCase(fetchAllManagersData.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchAllManagersData.fulfilled, (state, action) => {
      state.loading = false;
      state.managersList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllManagersData.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export const { RESET } = profileSlices.actions;

export default profileSlices.reducer;
