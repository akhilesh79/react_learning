const Loader = ({ type }) => {
  if (type === "menu") {
    return (
      <div className="menu-container">
        <div className="menu-shimmer">
          <div className="dish-text"> </div>
          <div className="dish-img"></div>
        </div>
        <div className="menu-shimmer">
          <div className="dish-text"></div>
          <div className="dish-img"></div>
        </div>
        <div className="menu-shimmer">
          <div className="dish-text"></div>
          <div className="dish-img"></div>
        </div>
        <div className="menu-shimmer">
          <div className="dish-text"></div>
          <div className="dish-img"></div>
        </div>
        <div className="menu-shimmer">
          <div className="dish-text"></div>
          <div className="dish-img"></div>
        </div>
        <div className="menu-shimmer">
          <div className="dish-text"></div>
          <div className="dish-img"></div>
        </div>
        <div className="menu-shimmer">
          <div className="dish-text"></div>
          <div className="dish-img"></div>
        </div>
      </div>
    );
  } else
    return (
      <div className="shimmer-container">
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
        <div className="shimer-card"></div>
      </div>
    );
};
export default Loader;
