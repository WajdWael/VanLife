const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
export const checkActive = ({ isActive }) => isActive ? activeStyles : null;