
import { toast } from 'react-toastify';
const StudentUnenroll = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKENDURL}cms/unenroll/`
      , options);
      if (response.ok) {
        console.log("unenrolled registration successfully");
        toast.success('Registration unenrolled successfully');

      } else {
        console.error("Failed to send data to Google Sheet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export default StudentUnenroll;