import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import SsidChartIcon from '@mui/icons-material/SsidChart';


const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Covid-19 tracker</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">Others</p>
                <li>
                    <VaccinesIcon className="icon"/>
                    <span>Vacination</span>
                </li>
                
                <li>
                    <SsidChartIcon className="icon"/>
                    <span>Chart</span>
                </li>

            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
          
            
        </div>
    </div>
  );
};

export default Sidebar