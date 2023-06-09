import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const naviagtor = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      naviagtor("/todo", { replace: true });
      return;
    } else {
      if (window.location.pathname === "/todo") {
        naviagtor("/signin", { replace: true });
        return;
      }
    }
  }, [naviagtor, token]);
};
