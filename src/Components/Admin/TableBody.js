import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TableBody.css";
import EnhancedTableHead from "./TableHead";
import { getComparator, stableSort } from "./utils";

export default function EnhancedTable(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("id");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  const headCells = props.headCells;
  const rowsPerPage = 10;
  const filterArray = props.filtervalue;

  let queryString = "";
  Object.keys(filterArray).forEach((key, index) => {
    if (filterArray[key]) {
      queryString += `&${key}=${filterArray[key]}`;
    }
  });

  console.log(queryString)

  const fetchPageData = async (page) => {
    console.log(page);
    try {
      const response = await fetch(
        `https://coral-demo-backend.onrender.com/cms/${props.tab}?pageNumber=${page + 1}${queryString}`
      );
      const jsonData = await response.json();
      setRows(jsonData[props.tab]);
      setTotal(jsonData.total);
    } catch (err) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchPageData(page);
  }, [queryString]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows?.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    fetchPageData(newPage);
    setPage(newPage);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(0, 10),
    [order, orderBy, rows]
  );


  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "98%", mb: 2, margin: "auto" }}>
        {/* <EnhancedTableToolbar /> */}
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
            className="custom-table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {visibleRows?.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer", height: "10px" }}
                  >
                    {headCells?.map((obj) => (
                      <TableCell align="left" className="custom-table-cell">
                        {row[obj.id] ? row[obj.id] : "-"}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </Box>
  );
}
