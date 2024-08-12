import Cards from './components/Cards';
import AI from './components/DashboardHead';
import View from './components/View';

const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <div className="">
        <AI />
        <Cards />
        <Cards />
      </div>
      <div className="">
        <View />
      </div>
    </div>
  );
};

export default Dashboard;
