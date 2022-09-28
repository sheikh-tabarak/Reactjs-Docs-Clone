import React from 'react'
import './HeaderC.css'

export default function HeaderC() {
  return (
    <>
      <div className="topbar">
        Support Ukraine 🇺🇦{" "}
        <a href="www.reactjs.org" className="link">
          Help Provide Humanitarian Aid to Ukraine.
        </a>
      </div>

      <div className="header-full">
        <div className="header-logo">
        <a href='https://reactjs.org'><img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
          /></a>
        </div>
        <div className="header-logo-text"><a href='https://reactjs.org'>React</a></div>

        <div className="header-menu">
          <a href="www.reacts.org">
            <div className="item">Docs</div>
          </a>
          <a href="www.reacts.org">
            <div className="item">Turorial</div>
          </a>
          <a href="www.reacts.org">
            <div className="item">Blogs</div>
          </a>
          <a href="www.reacts.org">
            <div className="item">Community</div>
          </a>
        </div>

        <div className="header-search-form">
          <form className="search-form">
            <input
              className="form-field"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>

        <div className="header-buttons">

        <div className="header-menu2">
          <a href="www.reacts.org">
            <div className="item2">v17.0.2</div>
          </a>
          <a href="www.reacts.org">
            <div className="item2">Languages</div>
          </a>
          <a href="www.reacts.org">
            <div className="item2">GitHub</div>
          </a>
          </div>
        </div>

      </div>
    </>
  );
}
