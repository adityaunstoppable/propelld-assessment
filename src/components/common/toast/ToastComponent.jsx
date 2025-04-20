import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// just wrapped ToastContainer with the properties required so that App.jsx can just have a single line of component for toasts
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
