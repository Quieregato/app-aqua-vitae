import { Feather } from '@expo/vector-icons';
import { ScrollView, View } from 'react-native';
import { IGlobalComponents } from '../../Interfaces/IGlobal';
import Colors from '../../Themes/Colors';
import { FontPrimary } from '../../Themes/Fonts';
import { StyledPlan } from './styled';
interface IPlanDetail extends IGlobalComponents {
  text: string;
  listDetail: {
    title: string;
    hour: string;
  }[];
  onChange: (index: number) => void;
}

export const PlanDetail: React.FC<IPlanDetail> = ({ text, listDetail, onChange }) => {
  return (
    <StyledPlan>
      <FontPrimary size={15} weight={300} color={Colors.COLORS.secondary}>
        {text}
      </FontPrimary>

      <ScrollView style={{ marginTop: 15, marginBottom: 15 }}>
        {listDetail.map((item, index) => (
          <View
            key={index}
            style={{
              paddingBottom: 11,
              marginTop: 11,
              borderColor: Colors.COLORS.gray,
              borderWidth: 0.3,
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <FontPrimary size={14} weight={400} color={Colors.COLORS.secondary}>
                {item.title}
              </FontPrimary>
              <FontPrimary size={14} weight={500} color={Colors.COLORS.gray}>
                {item.hour}
              </FontPrimary>
            </View>
            <Feather
              onPress={(e) => onChange(index)}
              name="edit"
              size={20}
              color={Colors.COLORS.secondary}
            />
          </View>
        ))}
      </ScrollView>
    </StyledPlan>
  );
};
