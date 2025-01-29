type SkillCardProps = {
    imgSrc: string;
    name: string;
    years: number;
    stackFocus: string;
  };
  
  const SkillCard = ({ imgSrc, name, years, stackFocus }: SkillCardProps) => {
    return (
      <div className="flex flex-col items-center justify-center bg-black border-4 border-white p-6 rounded-lg space-y-4 text-white">
        <img src={imgSrc} alt={name} className="w-16 h-16 object-contain" />
        <h3 className="text-2xl font-extrabold">{name}</h3>
        <p className="text-xl">{years} Years</p>
        <p className="text-lg font-medium">{stackFocus}</p>
      </div>
    );
  };
  
  export default SkillCard;
  