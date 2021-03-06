import React from "react";
import { Link } from "react-router-dom";
import "./auth.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { registerAccount } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import * as actions from "../../redux/reducer/reducer";
import LoadingFullPage from "../../components/sekeletion/LoadingFullPage";

const schema = yup.object().shape({
  firstname: yup.string().required("This field must be required!"),
  lastname: yup.string().required("This field must be required!"),
  email: yup.string().required("This field must be required!").email(),
  password: yup.string().required("This field must be required!").min(6),
  cf_password: yup
    .string()
    .required("This field must be required!")
    .min(6)
    .oneOf([yup.ref("password")], "Not match with password"),
});

function RegisterForm(props) {
  const state = useSelector((s) => s.infoAnimeApp);
  const { accountUser, loading } = state;
  const path = useLocation();
  let navigation = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (accountUser) {
      navigation("/", { replace: true });
      dispatch(actions.getLoading(false));
    }
  }, [accountUser]);
  React.useEffect(() => {
    if (accountUser) {
      if (path.pathname === "/register") {
        navigation("/", { replace: true });
      }
    }
  }, []);
  return (
    <>
      {loading && <LoadingFullPage />}

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          cf_password: "",
        }}
        validationSchema={schema}
        onSubmit={({ email, password, cf_password, ...rest }) => {
          dispatch(actions.getLoading(true));
          registerAccount(dispatch, email, password, rest);
        }}
      >
        {(props) => {
          return (
            <div className="split-screen">
              <div className="left">
                <section className="copy">
                  <h1>Welcome to RankWork</h1>
                  <p>Over 1000 Rusume real with you</p>
                </section>
              </div>
              <div className="right">
                <Form>
                  <section className="copy">
                    <h2>Sign Up</h2>
                    <div className="login-container">
                      <p>
                        Already have an account?{" "}
                        <Link to="/login">
                          <strong>Login Now</strong>
                        </Link>
                      </p>
                    </div>
                  </section>

                  <div className="input-container fullname">
                    <div className="col-6">
                      <label htmlFor="firstname">First Name</label>
                      <Field
                        type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Monkey"
                        style={
                          props.errors.firstname && props.touched.firstname
                            ? { border: "solid 1px red" }
                            : null
                        }
                      />
                      <small
                        className="form-text text-danger"
                        style={{ color: "red" }}
                      >
                        <ErrorMessage name="firstname" />
                      </small>
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastname">Last Name</label>
                      <Field
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="D. Luffy"
                        style={
                          props.errors.lastname && props.touched.lastname
                            ? { border: "solid 1px red" }
                            : null
                        }
                      />
                      <small
                        className="form-text text-danger"
                        style={{ color: "red" }}
                      >
                        <ErrorMessage name="lastname" />
                      </small>
                    </div>
                  </div>
                  <div className="input-container email">
                    <label htmlFor="InputEmail">Email</label>
                    <Field
                      type="email"
                      id="InputEmail"
                      name="email"
                      placeholder="Email@rankwork.com"
                      style={
                        props.errors.email && props.touched.email
                          ? { border: "solid 1px red" }
                          : null
                      }
                    />
                    <small
                      className="form-text text-danger"
                      style={{ color: "red" }}
                    >
                      <ErrorMessage name="email" />
                    </small>
                  </div>

                  <div className="input-container password">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Field
                      type={"password"}
                      id="exampleInputPassword1"
                      name="password"
                      placeholder="????????????????????????????????????"
                      style={
                        props.errors.password && props.touched.password
                          ? { border: "solid 1px red" }
                          : null
                      }
                    />
                    <small
                      className="form-text text-danger"
                      style={{ color: "red" }}
                    >
                      <ErrorMessage name="password" />
                    </small>
                  </div>
                  <div className="input-container password">
                    <label htmlFor="cf_password">Confirm Password</label>
                    <Field
                      type={"password"}
                      id="cf_password"
                      name="cf_password"
                      placeholder="????????????????????????????????????"
                      style={
                        props.errors.cf_password && props.touched.cf_password
                          ? { border: "solid 1px red" }
                          : null
                      }
                    />
                    <small
                      className="form-text text-danger"
                      style={{ color: "red" }}
                    >
                      <ErrorMessage name="cf_password" />
                    </small>
                  </div>
                  <button type="submit" className="signup-btn">
                    Register
                  </button>
                </Form>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default RegisterForm;
