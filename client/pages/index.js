import Layout from "@/components/Layout";
import authContext from "@/context/auth/authContext";
import { useContext, useEffect } from "react";

export default function Index() {
  const AuthContext = useContext(authContext);
  const { userAuthenticated } = AuthContext;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      userAuthenticated()
    }
  }, [])

  return (
    <Layout>
      <h1>Index</h1>
    </Layout>
  )
}
