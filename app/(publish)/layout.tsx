const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="h-full bg-[#1F1F1F]">{children}</div>;
};

export default PublicLayout;
