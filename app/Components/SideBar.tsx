import React from "react"; // 6.9k (gzipped: 2.7k)
import TaskAltIcon from "@mui/icons-material/TaskAlt"; // 66.9k (gzipped: 24.9k)
import BorderAllIcon from "@mui/icons-material/BorderAll"; // 66.7k (gzipped: 24.7k)
import SplitscreenIcon from "@mui/icons-material/Splitscreen"; // 66.8k (gzipped: 24.8k)
import LogoutIcon from "@mui/icons-material/Logout"; // 66.7k (gzipped: 24.8k)
function SideBar(){
   
    return(
        <div
        className="w-[97px] h-screen py-10  bg-white flex flex-col items-center justify-between max-[940px]:hidden">
            <Logo />
            <Menu />
            <Profile />

        </div>

    );
    function Profile(){
        return <div className="w-7 h-7 bg-orange-600 rounded-md"></div>;
    }
    function Menu() {
        return (
            <div>
                <TaskAltIcon
                    sx={{ fontSize: "25px" }}
                    className="text-slate-300 cursor-pointer"
                />
            </div>
        );
    }
   function Logo(){
    return(
        <div className=" rounded-md w-10 h-10 flex item-center justidy-center">
            <TaskAltIcon className="text-orange-600 font-bold"
            sx={{ fontSize:"41px"}}/>
        </div>
    );
   } }
export default SideBar;