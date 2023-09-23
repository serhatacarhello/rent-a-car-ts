type CarInfoIconProps = {
  icon: string;
  title: string;
  design?:string;
};
export default function CarInfoIcon(props: CarInfoIconProps) {
  const { icon, title,design } = props;
  return (
    <>
      <img className={`${design} car-card__icon`} src={icon} alt={`${title}`} />
      <p className="car-card__icon-text">{title} </p>
    </>
  );
}
