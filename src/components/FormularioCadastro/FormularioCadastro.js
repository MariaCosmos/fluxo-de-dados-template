import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
      <StyledLabel htmlFor="foto">
          Título:
          <Input id="titulo"
          placeholder="Título"
          onChange={props.onChangeTitulo}
          value={props.titulo}
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto"
          placeholder="URL da imagem"
          onChange={props.onChangeImagem}
          value={props.imagem}
          />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" 
          placeholder="Descrição"
          onChange={props.onChangeDescricao}
          value={props.descricao}
          />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro