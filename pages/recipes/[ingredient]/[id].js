import Image from 'next/image';

const singleRecipe = ({ data }) => {
  console.log(data);
  return (
    <div>
       <Image src={data.image} width={500} height={300} alt={data.title} />
       <h1>{data.title}</h1>
       <p>{data.description}</p>
    </div>
  )
}

export default singleRecipe;

export async function getStaticPaths() {
  const data = await import('/data/data.json');
  const allRecipes = data.allRecipes;

  const allPaths = allRecipes.map((path) => {
    return {
      params: {
        ingredient: path.category,
        id: path.id,
      },
    };
    });

    return {
      paths: allPaths,
      fallback: false
    }
}

export async function getStaticProps(context){
  const id = context.params.id;
  const { allRecipes } = await import('/data/data.json');
  const recipeData = allRecipes.find((recipe) => id === recipe.id);

  return {
    props: { data: recipeData }
  }
}