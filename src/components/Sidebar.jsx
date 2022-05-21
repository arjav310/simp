import logo from "../assets/images/logo.png";
function Sidebar() {
  return (
    <div
      className=" text-center"
      style={{
        background: "#EBEBEB",
        width: "250px",
        height: "100vh",
        paddingTop: "2%",
      }}
    >
      <img src={logo} width="175" alt="Logo" />
    </div>
  );
}

export default Sidebar;
