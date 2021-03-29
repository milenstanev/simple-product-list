import React from 'react';
import { Formik, Field, Form } from 'formik';

/**
 * @param editableProduct
 * @param saveProduct
 * @returns {*}
 */
export default ({ editableProduct = {}, saveProduct = () => {} }) => (
  <div>
    <Formik
      initialValues={{
        ...editableProduct
      }}
      onSubmit={async (values) => {
        saveProduct(values)
      }}
    >
      <Form>
        <label className="form-label" htmlFor="title">Title</label>
        <Field className="form-control" name="title" />

        <label className="form-label" htmlFor="description">Description</label>
        <Field className="form-control" name="description" />

        <label className="form-label" htmlFor="created">Created</label>
        <Field className="form-control" name="created" />

        <label className="form-label" htmlFor="price">Price</label>
        <Field className="form-control" name="price" />

        <hr/>
        <button className="btn btn-sm btn-primary" type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);