import swmb from 'assets/Images/swmb.png';
import * as S from './Header.style.js';

const nav_list = [
  {
    title: '연수생 소개',
    link: 'https://swmaestromain.notion.site/SW-257-8113ca06f78648a0ae771321c0a1a10e',
  },
  {
    title: 'Expert 소개',
    link: 'https://swmaestromain.notion.site/SW-Expert-57-6d9accc938294f4eafd654809d9fde94',
  },
  {
    title: '멘토 소개',
    link: 'https://swmaestromain.notion.site/SW-127-7edd09be410b47f68ca4c5616d4b9ca3',
  },
  {
    title: '멘토링 페이지',
    link: 'https://www.swmaestro.org/sw/mypage/mentoLec/list.do?menuNo=200046',
  },
];

const Header = () => {
  return (
    <S.Header>
      <S.HeaderLogo>
        <img src={swmb} alt="Logo"></img>
      </S.HeaderLogo>
      <S.HeaderMenu>
        <S.HeaderMenuList>
          {nav_list.map((value) => {
            const { title, link } = value;
            return (
              <li key={title}>
                <a href={link}>{title}</a>
              </li>
            );
          })}
        </S.HeaderMenuList>
      </S.HeaderMenu>
    </S.Header>
  );
};

export default Header;
