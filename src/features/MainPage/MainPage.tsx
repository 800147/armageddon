import { FunctionComponent, ReactNode } from "react";
import MainPage__ from "./MainPage.module.css";
import { Passion_One } from 'next/font/google';
import cn from 'classnames';
import Link from "next/link";
import Image from "next/image";
 
export const passion_one = Passion_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const MainPage: FunctionComponent<{children?: ReactNode}> = ({children}) => (
  <main className={MainPage__.Root}>
    <header className={MainPage__.Header}>
      <h1 className={cn(MainPage__.Title, passion_one.className)}><Link className={MainPage__.Link} href={'/'}>Armageddon 2023</Link></h1>
      <p className={MainPage__.Text}>
        ООО “Команда им. Б. Уиллиса”.
        <br />
        Взрываем астероиды с 1998 года.
      </p>
    </header>
    <Image  className={MainPage__.Planet} src='/planet.png' width={304} height={436} alt={"planet as backgroung image"}  />
    <div className={MainPage__.Feed}>
    {children}
    </div>
  </main>
);

export default MainPage;
