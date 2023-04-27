import { useState } from 'react';
import { Button } from './Content.stlye';
import { Select } from './Search.style';
import * as S from './WrtieReview.style';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const WriteReview = () => {
  const navigate = useNavigate();

  // 오늘날짜 가져오는 함수 ex)yyyy-mm-dd
  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
  };

  const todayDate = getTodayDate();
  const [review, setReview] = useState({
    lectureName: '',
    mentor: '',
    rating: '',
    title: '',
    pros: '',
    cons: '',
    date: todayDate,
  });

  console.log(review);
  const onBlur = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const isAllFill = () => {
    for (const value of Object.values(review)) {
      if (value === '') return false;
    }

    return true;
  };

  const handleSubmitClick = async () => {
    if (!isAllFill()) {
      alert('모든 칸을 작성해 주세요!');
      return;
    }

    await axios
      .post('/api/posts', review)
      .then((response) => {
        alert('등록되었습니다!');
        navigate('/home');
      })
      .catch((e) => {
        alert('실패!');
      });
  };

  return (
    <S.WriteBox>
      <S.Group>
        <S.Title>
          <span>*</span>강의명
        </S.Title>
        <S.Content>
          <S.Input name="lectureName" onBlur={onBlur}></S.Input>
        </S.Content>
      </S.Group>

      <S.Group>
        <S.Title>
          <span>*</span>멘토
        </S.Title>
        <S.Content>
          <S.Input name="mentor" onBlur={onBlur}></S.Input>
        </S.Content>
      </S.Group>

      <S.Group>
        <S.Title>
          <span>*</span>평점
        </S.Title>
        <S.Content>
          <Select defaultValue="3" name="rating" onBlur={onBlur}>
            {Array.from({ length: 6 }, (value, idx) => (
              <option key={idx}>{idx}</option>
            ))}
          </Select>
        </S.Content>
      </S.Group>

      <S.Group>
        <S.Title>
          <span>*</span>제목
        </S.Title>
        <S.Content>
          <S.Input name="title" onBlur={onBlur}></S.Input>
        </S.Content>
      </S.Group>

      <S.Group>
        <S.Title>
          <span>*</span>장점
        </S.Title>
        <S.Content>
          <S.Textarea cols="10" wrap="hard" name="pros" onBlur={onBlur} />
        </S.Content>
      </S.Group>

      <S.Group>
        <S.Title>
          <span>*</span>단점
        </S.Title>
        <S.Content>
          <S.Textarea cols="10" wrap="hard" name="cons" onBlur={onBlur} />
        </S.Content>
      </S.Group>

      <S.ButtonBox>
        <Button pen onClick={handleSubmitClick}>
          <span>등록</span>
        </Button>
        <Link to="/home">
          <Button>
            <span>목록</span>
          </Button>
        </Link>
      </S.ButtonBox>
    </S.WriteBox>
  );
};

export default WriteReview;
