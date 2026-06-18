import { useState, useEffect } from "react";

function useFetch(url) {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((respons) => respons.json())
      .then((data) => setProducts(data));
  }, [products]);

  return { products };
}

export { useFetch };
