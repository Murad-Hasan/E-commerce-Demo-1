import styles from './GetInTouch.module.css'

const GetInTouch = () => {
    return (
       <section className='mt-24'>
            <div className='h-80 bg-white flex items-center'>
            <div className="container">
                <div className='flex items-center justify-around py-7'>
                    <div>
                    <div className="px-3 mb-10 ">
                    <h1 className="text-2xl md:text-4xl font-semibold mb-5 leading-tight">Stay updated.</h1> 
                    <h3 className="text-gray-600 mb-7 leading-tight">Subscribe now and receive the latest updates.</h3>
                    <div>
                        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                </div>
                    </div>
                    <div>
                       <div className=" mt-3  flex  flex-row  flex-wrap">
                        <input type="text" className=" text-gray-600  bg-gray-200 w-2/3  p-2  rounded-l-lg" placeholder="john@mail.com"/>
                        <button style={{background:'#DE1362'}} className=" p-2  w-1/3  rounded-r-lg  text-white" type="button">Subscribe</button>
                      </div>
                    </div>
                </div>
            </div>
            </div>
       </section>
    );
};

export default GetInTouch;