import { Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import Button from "../Components/Common/Button";
import CustomSelect from "../Components/Common/CustomSelect";
import HeaderText from "../Components/Common/HeaderText";
import ValidationError from "../Components/Common/ValidationError";
import Input from "../Components/Root/Forms/Input";
import TextArea from "../Components/Root/Forms/TextArea";
import Loading from "../Components/Root/Loading";
import { getCategories } from "../Stores/categoryStore";
import { useAppSelector, useAppThunkDispatch } from "../Stores/Hooks";
import { createProduct } from "../Stores/productStore";

const ProductValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "At least 3 characters is required")
    .trim()
    .required("Required!"),
  description: Yup.string().trim().required("Required!"),
  avatar: Yup.string().url().required("Required!"),
  category: Yup.string().required("Required!"),
  price: Yup.number().required("Required!").min(1,"Minimum price must be $1"),
});

const Create = () => {
  const dispatch = useAppThunkDispatch();
  
  const { categories } = useAppSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  if (categories) {
    return (
      <Formik
        initialValues={{
          name: "",
          description: "",
          avatar: "",
          category: "",
          price: 0,
          developerEmail: "borabiriciksoftware@gmail.com"
        }}
        validationSchema={ProductValidationSchema}
        onSubmit={(values) => {
          dispatch(createProduct({...values,history: window.history}))
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
        }) => {
          return (
            <div>
              <HeaderText className="font-bold text-center">
                Create Product
              </HeaderText>
              <div className="flex flex-col gap-5 py-10 items-center">
                <div className="w-5/12">
                  <Input
                    name="name"
                    className="w-full"
                    onChange={handleChange}
                    placeholder="Product Name"
                    autoComplete="off"
                  />
                  {touched.name && errors.name && (
                    <ValidationError>{errors.name}</ValidationError>
                  )}
                </div>

                <div className="w-5/12">
                  <TextArea
                    rows={3}
                    className="w-full resize-none"
                    placeholder="Description"
                    name="description"
                    onChange={handleChange}
                  />
                  {touched.description && errors.description && (
                    <ValidationError>{errors.description}</ValidationError>
                  )}
                </div>
                <div className="w-5/12">
                  <Input
                    name="avatar"
                    className="w-full"
                    onChange={handleChange}
                    placeholder="Image URL"
                  />
                  {touched.avatar && errors.avatar && (
                    <ValidationError>{errors.avatar}</ValidationError>
                  )}
                </div>

                <div className="w-5/12">
                  <CustomSelect
                    options={categories.map((category) => {
                      return { label: category.name, value: category.id };
                    })}
                    className={"w-full"}
                    onChange={(value) => setFieldValue("category", value.label)}
                  />
                  {touched.category && errors.category && (
                    <ValidationError>{errors.category}</ValidationError>
                  )}
                </div>

                <div className="w-5/12">
                  <Input
                    onChange={handleChange}
                    name="price"
                    placeholder="Price"
                    className="w-full"
                    type={"number"}
                  />
                  {touched.price && errors.price && (
                    <ValidationError>{errors.price}</ValidationError>
                  )}
                </div>

                <div className="w-5/12">
                  <Button
                    onClick={() => handleSubmit()}
                    className="font-semibold text-lg w-full"
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
  return <Loading />;
};

export default Create;
