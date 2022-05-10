import { Formik } from "formik";
import React, { useEffect } from "react";
import ReactSelect from "react-select";
import HeaderText from "../Components/Common/HeaderText";
import Input from "../Components/Root/Forms/Input";
import TextArea from "../Components/Root/Forms/TextArea";
import Loading from "../Components/Root/Loading";
import { getCategories } from "../Stores/categoryStore";
import { useAppSelector, useAppThunkDispatch } from "../Stores/Hooks";

const Create = () => {
  const dispatch = useAppThunkDispatch();
  const { categories } = useAppSelector((state) => state.category);
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  if (categories) {
    return (
      <Formik initialValues={{}} onSubmit={() => {}}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <div>
              <HeaderText className="text-center font-bold">
                Create Product
              </HeaderText>
              <div className="flex flex-col items-center py-10">
                <Input
                  name="name"
                  className="w-5/12"
                  onChange={handleChange}
                  placeholder="Product Name"
                />

                <TextArea
                  rows={3}
                  className="my-3 w-5/12 resize-none"
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

                <ReactSelect
                  options={categories.map((category) => {
                    return { label: category.name, value: category.id };
                  })}
                  className={"w-5/12 my-3"}
                />
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
