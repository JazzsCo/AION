const LabelAndText = ({ label, text }: { label: string; text: string }) => {
  return (
    <div>
      <label className="text-sm text-zinc-500">{label}</label>
      <h5>{text}</h5>
    </div>
  );
};

export default LabelAndText;
