import { Link } from "react-router-dom";
import LandingImg from "/src/assets/images/illustration-intro.png";
function Landing() {
    return (
        <>
            <section className="bg-[#1c2230]">
                <div className="container">
                    <div className="element-center flex-col pt-[200px]">
                        <div className="w-[750px] max-w-full">
                            <img
                            src={LandingImg}
                            alt="landing-img"
                            className="w-full h-fit object-contain"
                            />
                        </div>
                        <div className="text-white text-center">
                            <h1 className=" text-[30px] md:text-[40px] font-semibold mb-[15px]">
                                All Your Files In One Secure Location
                                <br />
                                accessible anywhere.
                            </h1>
                            <p className="font-normal text-lg px-[15] md:w-[600px] mb-[30px] mx-auto max-w-full">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                                iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
                                nulla impedit commodi.
                            </p>
                        </div>
                        <Link
                            to="/register"
                            className="btn w-[280px] h-[60px] rounded-[30px] element-center mx-auto text-white font-medium"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="w-full h-[200px]">
                    <img src="/src/assets/images/bg-curvy-desktop.svg" alt="img" className="w-full h-full" />
                </div>
            </section>
        </>
    )
}

export default Landing
