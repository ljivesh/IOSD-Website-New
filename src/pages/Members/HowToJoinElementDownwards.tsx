
import HowToJoinDownwards from '@/assets/members/HowToJoinDownwards.svg';


const HowToJoinElementDownwards = ({content}: {content: string}) => {

    return <div className='w-48'>
        <img src={HowToJoinDownwards} alt="How to join downwards" className="" />
        <p className='text-sm w-3/4 h-0 relative -top-48 left-[12%] text-center'>{content}</p>
    </div>
};

export default HowToJoinElementDownwards;