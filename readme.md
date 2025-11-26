#총정리
라우팅개념 CRUD
get params, query
post delete put body
prisma

- database: pizzaschool
- table: 피자

4. prisma
   - 1. npm install prisma: 프리즈마 다운
   - 2. npx prisma init: 프리즈마 할거임
   - 3. config.ts 지움
   - 4. 스키마 프리즈마에서 환경설정 (url설정) (ex: "mysql://root:1234@localhost:3306/pizzaschool")
   - 5. npx prisma db pull: db에 스키마를 가져옴
   - 6. npx prisma generate: 스키마를 자바스크립트 코드로 바꿈
   - 7. npm install @prisma/client@6: express랑 prisma 연결해주는 라이브러리
