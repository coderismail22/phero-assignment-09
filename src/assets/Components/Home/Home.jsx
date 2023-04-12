import Featured from '../Featured/Featured';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {

    return (
        <div>
            <Featured></Featured>
            <JobCategory></JobCategory>
            <FeaturedJobs></FeaturedJobs>

        </div>
    );
};

export default Home;