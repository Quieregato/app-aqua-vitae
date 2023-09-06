import { View } from 'react-native';
import { ButtonSubmit } from '../Components/Buttons';
import { CardDefault } from '../Components/Cards';
import { ContentLogin } from '../Components/Contents/ContentLogin';
import { FontPrimary, FontSecondaryBold } from '../Themes/Fonts';
import { StyledAuth } from './styled';

export const LoginScreen = () => {
  return (
    <StyledAuth>
      <View>
        <FontPrimary>AquaeVitae</FontPrimary>
        <FontSecondaryBold>Welcome back</FontSecondaryBold>
      </View>

      <View style={{ marginTop: 50, marginBottom: 30, gap: 150 }}>
        <CardDefault>
          <ContentLogin />
        </CardDefault>

        <ButtonSubmit text="Login" />
      </View>
    </StyledAuth>
  );
};
