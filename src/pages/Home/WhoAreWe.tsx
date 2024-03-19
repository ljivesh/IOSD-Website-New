
import EventCollage from '@/assets/EventCollage.svg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


const WhoAreWe = ()=> {


    return <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-11/12">
        <img src={EventCollage} alt="event-collage" className="w-11/12 lg:w-1/2" />
        <div className='p-4 flex flex-col justify-center items-center gap-5'>
            <p className="text-4xl font-bold text-center">Who Are We?</p>
            <p className='text-lg lg:text-xl text-justify line-clamp-6'>The International Organization of Software Developers (IOSD) at the Maharaja Agrasen Institute of Technology (MAIT) is a dynamic tech community dedicated to advancing the field of software development and technology. Our mission is to empower students with cutting-edge software development skills and knowledge, foster collaboration and networking opportunities, provide high-quality educational resources, and encourage the use of technology for positive social impact. We envision IOSD MAIT as a globally recognized tech society that cultivates a thriving tech ecosystem, makes a global impact, and forms strong industry partnerships. Membership is open to all MAIT students, offering access to exclusive workshops, events, and resources while nurturing a vibrant and inclusive tech community. Stay updated with our activities through our website, social media, mailing list, and meeting announcements, and join us in the pursuit of excellence in software development and technology innovation.</p>
            <Link to="/about"><Button variant="secondary">See More</Button></Link>
        </div>
    </div>
};

export default WhoAreWe;