import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home({ data, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <nav>
          <img />
          <a href="/">Home</a>
          <a href="/about-us">About</a>
          <a href="/contact">Contact</a>
          <a href="/recipes">Recipes</a>
        </nav>
      </header>
      <main>
      {data.meals?.map((recipe) => (
        <Link key={recipe.idMeal} href={`/recipes/${recipe.idMeal}`}>
          <Image
            height={300}
            width={300}
            alt={recipe.strMeal}
            src={recipe.strMealThumb}
          />
          <h3>{recipe.strMeal}</h3>
        </Link>
      ))}
    </main>
    <footer>
        <p> &copy; 2023 Heaven and Kitchen</p>
      </footer>
     </> 
  
  );
}

export async function getServerSideProps() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8eecbcc5f3msh5bc24b407332722p168923jsnad8e655c2cd4',
      'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
    }
  };

  
  
  const data = await fetch('https://themealdb.p.rapidapi.com/latest.php', options)
    .then(response => response.json())
    .catch(err => console.error(err));

  
    return {

      props: {data: data, title: "Heaven and Kitchen"},
      
    }
}