import { useEffect, useState } from "react";
import { type Category } from "../../types/category.type";
import { categoriesData } from "../../data/categories";
import CategoryItem from "../category-item/category-item.component";
import { CategoriesContainer, CategoriesContent } from "./categories.styles";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function fecthCategories() {
    new Promise((resolve) => setTimeout(resolve, 1000));

    return setCategories(categoriesData);
  }

  useEffect(() => {
    fecthCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </CategoriesContent>
    </CategoriesContainer>
  );
}

export default Categories;
