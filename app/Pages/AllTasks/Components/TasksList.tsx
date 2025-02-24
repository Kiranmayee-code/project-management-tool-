import React from "react";
import Image from "next/image";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import ListIcon from "@mui/icons-material/List";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Checkbox from "@mui/icons-material/Checkbox";
import CachedIcon from "@mui/icons-material/Cached";

function TasksList(){
    return(
        <div className="ml-12  max-sm:ml-0 mt-11 flex-col flex gap-4">
            <Tabs />
            <div className="flex flex-col gap-4">
                <SingleTask />
                <SingleTask />
            </div>
        </div>
    );
}
export default TasksList;
function Tabs(){
    return(
        <div className="flex items-center gap-6 ml-3 mt-8 mb-5 ">
            <div className="flex gap-2 text-orange-400 font-semibold">
                <span>On Going Tasks</span>
                <span className=" bg-orange-600 text-white px-2 rounded-md max-[420px]:hidden">7</span>
            </div>
            <div className="text-slate-400 flex gap-2 items-center">
                <span>Completed Tasks</span>
                <span className=" bg-slate-200 px-2 rounded-md max-[420px]:hidden">8</span>
            </div>
        </div>
    );
}
function SingleTask(){
    return(
        <div className="flex gap-1 items-center">
            <Checkbox />
            <div
            className="w-full bg-white rounded-lg border border-slate-100 flex gap-3 items-center justify-between p-5 py-6 max-sm:p-4 ">
                <div className="flex gap-3 items-center">
                    {/*wallet Icon*/}
                    <div>
                        <div className="bg-orange-200 rounded-lg p-2 flex items-center justify-center">
                            <ListIcon className="text-orange-600"/>
                        </div>
                    </div>
                    {/*wallet Name*/}
                    <div className="flex flex-col">
                        <span className="font-bold hover:text-orange-600 cursor-pointer max-sm:text-sm">
                            Create the UI Design of the task
                        </span>
                        <div className="flex">
                            <span className=" text-slate-400 text-[13px] p-[2px]">
                                Project
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-14 font-bold items-center">
                                    {/*Status*/}

                    <div className="flex gap-2 items-center max-[770px]:hidden">
                        <CachedIcon className="text-[24px] text-slate-400" />
                        <span className="text-[14px] text-slate-400">In Progress</span>
                    </div>
                    {/*Priority*/}
                    <div className="flex gap-2 items-center max-[940px]:hidden">
                        <CircleIcon className="text-[10px] text-green-600" />
                        <span className="text-[14px] text-slate-400">Low</span>

                    </div>
                    {/*Action Button*/}
                    <div className="flex gap-2 items-center">
                        {/*Edit Button*/}
                        <div className="rounded-lg p-2 flex items-center justify-center cursor-pointer bg-orange-200 hover:bg-orange-300 transition all">
                            <EditOutlinedIcon
                            sx={{fontSize:"17px"}}
                            className="text-orange-600"/>
                        </div>
                        {/* DeleteButton*/}
                        <div className=" rounded-lg p-2 flex items-center justify-center cursor-pointer bg-slate-200 hover:bg-slate-300">
                            <DeleteOutlineOutlinedIcon
                            sx={{fontSize: "17px"}}
                            className="text-slate-600"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
