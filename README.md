# CHUSTORY 📚

🎮 <a href="https://chunithm.sega.jp/" target="_blank" rel="noopener noreferrer">츄니즘</a>에 등장하는 캐릭터들의 스토리를 한국어/영어 볼 수 있는 웹사이트 입니다. 📖

⚠️ChuStory is an unofficial CHUNITHM-fan-made site.<br>
⚠️Copyright of all illustrations and contents, related to CHUNITHM, are owned and reserved by ©SEGA

## 구동 화면 ⚙️

- PC 🖥️

![pc](https://user-images.githubusercontent.com/35278730/195573366-c0e44421-681c-4f49-aa6e-73ae85613e10.gif)

- SP 📱

![sp](https://user-images.githubusercontent.com/35278730/195573418-18e11da5-4f99-49de-ba40-670a410df736.gif)

## 왜 만들었나요? 💡

> TLDR: 일본어 컨텐츠를 읽을 수 없는 분들을 위해 제작.

츄니즘을 즐기는 유저들 중에 캐릭터 스토리에 관심을 가지시는 분들이 계시지만, 캐릭터 스토리는 일본어로 되어 있어서 일본어를 못하시는 분들은 읽지 못하는 불편함이 있었습니다. 그리고 캐릭터 스토리가 '번역되어 있으면 좋겠다'라는 의견들을 몇 번 목격한 이후 한국어와 영어로도 캐릭터 스토리를 읽을 수 있게 만들어 보기로 했습니다.

## 기술스택 🧰

Type  | Name
------------- | -------------
Frontend 🖥️ | Next.js, SCSS
Backend(API) ⚙️ | <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>
Middleware 🛠️ | <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">Prisma</a>
Database 💾 | <a href="https://planetscale.com/" target="_blank" rel="noopener noreferrer">PlanetScale</a>
Deploy & CD/CI 📦 | <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>
E2E Test 🧪 | <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">Cypress</a>

## 왜 이런 기술을 썼나요? ✨

> TLDR: 1달 내에 빠르게 출시하기 위함.

'각 기술별 장단점을 파악한 뒤에 기술을 선정한 것이다'라는 결론을 원하시는 분들은 이 섹션을 스킵하셔도 됩니다.

본 프로젝트는 기획, 화면 기획, 개발, 출시, 잠재/실제 유저들에게 피드백 받는 등을 1달 내로 달성해야하는 기한을 정해두었습니다.

위 목표를 기한 내에 달성하기 위해서 들어는 봤으나 실사용이 없거나 적었던 기술들을 사용하기로 결정했습니다.

## 문제와 해결 과성 🚑

> .env 파일과 서비스 배포 🔧

로컬에서는 `.env`파일을 `.gitignore`에 추가하여 작업했습니다. 배포할 때가 오자 Vercel에서는 github 리포지토리를 통째로 가지고 와서 배포 작업을 대신해준다고 했는데, github 리포지토리에 `.env`가 없는데 그러면 API키가 담긴 것들은 어떻게 배포해야하는지 명확하지 않을 때가 있었습니다. 

다행히도 Vercel 공식 문서에 `.env`의 설정은 배포시 혹은 배포 후 설정 페이지에서 수정 가능하다고 하며 key-value 식으로 직접 입력해 넣으라고 설명히 적혀있었습니다. 

덕분에 DB의 `read only` 권한만을 가진 API를 외부에 노출시키지 않으면서 배포를 할 수 있었습니다.

> Google Analytics 🔧

(2022/10/13)
GA를 도입하려고 시도했는데, 가입부터 막히는 문제가 발생했습니다.
어떻게 설정하든 'Interal error, 내부 오류' 등이라고 토스트가 뜨면서 가입자체가 안 되는 문제가 있었습니다.

시도해본 것들 💭

- 다른 구글 계정으로 가입 시도
- 각 구글 계정의 국가 설정과 GA 가입시 시간이나 통화(Currency) 설정을 맞추기
- 유튜브에서 GA관련 입문 가이드 영상 참고
- 필요한 폼을 다 적어 놓은 다음 개발자 도구로 가입 요청을 보낼 때의 response를 확인

가입 요청 후의 Response를 보니까 `500`라는 코드를 보니 클라이언트가 아니라 구글 쪽에서의 로직에 문제가 발생이 된 것으로 추측됩니다.

GA가입 문제는 다음에 다시 시도 해 볼 계획입니다.

(2022/10/14)
시간을 두고 다시 가입을 시도했더니 GA에 정상적으로 가입이 되었습니다.

> 한국 IP에서만 엑박이 뜨는 현상 🔧

(2022/10/15)
한국 외의 IP에서는 사이트 내의 이미지들이 잘 표시되지만, 한국 IP 한정으로 엑박이 뜨는 문제가 있었습니다. 

시도한 것들 💭

1. Next.js의 이미지 최적화 후의 URL이 올바른가 확인

Next.js의 `<Image/>`태그를 사용하여 이미지 최적화, Vercel 배포 지역 포인트는 한국에서 제일 가까운 `도쿄`로 해두고 있었습니다. 이미지 최적화 후에 생성된 URL에 오타를 확인해 보았지만 완전히 똑같은 이미지 최적한 뒤의 URL을 한국 IP와 한국 외 IP(태국, 말레이시아 등)에서 접속해본 결과, 정말로 한국 IP에서만 이미지가 안뜨고 있었습니다. CORS도 의심해보았지만 해당 경고문은 전혀 보이지 않았습니다.

2. 이미지 파일들을 정적 파일로 불러오게 만들기

URL로 참조하고 있던 이미지들을 서버에 저장하여 정적 파일로 불러보기를 시도해봤습니다.
이유는 이미지 URL이 Next.js의 `<Image/>`태그처럼 바뀌지 않을 것이라고 예상되어서 입니다.
그 결과 엑박이었던 이미지들이 한국 IP에서도 정상적으로 표시되게 되었습니다.

> 배포 과정에서 발생한 에러: '**.ts' cannot be compiled under '--isolatedModules'

적용한 해결책: https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import

## 앞으로의 계획 ⌚

- 스토리를 가지고 있는 모든 캐릭터를 Chustory에 추가하기 (WIP)
- 각 캐릭터 별마다 따로 따로 댓글을 작성/보기 가능한 기능 추가 (Pending)
- 비슷한 세계관을 가진 캐릭터끼리 묶어서 볼 수 있도록 기능 추가 (Pending)
- `<datalist>`를 활용하여 캐릭터 이름을 검색해서 찾아 볼 수 있는 기능 추가 (Pending)
- 각 캐릭터가 참여 중인 곡의 영상을 Modal 안에 추가 (Pending)
- 스토리의 영어 내용 추가하기 (Pending)
- 스토리의 일본어 내용 추가하기 (Pending)

### Special Thanks

- 나무요정 (2022/10/18 ~ )
- 만년대기중 (2022/10/29 ~)