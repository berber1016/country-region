const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-0 w-full border-t min-h-12 text-center  flex items-center justify-center text-balance text-sm leading-loose text-muted-foreground md:text-left">
      Thanks for{" "}
      <a
        className="font-medium underline underline-offset-4"
        href="https://ui.shadcn.com/"
      >
        {" "}
        shadcn{" "}
      </a>
      ,{" "}
      <a
        className="font-medium underline underline-offset-4"
        href="https://nextjs.org/"
      >
        Next.js
      </a>
      ,{" "}
      <a
        className="font-medium underline underline-offset-4"
        href="https://www.cloudflare.com/"
      >
        cloudfire
      </a>
      . The source code is available on{" "}
      <a
        className="font-medium underline underline-offset-4"
        href="https://github.com/berber1016/country-region"
      >
        GitHub
      </a>
      .
    </footer>
  );
};

export default Footer;
