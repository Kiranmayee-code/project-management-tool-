import AllProjectsSection from "./Components/AllProjectsSection";
import ProjectsHeader from "./Components/ProjectsHeader";
import ProjectsSubHeader from "./Components/ProjectsSubHeader";
import StatsRightSideBar from "./Components/StatsRightSideBar";

function AllProjects(){
    return(
      <div className="bg-slate-50 w-full min-h-screen flex">
            <AllProjectsArea />
            <StatsRightSideBar />
            {/*Project side bar we are going to add */}
      </div>
    );

    function AllProjectsArea(){
        return(
            <div className="w-[78%] max-lg:w-full p-10 max-sm:p-7 max-sm:pt-9 flex flex-col gap-3">
                {/*Search bar and the add project button */}
                <ProjectsHeader />
                {/*My Projects Title And the add button */}
                <ProjectsSubHeader />
                {/* All Projects Added */}
                <AllProjectsSection />
            </div>
        );
    }
}

export default AllProjects;