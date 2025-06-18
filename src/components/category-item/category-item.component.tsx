import type { Category } from "../../types/category.type";
import { CategoryItemContainer, CategoryName } from "./category-item.styles";

interface CategoryItemProps {
  category: Category;
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayname}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
