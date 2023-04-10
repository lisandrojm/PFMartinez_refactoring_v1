import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import ItemLoading from '../ItemLoading/ItemLoading';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {categoryId === undefined && (
        <div className="pt-3">
          <h3>{greeting}</h3>
        </div>
      )}
      {loading ? <ItemLoading text="Loading ..." /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
