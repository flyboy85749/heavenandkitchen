import Image from "next/image";

const ingredientPage = ({ data }) => {
  return (
    <div>
      <h1>{data.category}</h1>
      <div>
        {data.map((ingredient) => (
          <a
            key={ingredient.id}
            href={`/recipes/${ingredient.category}/${ingredient.id}`}
          >
            <Image
              width={500}
              height={300}
              alt={ingredient.title}
              src={ingredient.image}
            />
            <h2>{ingredient.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ingredientPage;

export async function getStaticPaths() {
  const { recipe_categories } = await import("/data/data.json");
  const allPaths = recipe_categories.map((recipe) => {
    return {
      params: {
        ingredient: recipe.id.toString(),
      },
    };
  });

  
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allRecipes } = await import("/data/data.json");
  const id = context?.params.ingredient;

  const data = allRecipes.filter((recipe) => recipe.category === id);
  
  return { props: { data } };
}
