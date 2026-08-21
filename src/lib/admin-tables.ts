export type FieldType = "text" | "textarea" | "number" | "color";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
};

export type TableConfig = {
  slug: string;
  table: string;
  label: string;
  idColumn: string;
  singleton?: boolean;
  orderBy?: string;
  fields: FieldConfig[];
  listColumns: string[];
};

export const adminTables: TableConfig[] = [
  {
    slug: "services",
    table: "services",
    label: "서비스 카테고리",
    idColumn: "id",
    orderBy: "sort_order",
    fields: [
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "tag", label: "태그", type: "text", required: true },
      { name: "title", label: "제목", type: "text", required: true },
      { name: "description", label: "설명", type: "textarea", required: true },
      { name: "accent", label: "색상(hex)", type: "color", required: true },
      { name: "sort_order", label: "정렬순서", type: "number", required: true },
    ],
    listColumns: ["title", "tag", "slug", "sort_order"],
  },
  {
    slug: "guides",
    table: "guides",
    label: "요양 가이드",
    idColumn: "id",
    orderBy: "sort_order",
    fields: [
      { name: "badge", label: "배지", type: "text", required: true },
      { name: "title", label: "제목", type: "text", required: true },
      { name: "description", label: "설명", type: "textarea", required: true },
      { name: "sort_order", label: "정렬순서", type: "number", required: true },
    ],
    listColumns: ["title", "badge", "sort_order"],
  },
  {
    slug: "reviews",
    table: "reviews",
    label: "후기",
    idColumn: "id",
    orderBy: "created_at",
    fields: [
      { name: "category", label: "카테고리", type: "text", required: true },
      { name: "name", label: "작성자", type: "text", required: true },
      { name: "rating", label: "평점(1~5)", type: "number", required: true },
      { name: "content", label: "내용", type: "textarea", required: true },
    ],
    listColumns: ["name", "category", "rating"],
  },
  {
    slug: "consult-topics",
    table: "consult_topics",
    label: "상담 통계",
    idColumn: "id",
    orderBy: "sort_order",
    fields: [
      { name: "title", label: "제목", type: "text", required: true },
      { name: "description", label: "설명", type: "text", required: true },
      { name: "count", label: "누적 상담건수", type: "number", required: true },
      { name: "sort_order", label: "정렬순서", type: "number", required: true },
    ],
    listColumns: ["title", "count", "sort_order"],
  },
  {
    slug: "staff-stories",
    table: "staff_stories",
    label: "태호요양 사람들 이야기",
    idColumn: "id",
    orderBy: "sort_order",
    fields: [
      { name: "role", label: "역할", type: "text", required: true },
      { name: "name", label: "이름/소속", type: "text", required: true },
      { name: "title", label: "제목", type: "text", required: true },
      { name: "excerpt", label: "내용", type: "textarea", required: true },
      { name: "sort_order", label: "정렬순서", type: "number", required: true },
    ],
    listColumns: ["name", "role", "sort_order"],
  },
  {
    slug: "more-info-links",
    table: "more_info_links",
    label: "분야별 정보 더 보기",
    idColumn: "id",
    orderBy: "sort_order",
    fields: [
      { name: "label", label: "링크 텍스트", type: "text", required: true },
      { name: "sort_order", label: "정렬순서", type: "number", required: true },
    ],
    listColumns: ["label", "sort_order"],
  },
  {
    slug: "company-info",
    table: "company_info",
    label: "회사 정보",
    idColumn: "id",
    singleton: true,
    fields: [
      { name: "name", label: "회사명", type: "text", required: true },
      { name: "biz_number", label: "사업자등록번호", type: "text", required: true },
      { name: "ceo", label: "대표자", type: "text", required: true },
      { name: "address", label: "주소", type: "text", required: true },
      { name: "email", label: "이메일", type: "text", required: true },
      { name: "ir_email", label: "IR 이메일", type: "text", required: true },
      { name: "phone", label: "전화번호", type: "text", required: true },
      { name: "hours", label: "운영시간", type: "text", required: true },
    ],
    listColumns: [],
  },
];

export function getTableConfig(slug: string): TableConfig | undefined {
  return adminTables.find((t) => t.slug === slug);
}
