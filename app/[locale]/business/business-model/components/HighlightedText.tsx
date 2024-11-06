const HighlightedText: React.FC<{
  text: string;
  highlight: string | string[];
  highlightClassName?: string;
}> = ({ text, highlight, highlightClassName = "font-bold text-[#2d8185]" }) => {
  if (!highlight || !text) return <>{text}</>;

  const terms = Array.isArray(highlight) ? highlight : [highlight];

  // 정규식 특수문자 이스케이프 처리 함수
  const escapeRegExp = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // 텍스트에서 하이라이트할 부분 찾기
  let lastIndex = 0;
  const pieces: { text: string; highlight: boolean }[] = [];

  // 긴 텀부터 처리하기 위해 정렬
  const sortedTerms = [...terms].sort((a, b) => b.length - a.length);

  // 각 텀에 대해 매칭 검사
  while (lastIndex < text.length) {
    let found = false;
    let nextIndex = text.length;
    let matchedTerm = "";

    // 현재 위치에서 매칭되는 가장 긴 텀 찾기
    for (const term of sortedTerms) {
      const escapedTerm = escapeRegExp(term);
      const regex = new RegExp(escapedTerm, "g");
      regex.lastIndex = lastIndex;
      const match = regex.exec(text);

      if (match && match.index === lastIndex) {
        found = true;
        nextIndex = lastIndex + term.length;
        matchedTerm = term;
        break;
      }
    }

    if (found) {
      pieces.push({ text: matchedTerm, highlight: true });
      lastIndex = nextIndex;
    } else {
      // 매칭되지 않은 다음 글자 추가
      pieces.push({ text: text[lastIndex], highlight: false });
      lastIndex += 1;
    }
  }

  // 결과 렌더링
  return (
    <>
      {pieces.map((piece, i) =>
        piece.highlight ? (
          <strong key={i} className={highlightClassName}>
            {piece.text}
          </strong>
        ) : (
          piece.text
        )
      )}
    </>
  );
};

export default HighlightedText;
