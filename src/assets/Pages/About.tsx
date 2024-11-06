function About() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-11">
      <img
        src="https://i.pinimg.com/736x/23/6a/f1/236af167ecedc51832d1b8cd3934ec6c.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4 shadow-lg"
      />
      <h1 className="text-2xl font-bold mb-2">Sergio Torres</h1>
      <p className="text-center max-w-md mb-2">
        Soy un estudiante de Ing. en desarrollo de software, me gustan los
        gatos, me gustan mucho las manzanas y de música me gusta la mayoría pero
        tengo mayor preferencia por las bandas del siglo pasado.
      </p>
    </div>
  );
}

export default About;
