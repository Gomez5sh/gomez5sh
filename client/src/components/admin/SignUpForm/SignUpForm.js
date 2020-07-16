import React, { useState } from "react";
import { Icon } from "@ant-design/compatible";
import { Form, Input, Button, Checkbox, notification } from "antd";
import {
  emailValidation,
  minLenghtvalidation,
} from "../../../utils/ForValidation";

import "./SignUpForm.scss";

export default function SignUpForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  const inputValidation = (e) => {
    const { type, name } = e.target;
    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(e.target),
      });
    }

    if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: minLenghtvalidation(e.target, 6),
      });
    }

    if (type === "checkbox") {
      setFormValid({
        ...formValid,
        [name]: e.target.checked,
      });
    }
  };

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const register = (e) => {
    e.preventDefault();
    const { email, password, repeatPassword, privacyPolicy } = formValid;

    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;

    if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
      notification["error"]({
        message: "All fields are required",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Password are diferent",
        });
      } else {
        notification["error"]({
          message: "You are register",
        });
      }
    }

    return (
      <div>
        <Form
          className="register-form"
          onSubmit={register}
          onChange={changeForm}
        >
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba:0,0,0,.25" }} />}
              type="email"
              name="email"
              placeholder="E-mail"
              className="register-form__input"
              onChange={inputValidation}
              value={inputs.email}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba:0,0,0,.25" }} />}
              type="password"
              name="password"
              placeholder="password"
              className="register-form__input"
              onChange={inputValidation}
              value={inputs.password}
            />
          </Form.Item>
          <Form>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba:0,0,0,.25" }} />}
              type="password"
              name="repeatPassword"
              placeholder="Repeat your password"
              className="register-form__input"
              onChange={inputValidation}
              value={inputs.repeatPassword}
            />
          </Form>
          <Form.Item>
            <Checkbox
              name="privacyPolicy"
              checked={inputs.privacyPolicy}
              onChange={inputValidation}
            >
              I have read and accept the privacy policy
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="register-form__button">
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
}
