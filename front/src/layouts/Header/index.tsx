import "./style.css";

const header = () => {
  return (
    <div className="header" role="banner">
      <a href="#">
        <img src="/assets/image/logo.PNG" className="img_logo" alt="로고" />
      </a>
      <nav>
        <div className="nav_items">
          <ul>
            <li>
              <a href="/">팀일정</a>
            </li>
            <li>
              <a href="/">개인일정</a>
            </li>
            <li>
              <a href="/login">로그인</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default header;
