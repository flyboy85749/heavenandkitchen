import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";

export const HomePage = ({ data }) => {
  return (
    <main className={styles.main}>
      {data?.map((recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
          <Image
            height={300}
            width={300}
            alt={recipe.title}
            src={recipe.image}
          />{" "}
          <h2>{recipe.title}</h2> <p>{recipe.description}</p>
        </Link>
      ))}
    </main>
  );
};

export async function getServerSideProps() {
  const { recipe_categories } = await import("/data/data.json");
  
  return {
    props: {
      data: recipe_categories,
      title: "Heaven and Kitchen",
    },
  };
}
