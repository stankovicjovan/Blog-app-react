import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch('http://localhost:6500/blogs');

  return (
    <div className="home">
      {/* conditinal output with &&, especially when we fetching, cuz we need to wait for data */}
      {error && <h3>{error}</h3>}
      {isLoading && <h3>Loading...</h3>}

      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
