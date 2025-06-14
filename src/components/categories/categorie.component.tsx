import { useEffect, useState } from "react";
import "./categories.styles.css";
import { type Category } from "../../types/category.type";
import { categoriesData } from "../../data/categories";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  console.log(categories);
  async function fecthCategories() {
    new Promise((resolve) => setTimeout(resolve, 1000));

    return setCategories(categoriesData);
  }

  useEffect(() => {
    fecthCategories();
  }, []);

  return (
    <div className="categories-container">
      <div className="categories-content">
        {/* {categories.map((category)=>{
          <CategoryItem key={category.id}/>
        })} */}
      </div>
    </div>
  );
}

export default Categories;
