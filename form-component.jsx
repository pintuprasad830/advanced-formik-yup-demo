import { ErrorMessage, Field, Form, Formik } from "formik";

import * as yup from "yup";



export function FormComponent(){

    return(

        <div className="container-fluid">



            <Formik initialValues={{UserName:'', Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('Name Required').min(4,'Name too short'), Mobile:yup.string().required('Mobile Required').matches(/^\+91\d{10}$/, "Invalid Mobile")})} onSubmit={(user)=> console.log(user)}>

                 {

                    formik => 

                    <Form>

                    <dl>

                        <dt>User Name</dt>

                        <dd> <Field name="UserName" /> </dd>

                        <dd className="text-danger"> <ErrorMessage name="UserName" /> </dd>

                        <dt>Mobile</dt>

                        <dd> <Field name="Mobile" /> </dd>

                        <dd className="text-danger"> <ErrorMessage name="Mobile" /> </dd>

                    </dl>

                    <button type="submit" disabled={(formik.isValid)?false:true} className="mx-2">Submit</button>

                    <button className={(formik.dirty)?'d-inline':'d-none'} >Save</button>

                   </Form>

                 }

            </Formik>



        </div>

    )

}


