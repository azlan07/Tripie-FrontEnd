import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { whoAmI } from "../../actions/usersAction";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Protected from "../Protected";

// TODO: Leave it to your imagination
function ProtectedAdmin({ children }) {
  const { whoAmIResult } = useSelector((state) => state.UsersReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(whoAmI());
  }, [dispatch]);

  const role = localStorage.getItem("role");

  if (role !== "Admin") return navigate("/unauthorized");
  return children;
}

export default ProtectedAdmin;
