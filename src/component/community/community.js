import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../layout/Layout";


function Community() {

  return (
    <Layout>
    

 <div class="row mb-2">

    <div class="col-md-5">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">유저이름</strong>
          <h3 class="mb-0">제목</h3>
          <div class="mb-1 text-muted">생성일시</div>
          <p class="mb-auto">내용</p>
          <p>조회수 : 123</p>
          <a href="#" class="stretched-link">Continue Reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">책 사진</text></svg>

        </div>
      </div>
    </div>
  </div>
    </Layout>

  );
}

export default Community;
