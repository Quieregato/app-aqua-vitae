import { Feather } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { IGlobalComponents } from '../../interfaces/IGlobal';
import Colors from '../../themes/Colors';
import { FontPrimary } from '../../themes/Fonts';
import { StyledPlan } from './styled';
interface IPlanDetail extends IGlobalComponents {
  text: string;
  listDetail: string[];
  onChange: (index: number) => void;
  onRedirect?: () => void;
}

export const PlanDetail: React.FC<IPlanDetail> = ({ text, listDetail, onChange, onRedirect }) => {
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
                {item}
              </FontPrimary>
              <FontPrimary size={14} weight={500} color={Colors.COLORS.gray}>
                {''}
              </FontPrimary>
            </View>
            <Feather
              onPress={(e) => {
                onChange(index);
                if (onRedirect) {
                  onRedirect();
                }
              }}
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
