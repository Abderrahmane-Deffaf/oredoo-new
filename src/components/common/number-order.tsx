type NumberOrderProps = {
  number: number;
};

export default function NumberOrder({ number }: NumberOrderProps) {
  return <span className=" text-[#D6001C] font-bold text-7xl">0{number}</span>;
}
