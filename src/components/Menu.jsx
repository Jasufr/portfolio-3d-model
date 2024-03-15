export const Menu = (props) => {
  const {onSectionChange} = props;

  return (
    <>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 overflow-hidden flex flex-col`}
      >
        <div className="flex-1 flex items-center justify-start flex-col gap-6 p-2">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors [writing-mode:vertical-lr]"
    >
      {label}
    </button>
  );
};
