import { IGlobaSlides } from './globa.slides';

export interface IItensSlice extends IGlobaSlides {
  items: IItemFull[] | undefined;
  itemsList: IITem[] | undefined;
}


interface IITem {
  id: string;
  description: string;
}

export interface IItemFull {
  deleted_at: string;
  description: string;
  foods: IFoods;
  can_eat_at: ICanEat;
}

interface IFoods {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  amount_grams: number;
  food: IFood;
}

interface IFood {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: number;
  description: string;
  proteins: number;
  lipids: number;
  carbohydrates: number;
  energy_value: number;
  potassium: number;
  phosphorus: number;
  sodium: number;
  food_category: IFoodCategory;
}

interface IFoodCategory {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  description: string;
  level: number;
  parent: IParent;
}

interface IParent {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  description: string;
  level: string;
  parent: IParent | undefined;
}

interface ICanEat {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  type_of_meal: string;
}
