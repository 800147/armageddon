import { FunctionComponent } from "react";
import MainPage__ from "./MainPage.module.css";
import { Neo } from "../Neo/Neo";
import { Passion_One } from 'next/font/google';
import cn from 'classnames';
 
export const passion_one = Passion_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const MainPage: FunctionComponent = () => (
  <main className={MainPage__.Root}>
    <header className={MainPage__.Header}>
      <h1 className={cn(MainPage__.Title, passion_one.className)}>Armageddon 2023</h1>
      <p className={MainPage__.Text}>
        ООО “Команда им. Б. Уиллиса”.
        <br />
        Взрываем астероиды с 1998 года.
      </p>
    </header>
    <Neo className={MainPage__.Neo} />
  </main>
);

export default MainPage;
