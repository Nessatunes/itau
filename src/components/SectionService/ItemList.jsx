import * as S from "./styles";

export default function ItemList({ img, alt, p }) {
  return (
    <>
      <S.DivMascara>
        <img src={img} alt={alt} />
      </S.DivMascara>
      <p>{p}</p>
    </>
  );
}
