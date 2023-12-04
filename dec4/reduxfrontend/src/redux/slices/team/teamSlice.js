import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseurl from "../../../utils/baseUrl";

const resetAddTeam = createAction("addTeam/reset");
const resetUpdateTeam = createAction("updateTeam/reset");
const resetDeleteTeam = createAction("deleteTeam/reset");
//----------------------------------------------------------------
// register action
//----------------------------------------------------------------

export const TeamCreateAction = createAsyncThunk(
  "Team/create",
  async (user, { rejectWithValue, getState, dispatch }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //http call
    try {
      const { data } = await axios.post(
        `${baseurl}/api/team/create`,
        user,
        config
      );
      dispatch(resetAddTeam());
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
// Fetch Team Details
//----------------------------------------------------------------

export const fetchSingleTeamAction = createAsyncThunk(
  "Team/fetched",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseurl}/api/team/fetch/${id}`);
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

export const allFetchTeamAction = createAsyncThunk(
  "Team/fetchall",
  async (id, { rejectWithValue, getState, dispatch }) => {
    // const user = getState()?.users;
    // const { userAuth } = user;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userAuth?.token}`,
    //   },
    // };
    try {
      const { data } = await axios.get(`${baseurl}/api/team/fetch`);
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

export const updateTeamAction = createAsyncThunk(
  "Team/update",
  async (userDet, { rejectWithValue, getState, dispatch }) => {
    const { id, values } = userDet;
    console.log(values, "updateUserAction");
    const user = getState().profile;
    const { userAuth } = user;

    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    //http call

    try {
      const { data } = await axios.put(
        `${baseurl}/api/team/update/${id}`,
        {
          ...values,
        },
        config
      );
      dispatch(resetUpdateTeam());
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
// delete Team
//----------------------------------------------------------------
export const deleteTeamAction = createAsyncThunk(
  "Team/delete",
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
        `${baseurl}/api/team/fetch/${id}`,

        config
      );
      dispatch(resetDeleteTeam());
      return data;
    } catch (error) {
      if (!error?.message) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);
const TeamSlices = createSlice({
  name: "Team",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(TeamCreateAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetAddTeam, (state, action) => {
      state.isTeamAdded = true;
    });
    builder.addCase(TeamCreateAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isTeamAdded = false;
      state.Team = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(TeamCreateAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch  Single user Details
    //----------------------------------------------------------------

    builder.addCase(fetchSingleTeamAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchSingleTeamAction.fulfilled, (state, action) => {
      state.loading = false;
      state.singleTeam = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchSingleTeamAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Fetch All Users
    //----------------------------------------------------------------

    builder.addCase(allFetchTeamAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(allFetchTeamAction.fulfilled, (state, action) => {
      state.loading = false;
      state.TeamList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(allFetchTeamAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // Update profile
    //----------------------------------------------------------------

    builder.addCase(updateTeamAction.pending, (state, action) => {
      state.loading = true;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(resetUpdateTeam, (state, action) => {
      state.isTeameUpdated = true;
    });
    builder.addCase(updateTeamAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isTeameUpdated = false;
      state.TeamUpdated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateTeamAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //----------------------------------------------------------------
    // delete post
    //----------------------------------------------------------------

    builder.addCase(deleteTeamAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetDeleteTeam, (state, action) => {
      state.isDeleted = true;
    });

    builder.addCase(deleteTeamAction.fulfilled, (state, action) => {
      state.loading = false;
      state.TeamDeleted = action?.payload;
      state.isDeleted = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteTeamAction.rejected, (state, action) => {
      state.loading = false;

      state.appErr = action?.payload?.message;
      state.serverErr = action?.errors?.message;
    });
  },
});

export default TeamSlices.reducer;
