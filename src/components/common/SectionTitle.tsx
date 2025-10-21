type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className=" text-amber-900">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        {title}
      </h2>
      
    </div>
  );
};

export default SectionTitle;
