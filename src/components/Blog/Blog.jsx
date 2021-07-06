import cardImage1 from '../../Assets/Rectangle 963.png'
import cardImage2 from '../../Assets/Rectangle 964.png'
import cardImage3 from '../../Assets/Rectangle 965.png'

const Blog = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <p className='font-Montserrat font-semibold sm:text-sm md:text-4xl text-center text-font-blue border-b-2 border-red-400 w-64 mx-auto'>Our Blog</p>
                </div>
                <div className={`pt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4`}>
                    <div className={`overflow-hidden`}>
                        <div>
                            <img className='rounded mx-auto' src={cardImage1} alt="cardImage" />
                        </div>
                        <div>
                            <div className="flex justify-around items-center pt-2 time__comments">
                                <span className='text-xs border border-gray-400 font-Montserrat'>June 1, 2021</span>
                                <span className='text-xs font-Montserrat'>2 comments</span>
                            </div>
                            <div className="heading py-1">
                                <p className='font-medium text-font-blue text-center'>Our latest product just arrived</p>
                            </div>
                            <div className="paragraph">
                                <span className='text-xs text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a molestias recusandae praesentium et ratione obcaecati veritatis distinctio pariatur quis, laborum voluptatibus, natus quaerat aliquam laudantium nulla incidunt, iure odit!...<span className='font-bold text-sm'>Read more</span></span>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        <div>
                            <img className='rounded mx-auto' src={cardImage2} alt="cardImage" />
                        </div>
                        <div>
                            <div className="flex justify-around items-center pt-2 time__comments">
                                <span className='text-xs border border-gray-400  bg-button-blue text-white font-Montserrat'>June 1, 2021</span>
                                <span className='text-xs font-Montserrat text-font-blue font-medium'>2 comments</span>
                            </div>
                            <div className="heading py-1">
                                <p className='font-medium text-font-blue text-center'>Our latest product just arrived</p>
                            </div>
                            <div className="paragraph">
                                <span className='text-xs text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a molestias recusandae praesentium et ratione obcaecati veritatis distinctio pariatur quis, laborum voluptatibus, natus quaerat aliquam laudantium nulla incidunt, iure odit!...<span className='font-bold text-sm'>Read more</span></span>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        <div>
                            <img className='rounded mx-auto' src={cardImage3} alt="cardImage" />
                        </div>
                        <div>
                            <div className="flex justify-around items-center pt-2 time__comments">
                                <span className='text-xs border border-gray-400 font-Montserrat'>June 1, 2021</span>
                                <span className='text-xs font-Montserrat'>2 comments</span>
                            </div>
                            <div className="heading py-1">
                                <p className='font-medium text-font-blue text-center'>Our latest product just arrived</p>
                            </div>
                            <div className="paragraph">
                                <span className='text-xs text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a molestias recusandae praesentium et ratione obcaecati veritatis distinctio pariatur quis, laborum voluptatibus, natus quaerat aliquam laudantium nulla incidunt, iure odit!...<span className='font-bold text-sm'>Read more</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-6'>
        <button className="block mx-auto shadow bg-button-blue hover:bg-font-blue focus:shadow-outline focus:outline-none text-white text-xl py-3 px-10 md:w-96 rounded">Load More</button>
        </div>
            </div>
        </section>
    );
};

export default Blog;