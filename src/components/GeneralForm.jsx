import { Formik, Field, Form } from "formik";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "../style/GeneralForm.css";

export const GeneralForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        age: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        try {
          const docRef = await addDoc(collection(db, "users"), values);
          resetForm({ values: "" });
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="add-form">
          <Field name="name" placeholder="Name" className="field" />
          <Field
            name="email"
            placeholder="Email@email.com"
            type="email"
            className="field"
          />
          <Field name="age" placeholder="Age" type="number" className="field" />
          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  );
};
