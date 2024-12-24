import { createSlice } from "@reduxjs/toolkit";
export const templateSlice = createSlice({
  name: "twilio",
  initialState: {
    isLoading: false,
    callToken: {},
    callLogs: [],
    availableNumbers: [],
    claimedNumbers: [],
    sms: [],
    message: "",
    error: "",
    type: "",
  },
  reducers: {
    twilioRequestLoading: (state, action) => {
      state.isLoading = true;
    },
    invalidRequest: (state, action) => {
      state.error = action.payload;
      state.message = "Error";
      state.type = "Invalid Request";
      state.callToken = {};
      state.callLogs = [];
      state.availableNumbers = [];
      state.isLoading = false;
    },
    getCallToken: (state, action) => {
      state.callToken = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getCallLogs: (state, action) => {
      state.callLogs = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getAvailableNumbers: (state, action) => {
      state.availableNumbers = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getClaimedNumbers: (state, action) => {
      state.claimedNumbers = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getMessages: (state, action) => {
      state.sms = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    claimPhoneNumber: (state, action) => {
      state.message = action.payload;
      state.isLoading = false;
      state.error = "";
    },
  },
});
export default templateSlice.reducer;
export const {
  twilioRequestLoading,
  invalidRequest,
  getCallToken,
  getCallLogs,
  getAvailableNumbers,
  getClaimedNumbers,
  claimPhoneNumber,
} = templateSlice.actions;
