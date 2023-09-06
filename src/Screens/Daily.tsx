import { ScrollView, View } from 'react-native';
import { CardDefault } from '../Components/Cards';
import { ConsumidedProd } from '../Components/Chip/Consumided';
import { HeaderDefault } from '../Components/Header';
import Colors from '../Themes/Colors';
import { FontSecondaryBold } from '../Themes/Fonts';
import { ContainerDaily, StyledPage } from './styled';

export const DailyScreen = (navigation: any) => {
  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Diário' }} />

      <ScrollView style={{ marginTop: 15, marginBottom: 100 }}>
        <ContainerDaily>
          <FontSecondaryBold size={15} color={Colors.COLORS.secondary} weight={400}>
            Boa noite Gustavo S.
          </FontSecondaryBold>

          <CardDefault></CardDefault>

          <FontSecondaryBold size={15} color={Colors.COLORS.secondary} weight={400}>
            Refeições consumidas
          </FontSecondaryBold>

          <View style={{ gap: 22 }}>
            <CardDefault height={68}>
              <ConsumidedProd
                hour={'7:30'}
                ingredients={['Torrada', 'Sumo de laranja']}
                title="Pequeno-Almoço"
              />
            </CardDefault>

            <CardDefault height={68}>
              <ConsumidedProd hour={'9:53'} ingredients={['Maça']} title="Lanche" />
            </CardDefault>

            <CardDefault height={68}>
              <ConsumidedProd
                hour={'7:30'}
                ingredients={['Torrada', 'Sumo de laranja']}
                title="Pequeno-Almoço"
              />
            </CardDefault>
          </View>
        </ContainerDaily>
      </ScrollView>
    </StyledPage>
  );
};
