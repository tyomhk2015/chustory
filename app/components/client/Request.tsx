import { useState } from 'react';
import styles from '../../../styles/Home.module.scss';

const Request = () => {
  const [isHovering, setIsHovering] = useState(false);
  const toggleRequestDialogue = () => {
    setIsHovering(!isHovering);
  };

  return (
    <>
      <div
        onMouseEnter={toggleRequestDialogue}
        onMouseLeave={toggleRequestDialogue}
        className={styles['request_wrapper']}
      >
        <svg className={styles['request_icon']} viewBox='0 0 24 24'>
          <path d='M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2m1 14.5h-2v-2h2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5'></path>
        </svg>
        {isHovering && (
          <div className={styles['request_content']}>
            <p>
              Chustory를 구축 및 가동에 필요한 외부 서비스들이
              무료 플랜을 폐지했습니다.
              <br />
              <br />
              미등록 된 캐릭터의 스토리 번역이 필요하시면 소정의 의뢰비를 받은 후에 번역을 진행해드리겠습니다.
              <br />
              <br />
              <b>▶ 캐릭터 스토리 번역 의뢰비</b>: 캐릭터 당 10,000 KRW
              <br />
              <b>▶ 의뢰 신청 이메일</b>: <a href='mailto:chustory2022@gmail.com'>chustory2022@gmail.com</a>
              <br />
              <br />
              의뢰(의뢰비 포함)를 받은 후, 약 1주일 이내에 작업하여 번역을 등록해놓도록 하겠습니다.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Request;
