import{useCallback,useState} from "react"
import SideBar from "./Components/SideBar";
import AllProjects from "./Pages/AllProjects/AllProjects";
import AllTasksContainer from "./Pages/AllTasks/Components/AllTasks";
import { debounce } from "@mui/material";
export default function Home() {
  const handleChange=(value:string)=>{
    console.log("Input changed:", value);
  };
  return(
    <div className=" flex w-full h-screen poppins ">
      {/*sidebar*/}
      <SideBar />
      {/*All Projects Page */}
      <AllProjects />
      {/*AllTasksContainer*/}
      <AllTasksContainer />
    </div>
  );
}