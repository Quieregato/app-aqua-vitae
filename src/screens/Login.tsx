import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { thunkFetchLogin } from '../app/slides/AuthSlices/thunk';
import { AppDispatch, RootState } from '../app/store';
import { ButtonSubmit } from '../components/Buttons';
import { CardDefault } from '../components/Cards';
import { ContentLogin } from '../components/Contents/ContentLogin';
import { useForm } from '../hook/useForm';
import { FontPrimary, FontSecondaryBold } from '../themes/Fonts';
import { StyledAuth } from './styled';

export const LoginScreen = ({ navigation }: any) => {
  const { getForm, handleForm } = useForm({
    initialState: {
      username: '',
      password: '',
    },
  });
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const userAuth = useSelector((state: RootState) => state.auth.userAuth);

  useEffect(() => {
    if (userAuth) {
      navigation.push('home');
    }
  }, [userAuth]);

  const handleSubmitLogin = async () => {
    if (loading) return;
    if (getForm) {
      try {
        // Convert json in formData
        const formData = new FormData();

        formData.append('username', getForm.username);
        formData.append('password', getForm.password);

        await dispatch(thunkFetchLogin({ formData })).then((response) => {
          if (!response.payload?.errorMessage) {
            // showToast('Usuário autenticado com sucesso');
          } else {
            // showToast(validationByError({ type: response.payload.errorMessage }));
          }
        });

        // ToastAndroid.show(`Login sucesss ${email} `, ToastAndroid.SHORT);
      } catch (err) {
        // ToastAndroid.show('Error in login', ToastAndroid.SHORT);
      }
    }
  };
  return (
    <StyledAuth>
      <View>
        <Text>Loading: {loading ? 'Carregando' : 'Carregado'}</Text>
        <FontPrimary>AquaeVitae</FontPrimary>
        <FontSecondaryBold>Welcome back</FontSecondaryBold>
      </View>

      <View style={{ marginTop: 50, marginBottom: 30, gap: 150 }}>
        <CardDefault height={350}>
          <ContentLogin handleSaveData={handleForm} />
          <View
            style={{
              marginTop: 40,
              display: 'flex',
              alignItems: 'center',
            }}>
            <ButtonSubmit
              onSubmit={() => handleSubmitLogin()}
              text="Login"
              style={{
                width: 240,
              }}
            />
          </View>
        </CardDefault>
      </View>
    </StyledAuth>
  );
};
