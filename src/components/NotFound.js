const NotFound = ({ needFullHeight }) => {
  return (
    <section
      className={` ${needFullHeight && "min-height-100vh"} not-found wrapper `}
    >
      <h2 className="section-title">Not Found</h2>
    </section>
  );
};

export default NotFound;
