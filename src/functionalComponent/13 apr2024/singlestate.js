import { useState } from "react";

const ControlledComponent = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    cpwd: ""
  });

  const [formErr, setFormErr] = useState({
    usernameErr: null,
    emailErr: null,
    passwordErr: null,
    cpwdErr: null
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm((prevstate) => ({
      ...prevstate,
      [name]: value
    }));

    switch (name) {
      case "username":
        if (!/^[A-Z]/.test(value)) {
          setFormErr({ ...formErr, usernameErr: "First letter should not start with" });
        } else {
          setFormErr({ ...formErr, usernameErr: null });
        }
        break;
      case "email":
        if (!value.includes("@gmail.com")) {
          setFormErr({ ...formErr, emailErr: "It should include @gmail.com" });
        } else {
          setFormErr({ ...formErr, emailErr: null });
        }
        break;
      case "cpwd":
        if (value !== form.password) {
          setFormErr({ ...formErr, cpwdErr: "Passwords do not match" });
        } else {
          setFormErr({ ...formErr, cpwdErr: null });
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({
      username: "",
      email: "",
      password: "",
      cpwd: ""
    });

    // Reset error states
    setFormErr({
      usernameErr: null,
      emailErr: null,
      passwordErr: null,
      cpwdErr: null
    });
  };

  return (
    <div className="controllable">
      <title>Form in HTML</title>
      <h2>Registration form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>User personal information</legend>
          <label>Enter your full name</label>
          <br />
          <input type="text" name="username" value={form.username} onChange={onChangeHandler} />
          {formErr.usernameErr && <span style={{ color: "red" }}>{formErr.usernameErr}</span>}
          <br />

          <label>Enter your email</label>
          <br />
          <input type="email" name="email" value={form.email} onChange={onChangeHandler} />
          {formErr.emailErr && <span style={{ color: "red" }}>{formErr.emailErr}</span>}
          <br />

          <label>Enter your password</label>
          <br />
          <input type="password" name="password" value={form.password} onChange={onChangeHandler} />
          <br />

          <label>Confirm your password</label>
          <br />
          <input type="password" name="cpwd" value={form.cpwd} onChange={onChangeHandler} />
          {formErr.cpwdErr && <span style={{ color: "red" }}>{formErr.cpwdErr}</span>}
          <br />
          <br />

          <input type="submit" defaultValue="sign-up" />
        </fieldset>
      </form>
    </div>
  );
};

export default ControlledComponent;
