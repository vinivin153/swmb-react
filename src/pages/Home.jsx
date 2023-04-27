import axios from 'axios';
import { Button, ButtonBox, Content } from 'containers/Content.stlye';
import Search from 'containers/Search';
import Table from 'containers/Table';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);

  // 모든 리뷰 리스트 가져오는 API
  const getAllReviewApi = async () => {
    const url = '/api/posts';
    await axios
      .get(url)
      .then((response) => {
        setReviewList(response.data.sort((a, b) => b.number - a.number));
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        console.log('리뷰 목록을 가져오는데 실패했습니다.');
      });
  };

  // 모든 리스트 가져오기
  useEffect(() => {
    getAllReviewApi();
  }, []);

  if (loading) return <div>로딩중..!</div>;

  // 검색 버튼 눌렀을 때 해당 리스트 가져오는 API
  const searchReviewApi = (searchData) => {
    const url = '/api/posts/condition';
    axios
      .post(url, searchData)
      .then((response) => {
        setReviewList(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log('리뷰 목록을 가져오는데 실패했습니다.');
      });
  };

  return (
    <Content>
      <Search
        searchReviewApi={searchReviewApi}
        getAllReviewApi={getAllReviewApi}
      />
      <ButtonBox>
        <Link to="/WriteReview" state={{}}>
          <Button>
            <span>글쓰기</span>
          </Button>
        </Link>
      </ButtonBox>
      <Table reviewList={reviewList} />
    </Content>
  );
};

export default Home;
