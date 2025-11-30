
function GetStarted() {
    return (
        <>
        <section>
            <div className="container relative">
                <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col text-white text-center p-[30px] w-[865px] max-w-full min-h-[275px]">
                    <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">Get Early Access Today</h3>
                    <p className="w-[620px] max-w-full mx-auto mb-[30px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nobis accusamus nihil aut explicabo cum aliquid in rerum atque et maiores!
                    </p>
                    <form className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]">
                        <input type="email" placeholder="email@example.com" required className="bg-white placeholder:text-slate-600 w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] outline-none border-none text-slate-600" />
                        <button type="submit" className="btn w-full md:w-[200px] h-[50px] cursor-pointer rounded-[30px]">Get Started For Free</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default GetStarted
