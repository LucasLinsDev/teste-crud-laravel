import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import AppUrl from "../../../api/AppUrl";
import {
  Alert,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
const initialValue = {
  nome: "",
  email: "",
  categoria_id: 1,
};
export function UsersForm() {
  const navigate = useNavigate();
  const erros = {
    userEmail: "Please, insert a valid email",
    userPassword: "Please,insert a valid pass",
  };

  const { id, page } = useParams();

  const [user, setUser] = useState(initialValue);

  const handleSubmit = () => {
    if (id) {
      axios
        .put(AppUrl.UserEdit(id), user)
        .then((response) => {
          toast("Usuário atualizado com sucesso");
          navigate("/");
        })
        .catch((error) => {});
    } else {
      axios.post(AppUrl.CreateUser(), user).then((response) => {
        toast(" cadatrado ");
        navigate("/");
      });
    }
  };

  useEffect(() => {
    if (id) {
      axios
        .get(AppUrl.UserId(id))
        .then((response) => {
          setUser({
            nome: response.data.nome,
            email: response.data.email,
            categoria_id: response.data.categoria.id,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const updateUser = Yup.object({
    nome: Yup.string()
      .required("Adicione seu nome")
      .min(2, "First name must be between 2 and 16 characters."),
    email: Yup.string()
      .required("Yup ll nee this email")
      .email("Enter a valid email address"),
  });

  return (
    <Formik
      enableReinitialize
      validationSchema={updateUser}
      initialValues={user}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, isSubmitting, values }) => (
        <Form>
          <FormControl fullWidth>
            {touched.nome && errors.nome ? (
              <Alert severity="error">Você deve inserir um nome valido</Alert>
            ) : null}

            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="nome"
              onChange={(ev) => setUser({ ...user, nome: ev.target.value })}
              value={user.nome}
              placeholder="Nome"
            />
            {touched.email && errors.email ? (
              <Alert severity="error">Você deve inserir um E-mail Valido</Alert>
            ) : null}

            <TextField
              id="outlined-basic"
              variant="outlined"
              type="email"
              name="email"
              value={user.email}
              onChange={(ev) => setUser({ ...user, email: ev.target.value })}
              placeholder="Email"
            />

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user.categoria_id}
              placeholder="Selecione"
              onChange={(ev) => {
                setUser({ ...user, categoria_id: ev.target.value });
              }}
            >
              <MenuItem value={"1"}>Admin</MenuItem>
              <MenuItem value={"2"}>Usuario</MenuItem>
              <MenuItem value={"3"}>Visitante</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained">
            SALVAR
          </Button>
        </Form>
      )}
    </Formik>
  );
}
