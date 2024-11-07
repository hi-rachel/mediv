export const createSlug = (text: string): string => {
  return text
    .toLowerCase() // 소문자로 변환
    .trim() // 앞뒤 공백 제거
    .replace(/[^\w\s-]/g, "") // 특수문자 제거 ("단어 문자, 공백 문자, 하이픈이 아닌" 모든 문자를 찾아 제거)
    .replace(/[\s_-]+/g, "-") // 공백, 언더스코어, 하이픈을 단일 하이픈으로 변환
    .replace(/^-+|-+$/g, ""); // 시작과 끝의 하이픈 제거
};
