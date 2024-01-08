import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import storage from '../app/services/data/storage';
import { insertList, resetList } from '../app/slides/NutritionalSlices';
import { RootState } from '../app/store';
import { CardDefault } from '../components/Cards';
import { DescriptionProd } from '../components/Chip/Description';
import { HeaderDefault } from '../components/Header';
import { SearchValue } from '../components/Texts/Search';
import Colors from '../themes/Colors';
import { FontPrimary, FontSecondaryBold } from '../themes/Fonts';
import { ContainerNutricional, StyledPage } from './styled';

export const NutricionalScreen = (navigation: any) => {
  const planHasDate = useSelector(
    (state: RootState) => state.nutritionalPlan.nutritionalPlanHasDay
  );
  const listT = useSelector((state: RootState) => state.nutritionalPlan.listTemp);
  const dispatch = useDispatch();
  const handleGetFood = async (id: string) => {
    const token = await storage.getData('token');

    const { data } = await fetch(
      `http://aquaevitae1.ipb.pt:8080/meals-options/get?skip=1&take=100&search=nutritional_plan_has_meal_id%3A${id}&columns=nutritional_plan_has_meal&columns=item`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((re) => re.json());
    dispatch(insertList({ name: data[0].item.description, id }));
  };
  const handleGetPlan = () => {
    planHasDate?.list_plan_as_meal.map(async (item: any) => handleGetFood(item.id));
  };
  useEffect(() => {
    dispatch(resetList());
    handleGetPlan();
  }, [planHasDate]);

  const handleGetItem = (id: string) => {
    return listT.filter((item: any) => item?.id == id)[0]?.name;
  };
  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Plano nutricional' }} />
      {listT.length !== planHasDate?.list_plan_as_meal.length && (
        <View
          style={{
            zIndex: 111111,
            position: 'absolute',
            backgroundColor: '#cececea9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )}
      <ScrollView style={{ marginTop: 15, marginBottom: 100 }}>
        <ContainerNutricional>
          <SearchValue placeholder="Search" />

          <View style={{ gap: 10, marginBottom: 10 }}>
            <FontPrimary size={17} color={Colors.COLORS.secondary} weight={400}>
              Obserações
            </FontPrimary>

            <FontSecondaryBold size={13} color={Colors.COLORS.secondary} weight={300}>
              Descrição
            </FontSecondaryBold>
          </View>

          {planHasDate?.list_plan_as_meal?.map((item) => (
            <View key={item.id}>
              <FontPrimary size={14} color={Colors.COLORS.secondary} weight={400}>
                {item.name}
              </FontPrimary>

              <CardDefault height={130}>
                <DescriptionProd
                  id={item.id}
                  period={item.name}
                  title={handleGetItem(item.id)}
                  percentsKcal={0}
                  quantity={{ name: 'Calc', value: 0 }}
                />
              </CardDefault>
            </View>
          ))}
        </ContainerNutricional>
      </ScrollView>
    </StyledPage>
  );
};
