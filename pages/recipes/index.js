import Image from 'next/image';

const recipesPage = ({data}) => {
  return (
    <>
        <h1>Recipes Page</h1>
        <div>
            {data.map (recipe => (
                <a key={recipe.id} href={`/recipes/${recipe.id}`}><Image alt={recipe.title} height={300} width={300} src={recipe.image} /> <h2>{recipe.title}</h2></a>
            ))}
        </div>

    </>
  )
}

export default recipesPage;

export async function getStaticProps(){
    const {recipe_categories} = await import('/data/data.json')

    return {
        props: {
            data: recipe_categories
        }
    }
}

