import React from "react";
import IconUser from "../../assets/icon-user.svg";
import LogoItau from "../../assets/logo.svg";
import ItemMenu from "./ItemMenu.jsx";
import * as S from "./styles.js";

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.ContainerItems>
          <div>
            <S.Img src={LogoItau} alt="Logo Itau" />
          </div>
          <S.Ul>
            <S.Li>
              <ItemMenu name="Para Voçê" />
            </S.Li>
            <S.Li>
              <ItemMenu name="Para Empresas" />
            </S.Li>
            <S.Li>
              <ItemMenu name="Serviços" />
            </S.Li>
            <S.Li>
              <ItemMenu name="Ajuda" />
            </S.Li>
          </S.Ul>
          <S.DivButtonAccess>
            <S.ButtonAccess>
              <img src={IconUser} alt="" />
              <span>Acessar Conta</span>
            </S.ButtonAccess>
          </S.DivButtonAccess>
        </S.ContainerItems>
      </S.Container>
    </S.Header>
  );
}
