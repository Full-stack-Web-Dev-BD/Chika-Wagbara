import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
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
import ViewProductDetails from './ViewProductDetails';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux'
import { search } from '../../../utils/Search'
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
  const [searchTerm, setSearchTerm] = useState('')
  const [allProduct, setAllProduct] = useState([])
  
  
  useEffect(()=>{
    props.getProducts();
  }, [])

  useEffect(()=>{
    setAllProduct(products)
  }, [products])

  useEffect(()=>{
    setAllProduct(search(products, searchTerm))
  }, [searchTerm])

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
    <div className="table-data">
      <div className="d-flex">
        <h2 className="mb3">Products</h2>
        <ProductCreateModal />
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
            <Table size="small">
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
                {allProduct?
                 allProduct.map((data, index) => (
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
                )):''}
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
