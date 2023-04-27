import * as S from './Search.style';
import sch from 'assets/Images/btn-sch.png';
import reset from 'assets/Images/btn-reset.png';
import { useState } from 'react';

const Search = ({ searchReviewApi, getAllReviewApi }) => {
  const [searchData, setSearchData] = useState({
    category: '강의명',
    searchValue: '',
  });

  const onChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  return (
    <S.SearchBox>
      <S.SearchCategory>
        <S.Select name="category" onChange={onChange}>
          <option value="강의명">강의명</option>
          <option value="멘토">멘토</option>
        </S.Select>
      </S.SearchCategory>
      <S.SearchBar
        name="searchValue"
        onChange={onChange}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            searchReviewApi(searchData);
          }
        }}
        value={searchData.searchValue}
      ></S.SearchBar>
      <S.ButtonBox>
        <S.Button
          img={sch}
          color="blue"
          onClick={() => searchReviewApi(searchData)}
        >
          <span>검색</span>
        </S.Button>
        <S.Button
          img={reset}
          onClick={() => {
            getAllReviewApi();
            setSearchData({ ...searchData, searchValue: '' });
          }}
        >
          <span>초기화</span>
        </S.Button>
      </S.ButtonBox>
    </S.SearchBox>
  );
};

export default Search;
