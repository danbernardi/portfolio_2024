import Anchor from "@/components/ui/Anchor";

const Blog = () => {
  return (
    <>
      <Anchor id="blog" />
      <div className="min-h-screen pt-10 mb-10 md:pt-24 md:mb-24 relative">
        <div className="w-[80px] h-2 bg-blue mb-10" />
        <h2 className="text-2xl font-extrabold uppercase mb-2">Blog</h2>
      </div>
    </>
  );
}

export default Blog;