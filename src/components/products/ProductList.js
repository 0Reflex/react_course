
import React, { Component } from "react";
import { connect } from "react-redux"
import { Badge, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productAction from "../../redux/actions/productAction";
import * as cartActions from "../../redux/actions/cartActions";
import { Table } from 'reactstrap';
import alertify from "alertifyjs"
import { Link } from "react-router-dom";

class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }

    addToCart = (product) =>{
        this.props.actions.addToCart({quantity:1,product})
        alertify.success(product.productName + " sepete eklendi.")
    }

    render() {
        return (
            <div>
                <h3>
                    <Badge color="warning">
                        Products
                    </Badge>
                    <Badge color="success">
                        {this.props.currentCategory.categoryName}
                    </Badge>
                </h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(products => (
                            <tr key={products.id}>
                                < th scope="row">{products.id}</th>
                                <td><Link to={"/saveproduct/"+ products.id}>{products.productName}</Link></td>
                                <td>{products.unitPrice}</td>
                                <td>{products.quantityPerUnit}</td>
                                <td>{products.unitsInStock}</td>
                                <td>
                                    <Button color="success"  onClick={()=> this.addToCart(products)}>
                                        Ekle
                                    </Button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </Table>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productAction.getProducts, dispatch),
            addToCart:bindActionCreators(cartActions.addToCart,dispatch)
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)