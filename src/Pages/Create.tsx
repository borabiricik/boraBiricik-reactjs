import { Formik } from "formik";
import React, { useEffect } from "react";
import ReactSelect from "react-select";
import Button from "../Components/Common/Button";
import CustomSelect from "../Components/Common/CustomSelect";
import HeaderText from "../Components/Common/HeaderText";
import Input from "../Components/Root/Forms/Input";
import TextArea from "../Components/Root/Forms/TextArea";
import Loading from "../Components/Root/Loading";
import { getCategories } from "../Stores/categoryStore";
import { useAppSelector, useAppThunkDispatch } from "../Stores/Hooks";
import * as Yup from "yup";

const ProductValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "At least 3 characters is required")
    .max(10, "Maximum character limit reached")
    .trim()
    .required("Required!"),
  description: Yup.string().trim().required("Required"),
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
          price: null,
        }}
        validationSchema={ProductValidationSchema}
        onSubmit={(values) => {
          console.log(values);
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
              <HeaderText className="text-center font-bold">
                Create Product
              </HeaderText>
              <div className="flex flex-col items-center py-10 gap-5">
                <Input
                  name="name"
                  className="w-5/12"
                  onChange={handleChange}
                  placeholder="Product Name"
                  autoComplete="off"
                />
                {/* {touched.name && errors.name && errors.name} */}

                <TextArea
                  rows={3}
                  className="w-5/12 resize-none"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                />

                <Input
                  name="avatar"
                  className="w-5/12"
                  onChange={handleChange}
                  placeholder="Image URL"
                />

                <CustomSelect
                  options={categories.map((category) => {
                    return { label: category.name, value: category.id };
                  })}
                  className={"w-5/12"}
                  onChange={(value) => setFieldValue("category", value.label)}
                />

                <Input
                  onChange={handleChange}
                  name="price"
                  placeholder="Price"
                  className="w-5/12"
                  type={"number"}
                />

                <Button
                  onClick={() => handleSubmit()}
                  className="font-semibold text-lg"
                >
                  SUBMIT
                </Button>
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
