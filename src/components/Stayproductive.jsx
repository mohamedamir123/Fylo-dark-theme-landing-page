import './styles/StayProductive.css'
import ArrowImg from "/src/assets/images/icon-arrow.svg";
import StayProductiveImg from "/src/assets/images/illustration-stay-productive.png";
import { Link } from 'react-router-dom';

function Stayproductive() {
    return (
        <>
            <section className='pb-[150px]'>
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-[100px] place-items-center">
                    <div>
                        <img src={StayProductiveImg} alt="stay-img" />
                    </div>
                    <div className="text-white">
                        <h3 className="font-medium text-[35px] leading-[40px]">
                            Stay Productive
                            <br />
                            Whenever You Are 
                        </h3>
                        <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
                            <p className="mb-[15px]">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                excepturi incidunt quo deserunt quidem accusamus iure ab earum
                                reprehenderit debitis!
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                excepturi incidunt quo deserunt quidem accusamus iure ab earum
                                reprehenderit debitis!
                            </p>
                        </div>
                        
                        <Link
                        to="/"
                        className="text-[#67dbda] hover:text-[#42b0d1] hover:border-[#42b0d1] transition-all duration-200  border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit"
                    >
                            See how Fylo works
                            <img
                            src={ArrowImg}
                            alt="arrow-img"
                            className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
                            />
                    </Link>                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stayproductive
