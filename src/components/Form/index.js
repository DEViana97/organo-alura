import React from "react";
import { TextField } from "../TextField";
import "./Form.css";
export function Form() {
  return (
    <section className="form-container">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
}
