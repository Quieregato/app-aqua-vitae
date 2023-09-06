import { AntDesign } from '@expo/vector-icons';
import { IGlobalComponents } from '../../Interfaces/IGlobal';
import Colors from '../../Themes/Colors';
import { StyledSearch, StyledTextSearch } from './styled';

interface ISearch extends IGlobalComponents {
  placeholder: string;
}

export const SearchValue: React.FC<ISearch> = ({ placeholder }) => {
  return (
    <StyledTextSearch style={{ backgroundColor: Colors.COLORS.white }}>
      <AntDesign name="search1" size={20} color={Colors.COLORS.primary} />
      <StyledSearch placeholder={placeholder}></StyledSearch>
    </StyledTextSearch>
  );
};
