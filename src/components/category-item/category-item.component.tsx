import type { Category } from "../../types/category.type";
import "./category-item.styles.css";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: `url(${category.imageUrl})` }}
    >
      <div className="category-name">
        <p>{category.displayname}</p>
        <p>Explorar</p>
      </div>
    </div>
  );
}

export default CategoryItem;
