import { useState } from "react";

interface StateType {
  id: number
  message: string
}

const Sample = () => {
  const [state, setState] = useState<StateType[]>();
  // DB에서 기존 데이터를 가져왔다.
  const 기존데이터 = [
    {
      id: 1,
      message: 'DB에서 불러온 데이터 1',
    },
    {
      id: 2,
      message: 'DB에서 불러온 데이터 2',
    },
  ];

  // 방금 등록 페이지에서 새 데이터를 작성했다.
  const 방금_작성한_새_데이터 = {
    id: 3,
    message: '방금 페이지에서 작성한 데이터',
  };

  // DB에서 가져온 기존 데이터랑 방금 작성한 데이터를 합친다.
  const 두_데이터_합한것 = [...기존데이터, 방금_작성한_새_데이터];
  setState(두_데이터_합한것);

  console.log(state);
  return <>Sample</>;
};
