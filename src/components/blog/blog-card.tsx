import { IBlog } from '@/types';
import { Link } from 'react-router-dom';

type PropsInput = {
  blogData: IBlog[];
};

export const BlogCard = ({ blogData }: PropsInput) => {
  return (
    <div className="section bg-muted py-5">
      <div
        className="container !pl-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 content-center items-center">
        {blogData.length > 0 ? (
          blogData.map((item) => (
            <Link key={item.id} to={`/blog_detail/${item.id}`}>
              <div key={item.id} className="flex flex-col items-start gap-y-3">
                <div className="max-w-[200px]">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="flex flex-col gap-y-3">
                  <h5 className="font-bold text-xl text-foreground">{item.title}</h5>
                  <p className="text-foreground text-base font-medium">
                    {item.text.split(' ').slice(0, 30).join(' ')}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
