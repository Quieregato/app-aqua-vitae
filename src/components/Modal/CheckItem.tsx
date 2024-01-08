import { Text, View } from 'react-native';
import { IGlobalComponents } from '../../interfaces/IGlobal';
import Colors from '../../themes/Colors';
import { FontPrimaryUppercase, FontSecondary } from '../../themes/Fonts';
import { ButtonColorClick as ButtonPress } from '../Buttons/styled';
import { ContainerCheckItem, ContentCheckItem } from './styled';

interface IModalCheck extends IGlobalComponents {
  food: {
    name: string;
    period: string;
    id: string;
  };
  onSucess: (id: string) => void;
  onClose: () => void;
  openModal: boolean;
}

export const ModalCheckItem: React.FC<IModalCheck> = ({
  food: { name, period, id },
  onClose,
  onSucess,
  openModal,
}) => {
  return (
    <ContainerCheckItem
      animationType="slide"
      visible={openModal}
      transparent={true}
      onRequestClose={() => {
        onClose();
      }}>
      <ContentCheckItem
        style={{
          borderRadius: 15,
          elevation: 200,
          shadowColor: '#e9e9e9',
          shadowOpacity: 0,
          shadowRadius: 1,
        }}>
        <View style={{ alignItems: 'center' }}>
          <FontPrimaryUppercase size={18} weight={500}>
            Just checking...
          </FontPrimaryUppercase>
          <FontSecondary size={16}>Was consumed this food?</FontSecondary>
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            borderTopWidth: 1,
            borderTopColor: '#cecece',
            width: 300,
            height: 50,
            padding: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <FontSecondary size={15} weight={300}>
              Food:
            </FontSecondary>
            <FontSecondary size={11} weight={300}>
              {name || 'Not found'}
            </FontSecondary>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <FontSecondary size={15} weight={300}>
              Period:
            </FontSecondary>
            <FontSecondary size={11} weight={300}>
              {period || 'Not found'}
            </FontSecondary>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 170,
            marginTop: 15,
            justifyContent: 'space-between',
          }}>
          <ButtonPress color={Colors.COLORS.primary} onPress={() => onSucess(id)}>
            <Text style={{ color: Colors.COLORS.primary }}>Consumed</Text>
          </ButtonPress>
          <ButtonPress color={Colors.COLORS.error} onPress={() => onClose()}>
            <Text style={{ color: Colors.COLORS.error }}>Close</Text>
          </ButtonPress>
        </View>
      </ContentCheckItem>
    </ContainerCheckItem>
  );
};
