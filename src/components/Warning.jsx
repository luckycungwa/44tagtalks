import React from "react";
import { ToastContainer } from "react-toastify";

const Warning = () => {
  return (
    <>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition: Bounce,
        />
      </div>
    </>
  );
};

export default Warning;
