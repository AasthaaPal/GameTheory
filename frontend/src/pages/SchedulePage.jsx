import ScheduleTable from "../components/Table";
import Sidebar from "../components/Sidebar";



const SchedulePage= ()=>{

    return (
        <div className="flex h-screen">
          <Sidebar/>
          <main className="flex-1 p-6 bg-gray-50">
            <ScheduleTable />
          </main>
          
        </div>
      );

};


export default SchedulePage;