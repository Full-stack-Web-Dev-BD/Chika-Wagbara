import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  Menu,
  MenuItem,
  Button
} from '@material-ui/core';
import ViewProductDetails from './ViewProductDetails';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import ProductCreateModal from './ProductCreateModal';
import ProductUpdateModal from './ProductUpdateModal';
import PurchaseProduct from './PurchaseProduct'
import { getProducts, getProduct, deleteProduct } from '../../../actions/productAction';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const ProductTable = (props) => {
  const { products, className, ...rest }=props
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [allBranch, setAllBranch] = useState([])
  
  
   useEffect(()=>{
     props.getProducts();
   })

  // Delete Branch
  const deleteProduct = id => {
    props.deleteProduct(id)
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="d-flex">
        <h2 className="mb3">Products</h2>
        <ProductCreateModal />
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
                {products.map((data, index) => (
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
                      {data.department?data.department.name:0}
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
                        <ProductUpdateModal id={data._id} />
                        <span onClick={e => deleteProduct(data._id)}><DeleteOutlineIcon style={{ cursor: "pointer" }} /></span>
                        <PurchaseProduct  id={data._id}/>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </div>
  );
};

ProductTable.propTypes = {
  getProducts:PropTypes.func.isRequired,
  getProduct:PropTypes.func.isRequired,
  deleteProduct:PropTypes.func.isRequired,
  className: PropTypes.string,
  products: PropTypes.array.isRequired,
  products: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  products: state.product.products,
  product: state.product.product
})
export default connect(mapStateToProps, { getProducts, getProduct, deleteProduct })(ProductTable);