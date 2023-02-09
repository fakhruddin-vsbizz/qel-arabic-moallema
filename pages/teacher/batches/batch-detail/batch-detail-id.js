import DisplayBatchesTeacher from "../../../components/batches/DisplayBatchesTeacher";
import TeacherSidebar from "../../../components/Sidebar/TeacherSidebar";
import Navigation from "../../../components/layout/Navigation";
import BatchDetailsTeacher from "@/components/batches/BatchDetailsTeacher";


const BatchDetailsId = () => {
  return (  
    <div>
      <Navigation />
      <div className="flex">
      <TeacherSidebar/>
      <div  className="h-screen flex-1 p-7">
      {/* {Menus.map((Menu, index) => ( */}
        <div className="m-0" >
        <div className="m-5">
            Batches
            <BatchDetailsTeacher/>
        </div>
        </div>
        {/* ))} */}
      </div>
        
      </div>
    </div>
  );
};


export default BatchDetailsId
