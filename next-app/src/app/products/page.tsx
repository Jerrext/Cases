import Products from "@/components/screens/Products";
import { Metadata } from "next";
import styles from "./Posts.module.scss";
import { PostType } from "@/utils/@globalTypes";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
};

export const metadata: Metadata = {
  title: "Products",
};

const ProductsPage = async () => {
  const posts = await getData();
  return (
    <div className={styles.wrapper}>
      {posts.map((item: PostType) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        );
      })}
      <Products />
    </div>
  );
};

export default ProductsPage;
