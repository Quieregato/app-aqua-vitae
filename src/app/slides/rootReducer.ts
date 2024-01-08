import { combineReducers } from '@reduxjs/toolkit';
import AnthropometricsSlices from './AnthropometricsSlices';
import AppointmentSlices from './AppointmentSlices';
import AuthSlices from './AuthSlices';
import FoodSlices from './FoodSlices';
import ItensSlice from './ItensSlices';
import PlanRecomendationSlice from './PlanSlices';
import TypeOfMealSlice from './TypeOfMealSlices';

export const rootReducer = combineReducers({
  auth: AuthSlices,
  anthropometric: AnthropometricsSlices,
  appointment: AppointmentSlices,
  plaRecomend: PlanRecomendationSlice,
  typeOfMeal: TypeOfMealSlice,
  food: FoodSlices,
  itens: ItensSlice,
});
