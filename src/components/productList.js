import React from 'react';

/**
 * @param productList
 * @param editProduct
 * @returns {*}
 */
export default ({ productList = [], editProduct = () => {} }) => (
    <table className="table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Price</th>
            <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {productList.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.created.toLocaleDateString()}</td>
                    <td>{product.price}</td>
                    <td>
                        <button
                            className="btn btn-sm btn-primary"
                            onClick={() => editProduct(product)}
                        >Edit</button>
                    </td>
                </tr>
            )
        })}
        </tbody>
    </table>
);