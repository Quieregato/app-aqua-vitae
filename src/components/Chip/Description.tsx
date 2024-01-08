import { useState } from 'react';
import { Text, View } from 'react-native';
import Colors from '../../themes/Colors';
import { FontPrimary, FontSecondary } from '../../themes/Fonts';
import { ButtonColorClick as ButtonPress } from '../Buttons/styled';
import { ModalCheckItem } from '../Modal/CheckItem';
import { StyledDescription } from './styled';

interface IDescription {
  title: string;
  quantity: {
    value: number;
    name: string;
  };
  id: string;
  period: string;
  percentsKcal: number;
}

export const DescriptionProd: React.FC<IDescription> = ({
  percentsKcal,
  quantity,
  id,
  title,
  period,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);

  const handleSuccess = (id: string) => {
    setOpenModal(false);
  };

  return (
    <StyledDescription>
      <View style={{ gap: 5 }}>
        <FontPrimary size={15} color={Colors.COLORS.secondary} weight={300}>
          {title}
        </FontPrimary>
        <FontSecondary
          color={Colors.COLORS.gray}
          weight={300}
          size={14}>{`${quantity.value} ${quantity.name}`}</FontSecondary>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <FontPrimary
          size={14}
          color={Colors.COLORS.primary}
          weight={400}>{`${percentsKcal} kcal`}</FontPrimary>
        <ButtonPress width={'70px'} color="white" onPress={() => setOpenModal(!openModal)}>
          <Text>Check</Text>
        </ButtonPress>
      </View>
      <ModalCheckItem
        food={{
          id: id,
          name: title?.length > 20 ? `${title.substring(0, 25)}...` : title,
          period: period,
        }}
        onSucess={handleSuccess}
        onClose={handleClose}
        openModal={openModal}
      />
    </StyledDescription>
  );
};
