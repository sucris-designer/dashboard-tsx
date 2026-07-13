import MesBtn from "./MesBtn";

const Meses = () => {
  return (
    <section className="flex mb">
      <MesBtn n={-3} />
      <MesBtn n={-2} />
      <MesBtn n={-1} />
      <MesBtn n={0} />
    </section>
  );
};

export default Meses;
