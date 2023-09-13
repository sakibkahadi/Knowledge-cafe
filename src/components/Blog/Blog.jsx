import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark, handleMakAsRead}) => {
    const {id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-red-600 text-2xl
                    '><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash , idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMakAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMakAsRead: PropTypes.func.isRequired
}
export default Blog;