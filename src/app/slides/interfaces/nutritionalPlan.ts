import { IGlobaSlides } from './globa.slides';

export interface INutritionalPlanSlice extends IGlobaSlides {
  nutritionalPlan: INutritionalPlan[] | undefined;
  nutritionalPlanHasMeal: INutritionalHasMeal[] | undefined;
  nutritionalPlanHasDay: NutritionalByDay | undefined;
  listTemp: any[];
}

interface NutritionalByDay {
  date: string;
  list_plan_as_meal: {
    name: string;
    id: string;
  }[];
}

interface INutritionalPlan {
  id: string;
  period_limit: string;
  active: boolean;
  validate_date: string;
  user: string;
}

interface INutritionalHasMeal {
  id: string;
  meal_date: string;
  meals_of_plan: IMealOfPlan;
}

interface IMealOfPlan {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  description: string;
  start_time: string;
  end_time: string;
  type_of_meal: ITypeOfMeal;
}

interface ITypeOfMeal {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  description: string;
  calories_percentage: number;
  lipids_percentage: number;
  proteins_percentage: number;
  carbohydrates_percentage: number;
}
