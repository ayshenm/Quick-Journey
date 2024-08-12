import { useEffect, useState } from 'react';
import { BlogCard, HeaderWithBackgroundColor, PropsInput } from '@/components';
import { IBlog } from '@/types';
import { useScrollToUp } from '@/hooks/useScrollToUp';
import { getBlogs } from '@/api';
import Navbar from '@/layout/root/navbar';
import Subscribe from '@/pages/guest/sections/Subscribe';


const cardHeader: PropsInput = {
  headerData: {
    header: {
      submain: 'Get daily updates from our blogs',
      main: 'Latest news and articles'
    },
    text: 'journey play for your preferences. Are you ready to this?'
  }
};

const Blog = () => {
  useScrollToUp();
  const [blogData, setBlogData] = useState<IBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBlogs = async () => {
    setIsLoading(true);

    try {
      const result = await getBlogs();

      if (Array.isArray(result)) {
        setBlogData(result);
      } else {
        throw new Error('Unexpected data format');
      }
    } catch (error) {
      setError('Failed to fetch blogs. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <header className="!z-[100000000000]">
        <div className="section bg-custom-gradient pt-8 flex flex-col justify-center  items-center gap-y-4">
          <Navbar />
          <div className="flex flex-col justify-center items-center gap-y-5">
            <HeaderWithBackgroundColor {...cardHeader} />
          </div>
        </div>
        <div className="bg-muted section">
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <BlogCard blogData={blogData} />
          )}
        </div>
        <div>
         <Subscribe title={''} description={''} successMessage={''} errorMessage={''} layout={''} buttonText={''}/>
        </div>
      </header>
    </>
  );
};

export default Blog;
