import { Feather } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import Colors from '../../Themes/Colors';
import { FontPrimary, FontSecondary } from '../../Themes/Fonts';
import { StyledPhoto } from './styled';

interface IPhoto {
  photo: string;
  name: string;
  subtitle: string;
}

export const PhotoProfile: React.FC<IPhoto> = ({ name, photo, subtitle }) => {
  return (
    <StyledPhoto>
      <Image
        style={{ height: 150, width: 150, borderRadius: 150, borderColor: 'white', borderWidth: 5 }}
        source={{ uri: photo }}
      />

      <View style={{ display: 'flex', alignItems: 'center', gap: -5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <FontPrimary size={20} color={Colors.COLORS.secondary} weight={500}>
            {name}
          </FontPrimary>
          <Feather name="edit-3" size={20} color={Colors.COLORS.primary} />
        </View>
        <FontSecondary size={15} color={Colors.COLORS.secondary} weight={200}>
          {subtitle}
        </FontSecondary>
      </View>
    </StyledPhoto>
  );
};
