import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from './dashboardSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const data = useSelector((state) => state.dashboard.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Fetch or generate data here
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      dispatch(setData(result));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="my-4">Dashboard</h1>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;