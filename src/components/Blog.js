const Blog = ({ needFullHeight }) => {
  return (
    <section className={`${needFullHeight && "min-height-100vh"} blog wrapper`}>
      <h2 className="section-title">Blog</h2>
    </section>
  );
};

export default Blog;
