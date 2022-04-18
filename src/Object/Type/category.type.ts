//! import { Category } from "@Object/Enum" 하면 못 찾습니다.
import { Category } from "../Enum";

export type InterestingCategoryProps = Category[];

export const exampleInterestingCategories = [
  Category.BEAUTY,
  Category.HEALTH_CARE,
  Category.BEAUTY,
  Category.HEALTH_CARE,
  Category.BEAUTY,
  Category.HEALTH_CARE,
  Category.BEAUTY,
  Category.HEALTH_CARE,
];
