import { SearchBarContainer } from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <input placeholder="Pesquisar eventos..."></input>
      <FaSearch />
    </SearchBarContainer>
  );
};

export default SearchBar;
