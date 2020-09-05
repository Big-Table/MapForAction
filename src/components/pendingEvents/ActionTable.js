import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import React, { useEffect, useState } from "react";
import {
  getPendingActions,
  patchApproveAction,
  patchDenyAction,
} from "../../requests/requests";
import EditActionForm from "../forms/EditActionForm";

const columns = [
  { id: "title", label: "Title", minWidth: 170 },
  {
    id: "actionType",
    label: "ActionType",
    minWidth: 100,
  },
  {
    id: "url",
    label: "URL",
    minWidth: 100,
  },
  {
    id: "approve",
    label: "Approve",
    minWidth: 100,
  },
  {
    id: "reject",
    label: "Reject",
    minWidth: 100,
  },
  {
    id: "edit",
    label: "Edit",
    minWidth: 100,
  },
];

function createData(title, actionType, url, approve, reject, edit) {
  return { title, actionType, url, approve, reject, edit };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#898989",
    color: "white",
  },
  container: {
    maxHeight: 650,
  },
  header: {
    backgroundColor: "black",
  },
  button: {
    backgroundColor: "#000000",
    color: "#FCC42C",
    borderStyle: "solid",
    borderColor: "#FCC42C",
    borderWidth: 1,
    height: 40,
    width: 150,
    borderRadius: 20,
    fontFamily: "Work Sans",
    fontWeight: 700,
    cursor: "pointer",
    outline: "none",
  },
  image: {
    height: 250,
    width: 250,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [actions, setActions] = React.useState([]);

  useEffect(() => {
    getPendingActions().then((body) => {
      setActions(body.data);
      let rows2 = [];
      body.data.forEach((action) => {
        rows2.push(
          createData(
            action.title,
            action.action_type,
            action.url,
            action._id,
            action._id,
            action._id
          )
        );
      });
      setRows(rows2);
    });
  }, [props.update, props.approve]);

  const handleApprove = (id) => {
    patchApproveAction({ _id: id }).then(() => {
      props.approve();
    });
  };

  const handleDeny = (id) => {
    patchDenyAction({ _id: id }).then(() => {
      props.approve();
    });
  };

  const [editActionForm, setEditForm] = useState(false);

  const [action, setAction] = useState();

  const handleEditActionForm = (id) => {
    let action = actions.filter((action) => action._id === id);
    setAction(action);
    setEditForm(!editActionForm);
  };

  const [rows, setRows] = useState([]);

  return (
    <>
      {editActionForm && (
        <EditActionForm
          action={action}
          edit={handleEditActionForm}
          update={props.update}
        ></EditActionForm>
      )}
      {/* {editTweetForm && <EditTweetForm update={props.update} tweet={tweet} edit={handleEditTweetForm} ></EditTweetForm>} */}
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0 &&
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];

                          if (column.id === "edit") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {/* {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value} */}
                                <button
                                  className={classes.button}
                                  onClick={() => handleEditActionForm(value)}
                                >
                                  Edit
                                </button>
                              </TableCell>
                            );
                          }

                          if (column.id === "approve") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {/* {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value} */}
                                <button
                                  className={classes.button}
                                  onClick={() => handleApprove(value)}
                                >
                                  Approve
                                </button>
                              </TableCell>
                            );
                          } else if (column.id === "reject") {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {/* {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value} */}
                                <button
                                  className={classes.button}
                                  onClick={() => handleDeny(value)}
                                >
                                  Reject
                                </button>
                              </TableCell>
                            );
                          } else {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          }
                        })}
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={actions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
