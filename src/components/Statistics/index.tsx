import { Dimensions, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { FontPrimary } from '../../themes/Fonts';
import { ContainerStatistics } from './styled';

interface IStatistics {
  meta: number;
  currency: number;
}

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#53B458',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '',
  backgroundGradientToOpacity: 0.5,
  //   rgba(83, 180, 88, 1)
  color: (opacity = 0) => `rgba(0, 190, 88, ${opacity})`,
  strokeWidth: 1, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

export const CardStatistic: React.FC<IStatistics> = ({ currency, meta }) => {
  return (
    <ContainerStatistics>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '80%',
          width: '50%',
        }}>
        <FontPrimary size={15} color="black" weight={600}>
          Meta:
          <FontPrimary size={15} color="black" weight={400}>
            {meta} kg
          </FontPrimary>
        </FontPrimary>
        <FontPrimary size={15} color="black" weight={600}>
          Peso Atual:
          <FontPrimary size={15} color="black" weight={400}>
            {currency} kg
          </FontPrimary>
        </FontPrimary>
      </View>

      <ProgressChart
        data={{
          labels: ['Meta'], // optional
          data: [(currency / 100) * meta],
        }}
        width={150}
        height={80}
        strokeWidth={11}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={true}
      />
    </ContainerStatistics>
  );
};
