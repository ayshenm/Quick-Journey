import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '@/components/ui/page-header';
import { IBlog } from '@/types';
import Navbar from '@/layout/root/navbar';

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<IBlog>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchBlogPost = async () => {
    try {
      const response = await fetch(`https://api.quick-journey.com/api/blogs/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const result = await response.json();
      setBlogPost(result);
    } catch (error) {
      setError('Failed to fetch blog post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchBlogPost();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blogPost) {
    return <div>No blog post found</div>;
  }
  return (
    <div className="pt-8 flex flex-col justify-center items-center gap-y-4">
      <Navbar />
      <div className="mt-20 md:mt-1 flex flex-col justify-center items-center gap-y-5 mx-4">
        <div className="mt-5  container bg-muted section py-4 px-4">
          <PageHeader title={`Blog ${blogPost.title}`} />
          <div className="flex flex-col gap-y-3 py-5">
            <div className="max-w-[300px]">
              <img src={blogPost.image} alt={blogPost.title} />
            </div>
            <h2 className="text-xl md:text-3xl font-medium ">{blogPost.title}</h2>
            <p className="text-base md:text-lg">{blogPost.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
