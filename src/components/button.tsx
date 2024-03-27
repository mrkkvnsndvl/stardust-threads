type ButtonProps = {
  style: 'primary' | 'secondary' | 'tertiary' | 'link';
  isSmall?: boolean;
  iconPosition: 'no-icon' | 'leading' | 'trailing' | 'only';
  isDarkMode?: boolean;
  isWidthFull?: boolean;
  icon?: JSX.Element;
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export default function Button({
  style,
  isSmall,
  iconPosition,
  isDarkMode,
  isWidthFull,
  icon,
  text,
  onClick,
  type,
}: ButtonProps) {
  let buttonStyle;
  switch (style) {
    case 'primary':
      buttonStyle = `flex px-6 justify-center items-center gap-2 rounded-normal ${
        isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
      }`;
      break;
    case 'secondary':
      buttonStyle = `flex px-6 justify-center items-center gap-2 rounded-normal bg-none border ${
        isDarkMode ? 'text-white border-white' : 'text-black border-black'
      }`;
      break;
    case 'tertiary':
      buttonStyle = `flex px-6 justify-center items-center gap-2 ${
        isDarkMode ? 'text-white' : 'text-black'
      }`;
      break;
    case 'link':
      buttonStyle = `flex justify-center items-center gap-2 ${
        isDarkMode ? 'text-white' : 'text-black'
      }`;
      break;
    default:
      buttonStyle = null;
      break;
  }

  let buttonIsSmall;
  switch (isSmall) {
    case true:
      buttonIsSmall = 'py-2';
      break;
    default:
      buttonIsSmall = 'py-3';
      break;
  }

  let buttonIconPosition;
  switch (iconPosition) {
    case 'no-icon':
      buttonIconPosition = '';
      break;
    case 'leading':
      buttonIconPosition = 'gap-3';
      break;
    case 'trailing':
      buttonIconPosition = 'flex-row-reverse gap-3';
      break;
    case 'only':
      buttonIconPosition = 'p-3 gap-3';
      break;
    default:
      buttonIconPosition = null;
      break;
  }

  let buttonIsWidthFull;
  switch (isWidthFull) {
    case true:
      buttonIsWidthFull = 'w-full';
      break;
    default:
      buttonIsWidthFull = null;
      break;
  }
  return (
    <button
      type={type}
      className={`${buttonStyle} ${buttonIsSmall} ${buttonIconPosition} ${buttonIsWidthFull}`}
      onClick={onClick}>
      {iconPosition !== 'no-icon' && <span>{icon}</span>}
      {iconPosition !== 'only' && (
        <span className='text-regular-normal'>{text}</span>
      )}
    </button>
  );
}
