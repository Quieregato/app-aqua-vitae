import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPlanHasDay } from '../app/slides/NutritionalSlices';
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
import { FontPrimary, FontSecondaryBold } from '../themes/Fonts';
import { ContainerHome, StyledPage } from './styled';

export const HomeScreen = (navigation: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigator = navigation.navigation;
  const authUser = useSelector((state: RootState) => state.auth.userAuth);
  const [typesOfMeal, setTypesOfMeal] = useState<string[] | undefined>(undefined);
  const [dateToday, setDateToday] = useState<string>('');

  const nutritional = useSelector((state: RootState) => state.nutritionalPlan.nutritionalPlan);
  const nutritionalOfPlanMeal = useSelector(
    (state: RootState) => state.nutritionalPlan.nutritionalPlanHasMeal
  );

  const [selectedDate, setSelectedDate] = useState<{
    selected: string | undefined;
    listDate: string[];
  }>({
    selected: undefined,
    listDate: [],
  });

  useEffect(() => {
    const dates = [...new Set(nutritionalOfPlanMeal?.map((item) => item.meal_date))];
    setSelectedDate({
      selected: dates[dates.length - 1],
      listDate: dates,
    });
  }, [nutritionalOfPlanMeal]);

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
    const itens = [
      ...new Set(
        nutritionalOfPlanMeal?.filter(
          (item) => item.meal_date == selectedDate.selected && item.meals_of_plan.description
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
  }, [nutritionalOfPlanMeal, selectedDate.selected]);

  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Início' }} />

      <ScrollView style={{ marginTop: 15, marginBottom: 100 }}>
        <CardStatistic meta={82} currency={90} />
        <ContainerHome>
          <FontSecondaryBold size={15} color={Colors.COLORS.secondary} weight={400}>
            Plano nutricional
          </FontSecondaryBold>

          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Picker
              selectedValue={selectedDate.selected}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedDate({
                  selected: itemValue,
                  listDate: selectedDate.listDate,
                })
              }>
              {selectedDate.listDate.map((date, index) => (
                <Picker.Item label={date} value={date} />
              ))}
            </Picker>
          </View>
          <CardDefault height={!typesOfMeal ? 60 : 350}>
            {typesOfMeal ? (
              <PlanDetail
                onChange={(e) => e}
                onRedirect={() =>
                  navigator.navigate('widget', {
                    listOfDate: selectedDate.listDate,
                    dateSelect: selectedDate.selected,
                  })
                }
                listDetail={typesOfMeal || []}
                text={`Hoje - ${selectedDate.selected}`}
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
