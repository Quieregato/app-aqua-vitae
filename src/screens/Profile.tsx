import {
  AntDesign,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { ButtonRedirect } from '../components/Buttons/Redirect';
import { Percent } from '../components/Chip/Percent';
import { PhotoProfile } from '../components/Chip/PhotoProfile';
import { HeaderDefault } from '../components/Header';
import Colors from '../themes/Colors';
import { ContainerProfile, StyledPage } from './styled';

export const ProfileScreen = (navigation: any) => {
  const userAuth = useSelector((state: RootState) => state.auth.userAuth);

  return (
    <StyledPage>
      <HeaderDefault {...{ navigation, title: 'Perfil' }} />

      <ScrollView style={{ marginTop: 15, marginBottom: 100 }}>
        <ContainerProfile>
          <View>
            <PhotoProfile
              name={userAuth?.email || ''}
              subtitle={userAuth?.role || ''}
              photo={userAuth?.profile_photo || ''}
            />
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Percent color="red" name="Fat" valueG={18} percent={20} />
            <Percent color="green" name="Carb" valueG={18} percent={20} />
            <Percent color="orange" name="Prot" valueG={18} percent={20} />
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
            <ButtonRedirect
              Icon={<Foundation name="results" size={24} color={Colors.COLORS.primary} />}
              route=""
              text="Resultados"
            />
          </View>
        </ContainerProfile>
      </ScrollView>
    </StyledPage>
  );
};
