import React from "react";
import { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import {
  SmileOutlined,
  LockOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import {
  emailValidation,
  minLenghtvalidation,
} from "../../../utils/ForValidation";

import { signUpApi } from "../../../API/user";

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

  const register = async (e) => {
    e.preventDefault();
    const { email, password, repeatPassword, privacyPolicy } = formValid;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;

    if (
      !inputs.name ||
      !passwordVal ||
      !repeatPasswordVal ||
      !inputs.privacyPolicy
    ) {
      notification["error"]({
        message: "All fields are required",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    } else {
      const result = await signUpApi(inputs);
      if (!result.ok) {
        notification["error"]({
          message: result.message,
          icon: <SmileOutlined style={{ color: "#108ee9" }} />,
        });
      } else {
        notification["success"]({
          message: result.message,
        });
        resetForm();
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }
  };

  return (
    <div>
      <Form className="register-form" onSubmit={register} onChange={changeForm}>
        <Form.Item>
          <Input
            prefix={<UserSwitchOutlined style={{ color: "rgba:0,0,0,.25" }} />}
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
            prefix={<LockOutlined style={{ color: "rgba:0,0,0,.25" }} />}
            type="password"
            name="password"
            placeholder="password"
            className="register-form__input"
            onChange={inputValidation}
            value={inputs.password}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<LockOutlined style={{ color: "rgba:0,0,0,.25" }} />}
            type="password"
            name="repeatPassword"
            placeholder="Repeat your password"
            className="register-form__input"
            onChange={inputValidation}
            value={inputs.repeatPassword}
          />
        </Form.Item>
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
          <Button
            htmlType="submit"
            className="register-form__button"
            size="small"
          >
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
