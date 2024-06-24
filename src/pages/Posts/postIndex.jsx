import CardComponent from "../../assets/components/Card/CardComponent";
import { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { usePosts } from "../../contexts/PostContext";


const PostIndex = () => {

  // con destructuring estrapolo i valori di posts dalla funzione di use
  const {posts} = usePosts();
  console.log("renderizzo");
  
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "10px 0px",
          fontSize: "2.5rem",
          color: "white",
        }}
      >
        Il mio Blog
      </h1>
      {/* cards */}
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        { posts !== null ?
          posts.map((post) => (
            <CardComponent
              key={post.id}
              title={post.title}
              image={post.image}
              content={post.content}
              category={post.category}
              tags={post.tags}
              published={post.published}
              slug={post.slug}
              post={post}
              />
          ))
          :
          <p className="p-5 fs-4 text-center text-light">
            Carico i posts...
          </p>
        }
      </div>
    </>
  );
};

export default PostIndex;
