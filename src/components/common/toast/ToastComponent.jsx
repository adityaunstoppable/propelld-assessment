import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // important css

function ToastComponent() {
  return (
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop 
        closeOnClick
        pauseOnHover
        theme="colored" 
      />
  );
}

export default ToastComponent;
