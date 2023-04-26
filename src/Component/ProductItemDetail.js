import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductItemDetail() {
  const { id } = useParams();
  const baseURL = `https://localhost:7046/api/Products/${id}`;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
    console.log(post);
  }, []);

  if (!post) return null;

  return (
    <div class="container">
      <div className="columns">
        <div className="column is-one-third">
          <figure className="image">
            <img
              src={'https://localhost:7046/Resources/' + post.image}
              alt={post.name}
            />
          </figure>
        </div>
        <div className="column is-one-third is-flex is-justify-content-center is-flex-direction-column">
          <h3 className="title is-3">{post.name}</h3>
          <p className="has-text-justified">{post.description}</p>
          <p className="is-size-5 has-text-info">{post.price}</p>
          <br />
          <div className="buttons is-left mt-3">
            <a
              href="/"
              className="button is-medium is-black is-light is-link"
            >
              Đặt Mua
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="section">
  //     <div class="container">
  //       <div class="columns is-multiline is-6">
  //         {/* {post.map((item) => (
  //           <h1>{'https://localhost:7046/Resources/' + item.image}</h1>
  //         ))} */}
  //         {console.log(post)}
  //       </div>
  //     </div>
  //   </div>
  // );
}
