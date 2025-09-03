
interface PropType {
  placeholder: string;
  size: "big" | "small";
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ placeholder, size }: PropType) {
  const styles = {
    big: {
      padding: 20,
      margin: 20,
    },
    small: {
      padding: 10,
      margin: 10,
    },
  };

  return (
    <input
    //   onChange={onChange}
      placeholder={placeholder}
      type="text"
      style={{
        ...styles[size],
        borderColor: "black",
        borderWidth: 1,
      }}
    />
  );
}


