type PropTypes = {
  designs: string;
};

export default function SearchButton(props: PropTypes) {
  const { designs } = props;
  return (
    <button className={`ml-3 z-10 ${designs}`}>
      <img
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        alt="magnifying glass image"
      />
    </button>
  );
}
