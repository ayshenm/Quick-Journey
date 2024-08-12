import { BlogCard } from '@/components';
import MotionViewport from "@/components/animation/motion-viewport";
import { varSlide } from '@/lib/variants';
import { useEffect, useState } from 'react';
import { IBlog } from '@/types';

const Blog = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState<IBlog[]>([]);

  const getBlogs = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://api.quick-journey.com/api/blogs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const result = await response.json();

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
    getBlogs();
  }, []);

  return (
    <MotionViewport variants={varSlide('right')}>
      <div className="section bg-muted py-10">
        <div className="flex justify-center items-center flex-col gap-y-2">
          <h2 className="text-foreground text-xl md:text-3xl font-bold">Latest news and articles</h2>
          <p className="text-center text-muted-foreground font-normal text-sm md:text-base">
            Enter your promy and let AI help you to find the best and the quickest
            <br />
            Explore and socialize with community
          </p>
        </div>
        <MotionViewport id="blogs" className="container py-10" variants={varSlide('left')}>
          {isLoading ? <p>Loading...</p> : <BlogCard blogData={blogData} />}
          {error && <p className="error">{error}</p>}
        </MotionViewport>
      </div>
    </MotionViewport>
  );
};

export default Blog;
