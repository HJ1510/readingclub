import axios from 'axios';

export async function getComments({ order = 'createdAt' }) {
  // 쿼리 지정(정렬)
  const query = `order=${order}`;
  const response = await fetch(
    `https://learn.codeit.kr/4514/film-reviews?${query}`
  );
  if (!response.ok) {
    throw new Error('코멘트를 불러오는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function createComment(formData) {
  const response = await fetch('https://learn.codeit.kr/4514/film-reviews/', {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('생성하는데 실패하였습니다');
  }
  const body = await response.json();
  return body;
}

export async function updateComment(id, formData) {
  try {
    const response = await axios.put(
      `https://learn.codeit.kr/4514/film-reviews/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error('수정하는데 실패하였습니다');
  }
}

export async function deleteComment(id) {
  try {
    const response = await axios.delete(
      `https://learn.codeit.kr/4514/film-reviews/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error('삭제에 실패하였습니다');
  }
}

// 모든 모임 조회
export async function getMeetings() {
  try {
    const response = await axios.get('/api/meeting/all');
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

// 특정 모임 조회
export async function getMeetingByNo(no) {
  try {
    const response = await axios.get(`/api/meeting/${no}`);
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

// 모임 생성
export async function createMeetings(formData) {
  try {
    const response = await axios.post('/api/meeting/create', formData);
    return response.data;
  } catch (error) {
    throw new Error('생성하는데 실패하였습니다');
  }
}

// 유저별 모임 조회
export async function getUserMeetings(userId) {
  try {
    const response = await axios.get(`/api/users/${userId}/meetings`);
    return response.data;
  } catch (error) {
    throw new Error('유저의 모임 데이터를 가져오지 못했습니다');
  }
}

// 모든 모임 회차 조회
export async function getAllOrders() {
  try {
    const response = await axios.get('/api/meeting/allorders');
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

// 모임별 회차 조회
export async function getOrdersByNo(no) {
  try {
    const response = await axios.get(`/api/meeting/${no}/orders`);
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

export async function insertMember(no, body) {
  try {
    const response = await axios.post(`/api/meeting/${no}/register`, body);
    return response.data;
  } catch (error) {
    throw new Error('생성하는데 실패하였습니다');
  }
}

export async function getAllMembersByNo(no) {
  try {
    const response = await axios.get(`/api/meeting/${no}/members`);
    return response.data;
  } catch (error) {
    throw new Error('모임 데이터를 불러오는데 실패했습니다');
  }
}

// FAQArticle 작성
export async function insertFAQArticle(no, formData) {
  try {
    const response = await axios.post(
      `/api/meeting/${no}/faqArticle/create`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error('FAQArticle 게시글 생성하는데 실패하였습니다');
  }
}

// 모임별 전체 FAQArticle 조회
export async function getFAQArticlesByMeetingNo(no) {
  try {
    const response = await axios.get(`/api/meeting/${no}/faqArticle`);
    return response.data;
  } catch (error) {
    throw new Error('FAQArticle 리스트를 불러오는데 실패했습니다');
  }
}

// 특정 FAQArticle 조회
export async function getFAQArticleById(no, id) {
  try {
    const response = await axios.get(`/api/meeting/${no}/faqArticle/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('FAQArticle 게시글 조회하는데 실패하였습니다');
  }
}

// 특정 FAQArticle 삭제
export async function deleteFAQArticleById(no, id) {
  try {
    const response = await axios.delete(`/api/meeting/${no}/faqArticle/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('FAQArticle 게시글 삭제하는데 실패하였습니다');
  }
}

// 특정 FAQArticle 수정
export async function updateFAQArticleById({ no, id }, formData) {
  try {
    const response = await axios.patch(
      `/api/meeting/${no}/faqArticle/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error(error); // 오류 메시지 출력
    throw new Error('FAQArticle 게시글 수정하는데 실패하였습니다');
  }
}

// reviewArticle 작성
export async function insertReviewArticle(no, formData) {
  try {
    const response = await axios.post(
      `/api/meeting/${no}/reviewArticle/create`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error('reviewArticle 게시글 생성하는데 실패하였습니다');
  }
}

// 모임별 전체 reviewArticle 조회
export async function getReviewArticlesByMeetingNo(no) {
  try {
    const response = await axios.get(`/api/meeting/${no}/reviewArticle`);
    return response.data;
  } catch (error) {
    throw new Error('reviewArticle 리스트를 불러오는데 실패했습니다');
  }
}

// 특정 reviewArticle 조회
export async function getReviewArticleById(no, id) {
  try {
    const response = await axios.get(`/api/meeting/${no}/reviewArticle/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('reviewArticle 게시글 조회하는데 실패하였습니다');
  }
}

// 특정 reviewArticle 삭제
export async function deleteReviewArticleById(no, id) {
  try {
    const response = await axios.delete(`/api/meeting/${no}/reviewArticle/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('FAQArticle 게시글 삭제하는데 실패하였습니다');
  }
}