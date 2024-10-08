const Button = ({ name }) => {
  return (
    <button className="px-4 m-2  bg-gray-200 rounded-lg w-28 py-2 font-semibold dark:text-white dark:bg-slate-900">
      {name}
    </button>
  );
};

export default Button;
