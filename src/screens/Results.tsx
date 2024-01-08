import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CardDefault } from '../components/Cards';
import { ContentResult } from '../components/Contents/ContentResults';
import { HeaderDefault } from '../components/Header';
import Colors from '../themes/Colors';
import { FontSecondary, FontSecondaryBold } from '../themes/Fonts';
import { ContainerResults, StyledPage } from './styled';

export const ResultsScreen = (navigation: any) => {
  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Resultados' }} />

      <ScrollView style={{ marginTop: 15, marginBottom: 100 }}>
        <ContainerResults>
          <View style={{ display: 'flex', gap: 7 }}>
            <FontSecondaryBold size={15} color={Colors.COLORS.secondary} weight={400}>
              Parabéns !!!
            </FontSecondaryBold>
            <FontSecondary size={14} weight={200}>
              Atingistes os objetivos!
            </FontSecondary>
          </View>

          <CardDefault height={200}>
            <ContentResult title="Antes" bodyFat={54} bodyWater={50} visceralFat={10} weight={76} />
          </CardDefault>

          <CardDefault height={200}>
            <ContentResult title="Depois" bodyFat={48} bodyWater={60} visceralFat={9} weight={56} />
          </CardDefault>
        </ContainerResults>
      </ScrollView>
    </StyledPage>
  );
};
