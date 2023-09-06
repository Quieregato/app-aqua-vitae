import { ScrollView, View } from 'react-native';
import { CardDefault } from '../Components/Cards';
import { DescriptionProd } from '../Components/Chip/Description';
import { HeaderDefault } from '../Components/Header';
import { SearchValue } from '../Components/Texts/Search';
import Colors from '../Themes/Colors';
import { FontPrimary, FontSecondaryBold } from '../Themes/Fonts';
import { ContainerNutricional, StyledPage } from './styled';

const dataTemp = [
  {
    name: 'Atum',
    percent: 250,
    quantity: {
      name: 'Lata',
      value: 1,
    },
  },
  {
    name: 'Tomate',
    percent: 320,
    quantity: {
      name: 'Unidade',
      value: 1,
    },
  },
  {
    name: 'Alface',
    percent: 68,
    quantity: {
      name: 'Folhas',
      value: 2,
    },
  },
  {
    name: 'Ovo Cozido',
    percent: 2,
    quantity: {
      name: 'Unidade',
      value: 1,
    },
  },
];

export const NutricionalScreen = (navigation: any) => {
  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Plano nutricional' }} />

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

          <FontSecondaryBold size={15} color={Colors.COLORS.secondary} weight={400}>
            Almoço
          </FontSecondaryBold>

          {dataTemp.map((item) => (
            <CardDefault height={100}>
              <DescriptionProd
                percentsKcal={item.percent}
                quantity={item.quantity}
                title={item.name}
              />
            </CardDefault>
          ))}
        </ContainerNutricional>
      </ScrollView>
    </StyledPage>
  );
};
