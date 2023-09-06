import { ScrollView } from 'react-native';
import { CardDefault } from '../Components/Cards';
import { PlanDetail } from '../Components/Chip/PlanDetail';
import { HeaderDefault } from '../Components/Header';
import Colors from '../Themes/Colors';
import { FontSecondaryBold } from '../Themes/Fonts';
import { ContainerHome, StyledPage } from './styled';

export const HomeScreen = (navigation: any) => {
  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Início' }} />

      <ScrollView style={{ marginTop: 15, marginBottom: 100 }}>
        <ContainerHome>
          <FontSecondaryBold size={15} color={Colors.COLORS.secondary} weight={400}>
            Plano nutricional
          </FontSecondaryBold>

          <CardDefault height={360}>
            <PlanDetail
              onChange={(e) => console.log(e)}
              listDetail={[
                { hour: '7:00', title: 'Pequeno-Almoço' },
                { hour: '10:00', title: 'Lanche' },
                { hour: '13:00', title: 'Almoço' },
                { hour: '16:00', title: 'Lanche' },
                { hour: '19:00', title: 'Jantar' },
              ]}
              text="Hoje"
            />
          </CardDefault>
        </ContainerHome>
      </ScrollView>
    </StyledPage>
  );
};
