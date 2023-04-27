import React, { useEffect, useState } from 'react';
import * as S from './Table.style';

const thList = ['NO.', '제목', '강의명', '평점', '멘토', '등록일'];
//   {
//     number: 1,
//     title: '완벽한 강의',
//     lectureName: 'AWS 초급',
//     rating: 5,
//     mentor: '소마인',
//     date: '2023-04-26',
//     pros: '열정적으로 가르치신다.\r\n이해하기 쉽게 잘 가르치신다.\r\n밥을 잘 사주신다.',
//     cons: '개인적인 이야기를 많이하신다\r\n',
//   },
//   {
//     number: 2,
//     title: '지각쟁이 멘토님',
//     lectureName: 'AWS 중급',
//     rating: 2,
//     mentor: '소마인',
//     date: '2023-04-26',
//     pros: '열정적으로 가르치신다.',
//     cons: '너무 빠르다\r\n지각을 너무 많이 하신다\r\n',
//   },
//   {
//     number: 3,
//     title: '최고의 강의',
//     lectureName: 'AWS 고급',
//     rating: 5,
//     mentor: '소마인',
//     date: '2023-04-26',
//     pros: '열정적으로 가르치신다.\r\n밥을 잘 사주신다.',
//     cons: '없다.',
//   },
// ];

const Table = ({ reviewList }) => {
  const [showDetail, setShowDetail] = useState(
    Array(reviewList.length + 10).fill(false)
  );

  const handleTitleClick = (e) => {
    setShowDetail(
      showDetail.map((value, idx) =>
        idx + '' === e.currentTarget.getAttribute('name')
          ? !showDetail[idx]
          : false
      )
    );
  };
  return (
    <S.TableBox>
      <S.Thead>
        <S.Tr>
          {thList.map((value) => (
            <S.Th key={value}>{value}</S.Th>
          ))}
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {reviewList.map((item) => {
          const {
            number,
            title,
            lectureName,
            rating,
            mentor,
            date,
            pros,
            cons,
          } = item;
          return (
            <React.Fragment key={number}>
              <S.Tr
                onClick={handleTitleClick}
                name={number}
                style={{ cursor: 'pointer' }}
              >
                <S.Td>{number}</S.Td>
                <S.Td>{title}</S.Td>
                <S.Td>{lectureName}</S.Td>
                <S.Td>{rating}</S.Td>
                <S.Td>{mentor}</S.Td>
                <S.Td>{date}</S.Td>
              </S.Tr>
              <S.Tr>
                {showDetail[number] ? (
                  <td colSpan="6" style={{ borderBottom: '1px solid #ddd' }}>
                    <S.ReviewBox>
                      <S.H2>"{title}"</S.H2>
                      <h4>좋았던 점</h4>
                      <S.Review>{pros}</S.Review>
                      <h4>아쉬운 점</h4>
                      <S.Review>{cons}</S.Review>
                    </S.ReviewBox>
                  </td>
                ) : null}
              </S.Tr>
            </React.Fragment>
          );
        })}
      </S.Tbody>
    </S.TableBox>
  );
};

export default Table;
