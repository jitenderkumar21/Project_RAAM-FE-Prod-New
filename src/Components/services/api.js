
const StudentUnenroll = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch( `https://coral-demo-backend.onrender.com/cms/unenroll/`
      , options);
      if (response.ok) {
        console.log("unenrolled registration successfully");
      } else {
        console.error("Failed to send data to Google Sheet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  export default StudentUnenroll;