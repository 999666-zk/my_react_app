import { FC } from "react";
import { recipes } from "./data";

const resRecipes = recipes.map((item) => {
  const { id, name, ingredients } = item;

  const resIngredients = ingredients.map((it) => {
    return <li key={it}>{it}</li>;
  });

  return (
    <>
      <li key={id}>
        <h1>{id}</h1>
        <h2>{name}</h2>
        <ul>{resIngredients}</ul>
      </li>
    </>
  );
});
const Home: FC = () => {
  return (
    <div>
      <ul>{resRecipes}</ul>
    </div>
  );
};
export default Home;
