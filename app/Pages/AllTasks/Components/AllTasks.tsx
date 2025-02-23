import TasksHeader from "./TasksHeader";
import TasksSubHeader from "./TasksSubHeader";
import TasksList from "./TasksList";
function AllTasksContainer(){
    return(
        <div className="bg-slate-50 w-full p-10 max-sm:p-8 max-sm:py-9">
            <TasksHeader />
            <TasksSubHeader />
            <TasksList />
            
        </div>
    );
}
 
export default AllTasksContainer;
