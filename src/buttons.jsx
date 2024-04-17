const Menubar = ({ categorys, data, newfunction }) => {
  const btnHandler = (catname) => {
    let GetData = data.filter((val) => {
      return val.category === catname;
    });
    newfunction(GetData);
  };

  return (
    <div className="d-flex justify-content-around">
      {categorys.map((val) => {
        return (
          <button
            onClick={() => {
              btnHandler(val.cat);
            }}
            className="btn btn-dark justify-content-around"
          >
            {val.cat}
          </button>
        );
      })}
    </div>
  );
};

export default Menubar;
