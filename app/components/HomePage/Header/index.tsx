export const Header = () => {
  return (
    <div className="min-h-screen text-black flex w-screen items-center justify-center inset-0 px-20 relative">
      <header className="absolute top-0 w-full h-[16rem] flex justify-between items-center z-20 px-20">
        <div>
          <h3 className="text-[1.5rem]">adrianfrackowiak@icloud.com</h3>
        </div>
        <div className="relative space-y-1 flex flex-col justify-center cursor-pointer">
          <span className="w-8 h-[2px] bg-black rounded-sm"></span>
          <span className="w-8 h-[2px] bg-black rounded-sm"></span>
          <span className="w-8 h-[2px] bg-black rounded-sm"></span>
        </div>
      </header>
      <h1 className="leading-none">
        <div className={`inline-block text-[6rem] font-medium`}>
          I'm Adrian Frąckowiak, <br /> a{" "}
          <span className="font-black">React Developer</span>.
        </div>
      </h1>
    </div>
  );
};
