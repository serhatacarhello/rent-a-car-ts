import { IButtonType } from "../types";

export default function CustomButton({
  text,
  design,
  handleClick,
  disabled,
  type,
  rightIcon,
}: IButtonType) {
  return (
    <button
      disabled={disabled}
      className={`custom-btn ${design}`}
      onClick={handleClick}
      type={type || "button"}
    >
      <span>{text}</span>
      {rightIcon && (
        <div className="absolute w-6 h-6  end-3">
          <img src={rightIcon} alt={`${rightIcon} image`} />
        </div>
      )}
    </button>
  );
}
