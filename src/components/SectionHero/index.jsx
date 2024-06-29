import React from "react";
import * as S from "./styles";
import ImageApple from "../../assets/btn-apple-store.svg";
import ImageGoogle from "../../assets/btn-google-play.svg";
import Arrow from "../../assets/arrow-explorer.svg";
import WomanImage from "../../assets/woman.png";

export default function SectionHero() {
  return (
    <S.Section>
      <S.Container>
        <S.DivLeft>
          <S.H1>Tenha seu banco na palma da mão</S.H1>
          <S.P>
            Todas as operações que você precisa em um só lugas. Simples,
            completo e feiro pra você
          </S.P>
          <S.DivButtons>
            <S.Button>
              <img src={ImageApple} alt="Apple" />
            </S.Button>
            <S.Button>
              <img src={ImageGoogle} alt="Google" />
            </S.Button>
          </S.DivButtons>
          <S.ButtonExplore>
            <img src={Arrow} alt="arrow Down" />
            <S.Span>Continue explorando</S.Span>
          </S.ButtonExplore>
        </S.DivLeft>
        <S.ImgWoman src={WomanImage} alt="woman" />
      </S.Container>
    </S.Section>
  );
}
