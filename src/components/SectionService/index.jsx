import React from "react";
import * as S from "./styles";
import ItemList from "./ItemList";
import PhoneIcon from "../../assets/icon-phone.svg";
import SolutionIcon from "../../assets/icon-solutions.svg";
import OptionIcon from "../../assets/icon-options.svg";
import CardIcon from "../../assets/icon-card.svg";
import ImagePhone from "../../assets/phone.png";

export default function SectionService() {
  return (
    <S.Section>
      <S.Container>
        <S.DivLeft>
          <S.Span>Serviços Esclusivos</S.Span>
          <S.H2>Gerecie suas finanças sem sair de casa</S.H2>
          <S.P>
            Veja como voçê pode cuidar das suas finanças pelo App Itaú de forma
            segura e o melhor, no conforto da sua casa.
          </S.P>
          <S.Ul>
            <S.Li>
              <ItemList
                img={PhoneIcon}
                alt="Phone Icon"
                p="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"
              />
            </S.Li>
            <S.Li>
              <ItemList
                img={SolutionIcon}
                alt="Solution Icon"
                p="Soluções de empréstimos e negociação para organizar suas finanças"
              />
            </S.Li>
            <S.Li>
              <ItemList
                img={OptionIcon}
                alt="Option Icon"
                p="Diversas opções de investimentos, de acordo com seu perfil de investidor"
              />
            </S.Li>
            <S.Li>
              <ItemList
                img={CardIcon}
                alt="Card Icon"
                p="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual"
              />
            </S.Li>
          </S.Ul>
        </S.DivLeft>
      </S.Container>
      <S.DivRight>
        <S.Img src={ImagePhone} alt="Phone" />
      </S.DivRight>
    </S.Section>
  );
}
