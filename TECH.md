
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

> TLDR: 1달 내에 빠르게 출시하기 위해서.

본 프로젝트는 기획, 화면 기획, 개발, 출시, 잠재/실제 유저들에게 피드백 받는 등을 1달 내로 달성해야하는 기한을 정해두었습니다.
위 목표를 기한 내에 달성할 겸, 실사용 경험이 없거나 적었던 기술들을 사용하기로 결정했습니다.

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
