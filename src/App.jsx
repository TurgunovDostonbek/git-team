import { useState } from "react";
import { useFetch } from "./Hooks/useFetch";
import "./App.css";

function App() {
  let [url, setUrl] = useState("http://localhost:3000/products");
  let { products } = useFetch(url);

  return (
    <div>
      <h1>Custom hook</h1>
      <div>
        <button onClick={() => setUrl("https://dummyjson.com/products")}>
          All
        </button>
        <button
          onClick={() =>
            setUrl("https://dummyjson.com/products/category/beauty")
          }
        >
          Beauty
        </button>
        <button
          onClick={() =>
            setUrl("https://dummyjson.com/products/category/fragrances")
          }
        >
          fragrances
        </button>
      </div>

      <div className="cards">
        {products.map((item) => {
          return (
            <div className="cards__card" key={item.id}>
              <img src={item.cover_img} alt="" />
              <h1>{item.title.slice(0, 15)}</h1>
              <p>{item.description.slice(0, 80)}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
