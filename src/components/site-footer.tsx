const currentYear = new Date().getFullYear();
export default function SiteFooter() {
  return (
    <div className="w-full">
      <div className="bg-[#07125b] h-10 px-10"></div>
      <div className="bg-[#001642] p-2 text-white text-center">
        &copy;&nbsp;{currentYear}&nbsp;bmjgrouplimited.com
      </div>
    </div>
  );
}
