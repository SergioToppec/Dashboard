function Header() {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow h-14">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="flex items-center">
        <img
          alt="img perfil"
          className="rounded-full mr-2"
          height="40"
          width="40"
          src="https://i.pinimg.com/736x/23/6a/f1/236af167ecedc51832d1b8cd3934ec6c.jpg"
        />
        <span className="font-bold">Sergio Torres</span>
        <i className="fas fa-chevron-down ml-2"></i>
      </div>
    </div>
  );
}

export default Header;
