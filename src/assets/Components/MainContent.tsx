import Card from "./Card";
function MainContent() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow min-h-11">
      <h1 className="text-2xl font-bold mb-4">Contenido</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="Práctica 1"
          content="Estado del tiempo"
          link="" //En los link, ponen el enlace con el puerto que esta ocupando cada proyecto
        />
        <Card title="Práctica 2" content="Mapbox" link="" />
        <Card title="Práctica 3" content="Carrito de compras" link="" />
        <Card title="Práctica 4" content="Pokédex" link="" />
        <Card title="Práctica 5" content="Nest.js" link="" />
        <Card
          title="Práctica 6"
          content="Prisma"
          link=""
        />
      </div>
    </div>
  );
}

export default MainContent;
