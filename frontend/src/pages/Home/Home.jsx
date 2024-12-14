import React, { useState } from 'react'; // Import React and required hooks here
import { Header } from '../../components/Header/Header';
import { ExploreMenu } from '../../components/ExploreMenu/ExploreMenu';
import './Home.css'; // Import any additional CSS if needed
import { FoodDisplay } from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
};

export default Home;
