import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import store from "../redux/Store";
import {Provider} from 'react-redux';

const Dashboard = () => {

  return (
    <>
      <Provider store={store}>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </Provider>
    </>
  );
};

export default Dashboard;
