import scss from '../HomePage/HomePage.module.scss';

export function HomePage() {
  return (
    <div className={scss.homePage}>
      <h1 className={scss.Title}>Hi! Good to see you here &#128521;</h1>
      <img alt="Welcome" src='https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png' width="800" />
    </div>
  );
}
