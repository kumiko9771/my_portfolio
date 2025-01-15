import { ListTodo, UserRoundPen } from "lucide-react";
import Link from "next/link";

const navs = [
  {
    href: "/",
    icon: ListTodo,
    name: "タスク",
  },
  {
    href: "/me",
    icon: ListTodo,
    name: "マイページ",
  },
];

export const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full flex md:hidden justify-around bg-white py-2 border-t'>
      {navs.map(({ href, icon: Icon, name }, i) => {
        return (
          <Link href={href} className='flex flex-col items-center'>
            <Icon size={28} />
            <h1 className='text-xs'>{name}</h1>
          </Link>
        );
      })}
    </div>
  );
};
