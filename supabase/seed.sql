-- Seed data for the Caring.co.kr clone (matches the previously hardcoded src/data/site-data.ts).
-- Run after schema.sql, in the Supabase SQL Editor (or via psql).

insert into services (slug, tag, title, description, accent, sort_order) values
  ('family-care', '최고시급', '가족요양', '내 가족을 돌보며 요양보호사로 활동하고, 정당한 급여를 받으세요.', '#FF7A45', 0),
  ('home-care', '100% 본사직영', '방문요양', '검증된 요양보호사가 어르신 댁으로 방문하여 맞춤 돌봄을 제공합니다.', '#2F6FED', 1),
  ('day-care', '전국최고시설', '주간보호', '낮 동안 안전하게 머무르며 인지·신체 활동 프로그램을 이용하세요.', '#12B886', 2),
  ('nursing-home', '도심형', '요양원', '접근성 높은 도심형 시설에서 전문적인 24시간 요양 서비스를 받으세요.', '#845EF7', 3),
  ('silver-town', '케어특화', '실버타운', '케어링스테이가 제안하는 케어 특화 시니어 레지던스를 만나보세요.', '#1D3557', 4),
  ('caregiver-signup', '구직중이신가요?', '요양보호사 등록', '케어링과 함께 좋은 조건의 요양보호사 일자리를 시작해보세요.', '#F4A300', 5)
on conflict (slug) do nothing;

insert into guides (badge, title, description, sort_order) values
  ('등급 가이드', '장기요양등급, 이렇게 신청하세요', '등급 판정 기준부터 신청 절차, 준비 서류까지 한 번에 정리했어요.', 0),
  ('주간보호 가이드', '우리 동네 주간보호센터 고르는 법', '시설 선택 시 꼭 확인해야 할 체크리스트를 알려드려요.', 1),
  ('가족요양 가이드', '가족요양비, 놓치지 않고 받는 방법', '가족요양보호사 자격 조건과 신청 방법을 쉽게 설명해드려요.', 2),
  ('방문요양 가이드', '방문요양 이용 A to Z', '첫 이용자를 위한 방문요양 서비스 이용 절차를 안내해드려요.', 3);

insert into reviews (category, name, rating, content) values
  ('방문요양', '보호자 이◯◯ 님', 5, '혼자 지내시던 어머니가 요양보호사님과 친해지면서 표정이 밝아지셨어요. 매번 꼼꼼하게 상태를 공유해주셔서 안심이 됩니다.'),
  ('가족요양', '요양보호사 김◯◯ 님', 5, '아버지를 직접 돌보면서 급여까지 받을 수 있다는 게 정말 큰 도움이 됐어요. 담당 매니저님이 서류 준비도 꼼꼼히 도와주셨습니다.'),
  ('주간보호', '보호자 박◯◯ 님', 5, '치매 초기이신 아버지가 주간보호센터에서 인지 프로그램을 받으신 뒤로 훨씬 활기차지셨어요. 송영차량도 편리하고요.'),
  ('요양원', '보호자 최◯◯ 님', 4, '24시간 케어가 필요한 상황이라 걱정이 많았는데, 상담부터 입소까지 케어링이 전 과정을 함께해줘서 든든했습니다.'),
  ('실버타운', '입주자 가족 정◯◯ 님', 5, '케어 특화 실버타운이라 의료 지원과 커뮤니티 프로그램이 잘 갖춰져 있어 부모님도 만족하며 지내고 계세요.'),
  ('방문요양', '보호자 한◯◯ 님', 5, '혼자 사시는 할머니께 안부 확인과 돌봄을 동시에 받을 수 있어서 멀리 사는 자녀 입장에서 정말 큰 위안이 됩니다.');

insert into consult_topics (title, description, count, sort_order) values
  ('요양 전반 상담', '무엇부터 시작해야 할지 막막하다면', 31428, 0),
  ('장기요양등급 신청', '등급 신청 절차가 궁금하다면', 31207, 1),
  ('방문요양 선택', '믿을 수 있는 방문요양이 필요하다면', 31089, 2),
  ('가족요양 신청', '가족을 직접 돌보고 싶다면', 31344, 3),
  ('주간보호센터 선택', '우리 동네 주간보호가 궁금하다면', 31052, 4);

insert into staff_stories (role, name, title, excerpt, sort_order) values
  ('센터장', '케어링 방문요양센터', '"어르신 한 분 한 분의 하루가 저의 하루예요"', '처음엔 낯설어하시던 어르신들도 시간이 지나면 가족처럼 대해주세요. 그 신뢰가 제일 큰 보람입니다.', 0),
  ('요양보호사', '3년차 케어링 요양보호사', '"교육 시스템 덕분에 자신감 있게 시작했어요"', '입사 전 체계적인 실무 교육을 받아서 현장에 나가서도 당황하지 않고 어르신을 케어할 수 있었어요.', 1),
  ('주간보호센터 원장', '케어링 주간보호센터', '"프로그램 하나하나가 어르신의 웃음이 됩니다"', '인지활동, 미술, 원예 프로그램을 준비할 때마다 어르신들이 즐거워하실 모습을 상상하며 일합니다.', 2);

insert into more_info_links (label, sort_order) values
  ('장기요양등급 신청방법', 0),
  ('재가급여 vs 시설급여 차이', 1),
  ('방문요양 본인부담금 안내', 2),
  ('주간보호센터 운영시간 안내', 3),
  ('요양보호사 자격증 취득방법', 4),
  ('가족요양비 지급 기준', 5);

insert into company_info (name, biz_number, ceo, address, email, ir_email, phone, hours) values
  ('케어링(주)', '507-81-15401', '김태성', '서울특별시 서초구 서초대로 396, 4층 (서초동, 강남빌딩)', 'info@caring.co.kr', 'ir@caring.co.kr', '1522-6585', '9:00 ~ 22:00 (주말·공휴일 포함)')
on conflict (id) do update set
  name = excluded.name,
  biz_number = excluded.biz_number,
  ceo = excluded.ceo,
  address = excluded.address,
  email = excluded.email,
  ir_email = excluded.ir_email,
  phone = excluded.phone,
  hours = excluded.hours,
  updated_at = now();
