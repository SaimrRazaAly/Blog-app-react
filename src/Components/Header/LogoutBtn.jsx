import authService, { AuthService } from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handle_LogOut = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      onClick={handle_LogOut}
      type="button"
      className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
    >
      <svg
        className="w-3.5 h-3.5 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M9 21h6a1 1 0 0 0 1-1v-3h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1z" />
      </svg>
      Log out
    </button>
  );
};

export default LogoutBtn;
