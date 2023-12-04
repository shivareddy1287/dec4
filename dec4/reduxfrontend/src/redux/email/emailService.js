import axios from "axios";
import baseUrl from "../../utils/baseUrl";

// sEND Automated Email
const sendAutomatedEmail = async (emailData) => {
  const response = await axios.post(baseUrl + "sendAutomatedEmail", emailData);
  return response.data.message;
};

// /api/users/sendAutomatedEmail

const emailService = {
  sendAutomatedEmail,
};

export default emailService;
