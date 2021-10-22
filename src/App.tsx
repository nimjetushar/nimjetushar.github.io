import { useEffect, useState } from "react";
import "./App.scss";
import { Main } from "./component/main.component";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      const loaderEle = document.getElementById("boot-loader");
      if (loaderEle) {
        loaderEle.style.display = "none";
      }
    }, 1000 * 5);
  }, []);

  return <div className="application-container">{loading ? "" : <Main />}</div>;
}

export default App;
