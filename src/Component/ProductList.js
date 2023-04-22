import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';

export default function ProductList() {
  const { id } = useParams();
  const baseURL = `https://localhost:7046/api/Categories/Products/${id}`;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
    console.log(post);
  }, []);

  if (!post) return null;

  return (
    <div className="section">
      <div className="container">
        <div className="columns is-multiline is-6">
          {post.map((item) => (
            <ProductItem
              productId={item.id}
              productName={item.name}
              productPrice={item.price}
              productImage={'https://localhost:7046/Resources/' + item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
