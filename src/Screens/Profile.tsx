import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, View } from 'react-native';
import { ButtonRedirect } from '../Components/Buttons/Redirect';
import { Percent } from '../Components/Chip/Percent';
import { HeaderDefault } from '../Components/Header';
import Colors from '../Themes/Colors';
import { ContainerProfile, StyledPage } from './styled';
export const ProfileScreen = (navigation: any) => {
  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Perfil' }} />

      <ScrollView style={{ marginTop: 15, marginBottom: 100 }}>
        <ContainerProfile>
          {/* <View>
            <PhotoProfile
              name="Gustavo Silva"
              subtitle="Dieta 2"
              photo="https://avatars.githubusercontent.com/u/57011784?v=4"
            />
          </View> */}

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Percent color="red" name="Fat: 18g" percent={20} />
            <Percent color="green" name="Fat: 18g" percent={20} />
            <Percent color="orange" name="Fat: 18g" percent={20} />
          </View>

          <View style={{ gap: 19 }}>
            <ButtonRedirect
              Icon={
                <MaterialCommunityIcons
                  name="shield-alert"
                  size={24}
                  color={Colors.COLORS.primary}
                />
              }
              route=""
              text="Restrições"
            />
            <ButtonRedirect
              Icon={<AntDesign name="areachart" size={24} color={Colors.COLORS.primary} />}
              route=""
              text="Objetivos"
            />
            <ButtonRedirect
              Icon={<AntDesign name="menufold" size={24} color={Colors.COLORS.primary} />}
              route=""
              text="Planejamento"
            />
            <ButtonRedirect
              Icon={<Fontisto name="doctor" size={24} color={Colors.COLORS.primary} />}
              route=""
              text="Consultas"
            />
            <ButtonRedirect
              Icon={<Ionicons name="document-text" size={24} color={Colors.COLORS.primary} />}
              route=""
              text="Ficha cliníca"
            />
          </View>
        </ContainerProfile>
      </ScrollView>
    </StyledPage>
  );
};
