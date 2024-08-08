import React from 'react';
import PostCard from '../components/PostCard';

const Home = ({ category , ...props}) => {
  return (
    <>
    <div className='flex justify-center align-start flex-col gap-4 md:flex-row'>
        <h1>Main Card Component</h1>

        <PostCard
          imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          title="Card Title"
          subtitle="Card Subtitle"
          date={"2022-01-01"}
          category={category}
        />
      
    </div>


    </>
    
  );
}

export default Home;
