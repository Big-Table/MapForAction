import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { getIncidents } from '../requests/requests'
const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 170 },
  { id: 'date', label: 'Date', minWidth: 100 },

  {
    id: 'location',
    label: 'Location',
    minWidth: 100,
    // align: 'right',
  },
  {
    id: 'organization',
    label: 'Organization',
    minWidth: 100,
    // align: 'right',
  },
  {
    id: 'petition',
    label: 'Petition',
    minWidth: 100,
  },
  {
    id: 'image_url',
    label: 'Image_URL',
    maxWidth: 100,
  },
  {
    id: 'approve',
    label: 'Approve',
    minWidth: 100,
  },
  {
    id: 'reject',
    label: 'Reject',
    minWidth: 100,
  },
];

function createData(title, description, date, location, organization, petition, image_url, approve, reject) {
  return { title, description, date, location, organization, petition, image_url, approve, reject };
}

const rows = [

];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 500,
  },
});

export default function StickyHeadTable() {
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

  const [incidents, Setincidents] = React.useState([])

  useEffect(() => {
    getIncidents()
        .then(body => Setincidents(body))
}, [])

   
    incidents.map(incident => rows.push(createData(incident.title, incident.description, incident.date, incident.location, incident.organization, incident.petition, incident.image_url)))
  
console.log(incidents)
  return (
      
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    console.log(value)
                    if(column.id === 'approve') {
                        return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                              <button>Approve</button>
                            </TableCell>
                          );
                    } else if(column.id === 'reject'){
                        return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                              <button>Reject</button>
                            </TableCell>
                          );
                    }
                    else {
                        return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
