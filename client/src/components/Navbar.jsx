import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

function Navbar() {
  const { isAuthenticated, user, logOut } = useAuth();

  return (
    <nav className="bg-zinc-700 flex justify-between py-5 px-10 rounded-lg shadow-md">
      <Link to={"/"}>
        <h1 className="text-4xl text-white font-bold">Task manager</h1>
      </Link>
      <ul className="flex gap-4 justify-between items-center font-bold text-zinc-300">
        {isAuthenticated ? (
          <>
          <li className="text-[3vh]">
            Welcome <strong>{ user.username }</strong>!
          </li>
          <li className="">
            <Link to={'/tasks'}>My Tasks</Link>
          </li>
          <li className="">
            <Link to={'/add-task'}>Add Tasks</Link>
          </li>
          <Button className="bg-zinc-600" variant="outlined" size="small" startIcon={<LogoutIcon/>} onClick={() => {logOut()}}>Logout</Button>
          
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
