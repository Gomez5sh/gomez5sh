import React from "react";
import { Icon } from "@ant-design/compatible";
import { Form, Input, Button, Checkbox, notification } from "antd";

import "./SignUpForm.scss";

export default function SignUpForm() {
  return (
    <Form className="register-form">
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba:0,0,0,.25" }} />}
          type="email"
          name="email"
          placeholder="E-mail"
          className="register-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba:0,0,0,.25" }} />}
          type="password"
          name="password"
          placeholder="password"
          className="register-form__input"
        />
      </Form.Item>
      <Form>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba:0,0,0,.25" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repeat your password"
          className="register-form__input"
        />
      </Form>
      <Form.Item>
        <Checkbox name="privacyPolicy">
          I have read and accept the privacy policy
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          create account
        </Button>
      </Form.Item>
    </Form>
  );
}
