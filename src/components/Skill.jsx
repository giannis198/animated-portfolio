const Skill = ({ title }) => {
  return (
    <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
      {title}
    </div>
  );
};

export default Skill;
