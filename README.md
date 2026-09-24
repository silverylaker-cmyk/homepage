# 알지 이비인후과 홈페이지

신매역 인근 알지 이비인후과의 공개 전 홈페이지 시안입니다. Next.js App Router와 TypeScript로 만들었으며 정적 파일을 `out/`에 생성합니다. 머리·목 그림에서 귀·코·입·목을 고르면 관련 진료 안내를 볼 수 있습니다.

미리보기: https://silverylaker-cmyk.github.io/homepage/

## 실행과 검증

Node.js 22 이상을 권장합니다.

```bash
npm ci
npm run dev
```

로컬 주소는 `http://localhost:3000`입니다. 검증 명령:

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npx playwright test
```

빌드 결과는 `out/`입니다. Playwright 테스트는 로컬 개발 서버를 자동으로 실행하고 360·390·768·1440px 화면, 인체 탐색, 모바일 메뉴, FAQ, 비급여 검색 등을 확인합니다. 테스트 스크린샷은 `artifacts/`에 생성되며 Git에는 포함하지 않습니다. 이미 설치된 브라우저를 쓰려면 `PLAYWRIGHT_CHROMIUM_EXECUTABLE` 환경변수에 실행 파일 경로를 지정할 수 있습니다.

`main`에 푸시하면 GitHub Actions가 GitHub Pages용으로 정적 사이트를 빌드해 `/homepage/` 경로에 배포합니다. 로컬 빌드는 루트 경로를 쓰고, 배포 빌드에서는 `GITHUB_PAGES=true`로 경로를 설정합니다. 배포 결과는 저장소의 Actions 또는 Pages 화면에서 확인할 수 있습니다.

## 실제 정보 입력

`data/site.ts`에서 의원 정보, 예약·지도 URL, 운영시간, 비급여, FAQ, 공지, 건강정보를 관리합니다. 의료진 경력·시설·검사·치료 범위는 확인되지 않아 공개 원고로 작성하지 않았습니다.

1. `clinic`의 법정 의원명, 주소, 전화, 네이버 예약 URL, 지도 URL, 대표자·사업자 정보를 확인해 입력합니다. URL을 입력하면 준비 중 표시가 실제 링크로 바뀝니다.
2. `schedule`에 한국 시간 기준 요일별 진료·휴게·접수 마감 시간과 날짜별 예외를 넣고 `updatedAt`을 설정합니다. 일정 데이터가 없으면 ‘진료 중’ 상태는 표시하지 않습니다.
3. `fees`에 실제 비급여 분류·코드·항목·금액·변경일을 입력합니다. 현재 빈 목록이며 예시 금액은 없습니다.
4. `notices`, `healthArticles`에 승인된 글을 추가하고 `published: true`로 지정합니다. `draft` 레코드는 정적 경로 템플릿 생성용이며 공개 목록에 나오지 않습니다. 실제 글의 `slug`는 고유하게 정합니다.
5. `app/care/[slug]/page.tsx`, `app/about/page.tsx`, `app/examinations/page.tsx`의 설명은 실제 의료진 검토 후 확정합니다. 개인정보처리방침과 의원 기본정보도 운영 방식에 맞춰 채웁니다.
6. 수정 후 위 검증 명령을 실행하고 다시 빌드·배포합니다. 현재는 파일 기반 운영이며 별도 직원용 관리 화면은 없습니다.

## 공개 전 확인

이 시안은 `robots.txt`와 페이지 메타데이터로 검색 노출을 막고 있습니다. 공개할 때 실제 의원 정보와 승인된 의료 원고, 비급여, 개인정보처리방침, 예약·연락처, 도메인·호스팅을 확정하고 검색 차단을 해제해야 합니다. 도메인 확정 후 canonical, sitemap, 구조화 데이터를 같은 정보 원천에서 추가합니다. GitHub 푸시는 공개 배포를 뜻하지 않습니다.

## 기획 문서

- [구축 계획](docs/website-plan.md)
- [화면·인체 탐색 명세](docs/interaction-and-screen-spec.md)
- [구현 지시서](docs/sol-implementation-brief.md)
- [참고자료 검토 기록](docs/reference-review.md)
