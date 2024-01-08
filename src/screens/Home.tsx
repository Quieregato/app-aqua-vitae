import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  thunkFetchGetNutritionalHasPlanByNutritionalPlanId,
  thunkFetchGetNutritionalPlanByUser,
} from '../app/slides/NutritionalSlices/thunk';
import { AppDispatch, RootState } from '../app/store';
import { CardDefault } from '../components/Cards';
import { PlanDetail } from '../components/Chip/PlanDetail';
import { HeaderDefault } from '../components/Header';
import { CardStatistic } from '../components/Statistics';
import Colors from '../themes/Colors';

import { setPlanHasDay } from '../app/slides/NutritionalSlices';
import { FontPrimary, FontSecondaryBold } from '../themes/Fonts';
import { ContainerHome, StyledPage } from './styled';

export const HomeScreen = (navigation: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const authUser = useSelector((state: RootState) => state.auth.userAuth);
  const [typesOfMeal, setTypesOfMeal] = useState<string[] | undefined>(undefined);
  const [dateToday, setDateToday] = useState<string>('2023-12-04');

  const nutritional = useSelector((state: RootState) => state.nutritionalPlan.nutritionalPlan);
  const nutritionalOfPlanMeal = useSelector(
    (state: RootState) => state.nutritionalPlan.nutritionalPlanHasMeal
  );

  useEffect(() => {
    dispatch(thunkFetchGetNutritionalPlanByUser({ search: authUser?.id, columns: 'user' }));
  }, [authUser]);

  useEffect(() => {
    if (nutritional) {
      dispatch(
        thunkFetchGetNutritionalHasPlanByNutritionalPlanId({
          search: nutritional[0]?.id,
          take: 50,
          skip: 1,
        })
      );
    }
  }, [nutritional]);

  const handleGetAll = () => {
    const date = new Date();

    let new_date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const itens = [
      ...new Set(
        nutritionalOfPlanMeal?.filter(
          (item) => item.meal_date == dateToday && item.meals_of_plan.description
        )
      ),
    ];
    if (itens.length > 0) {
      let itens_simplify = itens.map((item) => item.meals_of_plan.description);

      dispatch(
        setPlanHasDay({
          date: dateToday,
          list_plan_as_meal: itens.map((item) => {
            return {
              id: item.id,
              name: item.meals_of_plan.description,
            };
          }),
        })
      );
      setTypesOfMeal(itens_simplify);
    } else {
      setTypesOfMeal(undefined);
    }
  };

  useEffect(() => {
    handleGetAll();
  }, [nutritionalOfPlanMeal]);

  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Início' }} />

      <ScrollView style={{ marginTop: 15, marginBottom: 100 }}>
        <CardStatistic meta={82} currency={90} />
        <ContainerHome>
          <FontSecondaryBold size={15} color={Colors.COLORS.secondary} weight={400}>
            Plano nutricional
          </FontSecondaryBold>

          <CardDefault height={!typesOfMeal ? 60 : 350}>
            {typesOfMeal ? (
              <PlanDetail
                onChange={(e) => e}
                listDetail={typesOfMeal || []}
                text={`Hoje - ${dateToday}`}
              />
            ) : (
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  display: 'flex',
                }}>
                <FontPrimary size={15} weight={300} color={Colors.COLORS.secondary}>
                  Sem planejamento p/ {dateToday}
                </FontPrimary>
              </View>
            )}
          </CardDefault>
        </ContainerHome>
      </ScrollView>
    </StyledPage>
  );
};
