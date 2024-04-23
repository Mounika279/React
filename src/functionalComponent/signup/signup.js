// import { useState } from "react";

// const Signup = () => {
//   // States to control form inputs
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorVisible, setErrorVisible] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (userName.length < 5 || password.length < 5) {
//       setErrorVisible(true);
//     } else {
//       setErrorVisible(false);
//       // Process the form (e.g., send data to backend)
//       console.log("Form submitted", { userName, email, password });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           className="form-control"
//           id="username"
//           placeholder="Enter Username"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="confirm-password">Confirm Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="confirm-password"
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//       </div>
//       {errorVisible && (
//         <span style={{ color: "red" }}>
//           Username and password should be greater than 5 characters.
//         </span>
//       )}
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Signup;
