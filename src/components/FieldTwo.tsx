export const FieldTwo: React.FC = () => {
  const numbers = Array.from({ length: 2 }, (_, i) => i + 1);
  return (
    <div>
      <p>Поле 2</p>
      <p>Отметьте 1 число.</p>
      {numbers.map((number) => (
        <p key={number}>{number}</p>
      ))}
    </div>
  );
};
