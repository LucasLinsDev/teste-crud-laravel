import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AppUrl from "../../../api/AppUrl";
import styles from "./Dashboard.module.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Skeleton } from "@mui/material";
import { Fragment } from "react";
import { toast } from "react-toastify";

export function Dashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [links, setLinks] = useState();
  const [loading, setLoading] = useState();
  useEffect(() => {
    getUsers();
  }, [page]);

  const getUsers = () => {
    axios
      .get(AppUrl.UsersList(page, 6))
      .then((response) => {
        setUsers(response.data.data);
        setLinks(response.data.links);
      })
      .catch((error) => {});
  };

  const handleDelete = (id) => {
    if (window.confirm("Confirme para deletar o item")) {
      axios
        .delete(AppUrl.UserDelete(id))
        .then((response) => {
          getUsers(page, 2);

          toast("Item deletado com sucesso");
        })
        .catch((error) => {});
    }
  };

  const paginate = (number) => {
    if (number.includes("Next")) {
      if (links.length - 2 == page) {
        toast("você  está na ultima página");
        return;
      }
      setPage(page - 1);
    }

    if (number.includes("Previous")) {
      if (page == 1) {
        toast("você está na primeira página");

        return;
      }
      setPage(page - 1);
    }

    setPage(number);
    getUsers();
  };
  return (
    <div className={styles.userstable}>
      <Button onClick={() => navigate(`/users`)} variant="contained">
        Criar Usuário
      </Button>
      <hr></hr>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell align="left">Codigo</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Categoria</TableCell>
              <TableCell align="left">Editar</TableCell>
              <TableCell align="left">Deletar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.name}>
                <TableCell align="left">{user.id}</TableCell>
                <TableCell align="left">{user.nome}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.categoria_id}</TableCell>
                <TableCell align="left">
                  <Button
                    onClick={() => navigate(`/users/${user.id}`)}
                    variant="contained"
                  >
                    Editar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    style={{ background: "#f44336" }}
                    variant="contained"
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Deletar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.link}>
        {links && (
          <div>
            {links.map((link) => {
              return (
                <button
                  className={`${styles.link__item}  ${
                    link.active ? styles.active : null
                  } `}
                  onClick={() => {
                    paginate(link.label);
                  }}
                >
                  {link.label.includes("Next")
                    ? ">"
                    : link.label.includes("Prev")
                    ? "<"
                    : link.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
