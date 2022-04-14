import React from "react";
import "./auth.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { LoginAccount } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingFullPage from "../sekeletion/LoadingFullPage";
import * as actions from "../../redux/reducer/reducer";

const schema = yup.object().shape({
  email: yup.string().required("This field must be required!").email(),
  password: yup.string().required("This field must be required!"),
});

function LoginForm(props) {
  let navigation = useNavigate();
  const dispatch = useDispatch();
  const path = useLocation();
  const state = useSelector((s) => s.infoAnimeApp);
  const { accountUser, loading } = state;
  React.useEffect(() => {
    if (accountUser) {
      navigation("/", { replace: true });
      dispatch(actions.getLoading(false));
    }
  }, [accountUser]);
  React.useEffect(() => {
    if (accountUser) {
      if (path.pathname === "/login") {
        navigation("/", { replace: true });
      }
    }
  }, []);
  return (
    <>
      {loading && <LoadingFullPage />}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={({ email, password }) => {
          dispatch(actions.getLoading(true));
          LoginAccount(dispatch, email, password);
        }}
      >
        {(props) => {
          return (
            <div className="split-screen">
              <div className="left">
                <section className="copy">
                  <h1>Welcome to Anime</h1>
                  <p>Over 1000 Rusume real with you</p>
                </section>
              </div>
              <div className="right">
                <Form>
                  <section className="copy">
                    <h2>Sign In</h2>
                    <div className="login-container">
                      <p>
                        You don't have an account? <strong>Register Now</strong>
                      </p>
                    </div>
                  </section>
                  <div className="input-container email">
                    <label htmlFor="InputEmail">Email</label>
                    <Field
                      type="email"
                      id="InputEmail"
                      name="email"
                      aria-describedby="emailHelp"
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
                    <label htmlFor="InputPassword">Password</label>
                    <Field
                      type={"password"}
                      id="InputPassword"
                      name="password"
                      placeholder="••••••••••••"
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
                  <div className="forgot">
                    <p>Forgot your password?</p>
                  </div>
                  <button type="submit" className="signup-btn">
                    Login
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

export default LoginForm;
