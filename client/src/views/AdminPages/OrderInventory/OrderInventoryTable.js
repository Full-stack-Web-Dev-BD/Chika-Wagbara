import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { connect } from 'react-redux'
import { search } from '../../../utils/Search'
import { orderInventories, purchaseInventory, deleteInventory } from '../../../actions/inventoryAction';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const OrderInventoryTable = (props) => {
  const { purchaseOrders, className, ...rest }=props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('')
  const [allPurchaseOrder, setAllPurchaseOrder] = useState([])
  
  
  useEffect(()=>{
    props.orderInventories();
  }, [])

  useEffect(()=>{
    setAllPurchaseOrder(purchaseOrders)
  }, [purchaseOrders])

  useEffect(()=>{
    setAllPurchaseOrder(search(purchaseOrders, searchTerm))
  }, [searchTerm])

  // Delete Branch
  const cancelOrder = id => {
    props.deleteInventory(id)
  };

  const purchaseInventory=(id, data)=>{
    props.purchaseInventory(id, data)
  }

  return (
    <div>
      <div className="d-flex">
        <h2 className="mb3">Order Inventories</h2>
      </div>
      <div style={{marginBottom:'10px'}}>
        <TextField
          onChange={e=>setSearchTerm(e.target.value)}
          margin="dense"
          placeholder="Search by any field"
          type="text"
          value={searchTerm}
          fullWidth
        />
      </div>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <PerfectScrollbar>
          <Box minWidth={1050}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell >
                    Product Name
                  </TableCell>
                  <TableCell>
                    Department
                  </TableCell>
                  <TableCell>
                    Type
                  </TableCell>
                  <TableCell>
                    Unit
                  </TableCell>
                  <TableCell>
                    Purchase Code
                  </TableCell>
                  <TableCell>
                    Matergial Safety Code
                  </TableCell>
                  <TableCell>
                    Quantity
                  </TableCell>
                  <TableCell>
                    Alert Level
                  </TableCell>
                  <TableCell>
                    Tax
                  </TableCell>
                  <TableCell >
                    Action
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allPurchaseOrder?
                allPurchaseOrder.map((data, index) => (
                  <TableRow
                    hover
                    key={index}
                  >
                    <TableCell>
                      <Box
                        alignItems="center"
                        display="flex"
                      >
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                          {data.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {data.department.name}
                    </TableCell>
                    <TableCell>
                      {data.type}
                    </TableCell>
                    <TableCell>
                      {data.unit}
                    </TableCell>
                    <TableCell>
                      {data.purchaseCode}
                    </TableCell>
                    <TableCell>
                      {data.materialSafetyCode}
                    </TableCell>
                    <TableCell>
                      {data.quantity}
                    </TableCell>
                    <TableCell>
                      {data.alertLevel}
                    </TableCell>
                    <TableCell>
                      {data.tax}
                    </TableCell>
                    <TableCell>
                      <div>
                        <span onClick={e => purchaseInventory(data._id, {name:data.name, quantity:data.quantity})} style={{ cursor: "pointer" }}>Order</span>
                        <span onClick={e => cancelOrder(data._id)} style={{ cursor: "pointer" }}>Cancel</span>
                      </div>
                    </TableCell>
                  </TableRow>
                )):''}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </div>
  );
};

OrderInventoryTable.propTypes = {
  orderInventories:PropTypes.func.isRequired,
  deleteInventory:PropTypes.func.isRequired,
  purchaseInventory:PropTypes.func.isRequired,
  className: PropTypes.string,
  purchaseOrders: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  purchaseOrders: state.inventory.purchaseOrders
})
export default connect(mapStateToProps, { orderInventories, purchaseInventory, deleteInventory })(OrderInventoryTable);
