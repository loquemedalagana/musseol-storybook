import React from "react";

const YadaDebutDate = new Date("1999/03/03");
const lapsed = new Date().getFullYear() - YadaDebutDate.getFullYear() + 1;

// about message modal
// 테스트 시에는 wrapper 생략함
export const AboutModalMessages = () => {
  return (
    <div className="modal-body" >
      <p>🎸 야다/전인혁Band 입덕 후 소통공간이 없어서 힘드셨죠?</p>
      <p>🎼 뮤직 썰! 프라이즈가 고민을 해결해 드립니다</p>
      <p>🎞 내가 보고 싶은 인혁 영상만 주제별로</p>
      <p>🎙 내가 커버한 곡 인혁님이 직접 피드백을</p>
      <p>🐬 데뷔 후 {lapsed}년간 못다했던 인혁님의 이야기까지!</p>
    </div>
  );
};

//
