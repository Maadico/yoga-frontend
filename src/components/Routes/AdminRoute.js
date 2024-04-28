import { useState, useEffect } from "react";
import { useAuth } from "../../Context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Redirect from "../Redirect";

export default function AdminRouteRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      if (auth?.user?.role === 0) {
        return <Redirect path="" />;
      }
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`
      );
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token, auth?.user?.role]);

  return ok ? <Outlet /> : <Redirect path="" />;
}
