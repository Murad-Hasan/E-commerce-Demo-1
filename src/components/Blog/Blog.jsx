import styles from './Blog.module.css'

const Blog = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.blogHeading}>
                    <p className='font-Montserrat font-semibold sm:text-sm md:text-4xl text-center text-font-blue border-b-2 border-red-400 w-64 mx-auto'>Our Blog</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;