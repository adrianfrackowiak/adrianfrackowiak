export const Hero = () => {
  return (
    <div className="relative w-screen min-h-screen">
      <div className="w-[48rem] h-[48rem] absolute -top-48 py-10">
        <img
          src="../images/me.jpg"
          alt=""
          className="object-cover mix-blend-none"
        />
      </div>
      <div>
        <p className="font-normal text-[1.5rem] max-w-[450px] absolute -top-20 left-[60%]">
          Frontend Developer, currently living in Poland near Poznań. I create
          websites and web apps using React, TypeScript, and a lot of popular
          frameworks and libraries. My passion for websites has started when I
          was 13 or 14 years old. I was so happy when I created my first website
          (probably the phpBB forum).
          <br />
          <br />
          When I am not working, I try myself in extreme sports like
          skateboarding and snowboarding. Popular "surf life" is my dream;
          freedom, nature, etc. I am also a big fan of Harry Potter and
          Wizarding World.
        </p>
      </div>
    </div>
  );
};
