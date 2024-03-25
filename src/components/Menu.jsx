export const Menu = (props) => {
  const {onSectionChange} = props;

  return (
    <>
      <div
        className={`z-10 fixed top-0 right-4 bottom-0 overflow-hidden flex flex-col`}
      >
        <div className="flex-1 flex items-center justify-start flex-col gap-6 p-2 w-12">
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
      className="text-2xl font-bold cursor-pointer text-slate-500 hover:text-sky-600 transition-colors duration-200 [writing-mode:vertical-lr]"
    >
      {label}
    </button>
  );
};
