const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full dark:bg-[#1F1F1F]">{children}</div>;
};

export default PublicLayout;
