/**
 * This is the side navigation bar used in
 *  pages like overview, devices, producst etc
 * for navigating between root pages of console
 */

import React, { useState, useEffect } from "react";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";
import { css } from "emotion";
import RatanProfilePicture from "../../Asset/ratan-pic-2.png";
import HireMeIcon from "../../Asset/paper-plane.svg";

export default function SideBar() {
  // location element to get current router path
  let location = useLocation();

  //svg icon color state
  const [icon1Color, setIcon1Color] = useState("#ffffff");
  const [icon2Color, setIcon2Color] = useState("#ffffff");
  const [icon3Color, setIcon3Color] = useState("#ffffff");
  const [icon4Color, setIcon4Color] = useState("#ffffff");
  const [icon5Color, setIcon5Color] = useState("#ffffff");
  const [icon6Color, setIcon6Color] = useState("#ffffff");

  // css in js for svg icons

  var aboutme = css`
     {
      fill: ${icon1Color};
    }
  `;

  var portfolio = css`
     {
      fill: ${icon2Color};
    }
  `;

  var services = css`
     {
      fill: ${icon3Color};
    }
  `;

  var resume = css`
     {
      fill: ${icon4Color};
    }
  `;

  var blog = css`
     {
      fill: ${icon5Color};
    }
  `;

  var contact = css`
     {
      fill: ${icon6Color};
    }
  `;

  // Executes each time new page loads,
  //finds current route and based on that sets iconColor variable value
  useEffect(() => {
    /*
    var currentRoute = location.pathname;
    console.log(currentRoute);
    */
    switch (location.pathname) {
      case "/aboutme":
        setIcon1Color("#18325b");
        break;

      case "/portfolio":
        setIcon2Color("#18325b");
        break;

      case "/service":
        setIcon3Color("#18325b");
        break;

      case "/resume":
        setIcon4Color("#18325b");
        break;

      case "/blog":
        setIcon5Color("#18325b");
        break;

      case "/contact":
        setIcon5Color("#18325b");
        break;

      default:
        setIcon1Color("#ffffff");
        setIcon2Color("#ffffff");
        setIcon3Color("#ffffff");
        setIcon4Color("#ffffff");
        setIcon5Color("#ffffff");
        setIcon6Color("#ffffff");
        break;
    }
  }, [location.pathname]);

  return (
    <div className="sidebar-container">
      <div className="sidebar-content-container">
        <h1 className="sidebar-header">Ratan Singh</h1>
        <img
          className="sidebar-profile-pic "
          src={RatanProfilePicture}
          alt=""
        />
        <p className="sidebar-description ">
          Hi, my name is Ratan and I'm a senior machine learning engineer.
          Welcome to my personal website!
        </p>
        <div className="margin"></div>
        <div className="nav-links">
          <Link to="/aboutme" className={aboutme} id="nav-link">
            <svg
              width="122"
              height="27"
              viewBox="0 0 122 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 13.725C6.941 13.725 6.325 14.341 6.325 15.1C6.325 15.859 6.941 16.475 7.7 16.475C8.459 16.475 9.075 15.859 9.075 15.1C9.075 14.341 8.459 13.725 7.7 13.725ZM14.3 13.725C13.541 13.725 12.925 14.341 12.925 15.1C12.925 15.859 13.541 16.475 14.3 16.475C15.059 16.475 15.675 15.859 15.675 15.1C15.675 14.341 15.059 13.725 14.3 13.725ZM11 3C4.928 3 0 7.928 0 14C0 20.072 4.928 25 11 25C17.072 25 22 20.072 22 14C22 7.928 17.072 3 11 3ZM11 22.8C6.149 22.8 2.2 18.851 2.2 14C2.2 13.681 2.222 13.362 2.255 13.054C4.851 11.899 6.908 9.776 7.986 7.147C9.977 9.963 13.255 11.8 16.962 11.8C17.82 11.8 18.645 11.701 19.437 11.514C19.668 12.295 19.8 13.131 19.8 14C19.8 18.851 15.851 22.8 11 22.8Z"
                fill="#ffffff"
                className={aboutme}
              />
              <path
                d="M42.946 17.606H37.942L37.114 20H34.468L38.986 7.418H41.92L46.438 20H43.774L42.946 17.606ZM42.262 15.59L40.444 10.334L38.626 15.59H42.262ZM50.6468 11.486C50.9708 11.006 51.4148 10.616 51.9788 10.316C52.5548 10.016 53.2088 9.866 53.9408 9.866C54.7928 9.866 55.5608 10.076 56.2448 10.496C56.9408 10.916 57.4868 11.516 57.8828 12.296C58.2908 13.064 58.4948 13.958 58.4948 14.978C58.4948 15.998 58.2908 16.904 57.8828 17.696C57.4868 18.476 56.9408 19.082 56.2448 19.514C55.5608 19.946 54.7928 20.162 53.9408 20.162C53.1968 20.162 52.5428 20.018 51.9788 19.73C51.4268 19.43 50.9828 19.046 50.6468 18.578V20H48.1268V6.68H50.6468V11.486ZM55.9208 14.978C55.9208 14.378 55.7948 13.862 55.5428 13.43C55.3028 12.986 54.9788 12.65 54.5708 12.422C54.1748 12.194 53.7428 12.08 53.2748 12.08C52.8188 12.08 52.3868 12.2 51.9788 12.44C51.5828 12.668 51.2588 13.004 51.0068 13.448C50.7668 13.892 50.6468 14.414 50.6468 15.014C50.6468 15.614 50.7668 16.136 51.0068 16.58C51.2588 17.024 51.5828 17.366 51.9788 17.606C52.3868 17.834 52.8188 17.948 53.2748 17.948C53.7428 17.948 54.1748 17.828 54.5708 17.588C54.9788 17.348 55.3028 17.006 55.5428 16.562C55.7948 16.118 55.9208 15.59 55.9208 14.978ZM64.754 20.162C63.794 20.162 62.93 19.952 62.162 19.532C61.394 19.1 60.788 18.494 60.344 17.714C59.912 16.934 59.696 16.034 59.696 15.014C59.696 13.994 59.918 13.094 60.362 12.314C60.818 11.534 61.436 10.934 62.216 10.514C62.996 10.082 63.866 9.866 64.826 9.866C65.786 9.866 66.656 10.082 67.436 10.514C68.216 10.934 68.828 11.534 69.272 12.314C69.728 13.094 69.956 13.994 69.956 15.014C69.956 16.034 69.722 16.934 69.254 17.714C68.798 18.494 68.174 19.1 67.382 19.532C66.602 19.952 65.726 20.162 64.754 20.162ZM64.754 17.966C65.21 17.966 65.636 17.858 66.032 17.642C66.44 17.414 66.764 17.078 67.004 16.634C67.244 16.19 67.364 15.65 67.364 15.014C67.364 14.066 67.112 13.34 66.608 12.836C66.116 12.32 65.51 12.062 64.79 12.062C64.07 12.062 63.464 12.32 62.972 12.836C62.492 13.34 62.252 14.066 62.252 15.014C62.252 15.962 62.486 16.694 62.954 17.21C63.434 17.714 64.034 17.966 64.754 17.966ZM81.2185 10.028V20H78.6805V18.74C78.3565 19.172 77.9305 19.514 77.4025 19.766C76.8865 20.006 76.3225 20.126 75.7105 20.126C74.9305 20.126 74.2405 19.964 73.6405 19.64C73.0405 19.304 72.5665 18.818 72.2185 18.182C71.8825 17.534 71.7145 16.766 71.7145 15.878V10.028H74.2345V15.518C74.2345 16.31 74.4325 16.922 74.8285 17.354C75.2245 17.774 75.7645 17.984 76.4485 17.984C77.1445 17.984 77.6905 17.774 78.0865 17.354C78.4825 16.922 78.6805 16.31 78.6805 15.518V10.028H81.2185ZM86.6389 12.098V16.922C86.6389 17.258 86.7169 17.504 86.8729 17.66C87.0409 17.804 87.3169 17.876 87.7009 17.876H88.8709V20H87.2869C85.1629 20 84.1009 18.968 84.1009 16.904V12.098H82.9129V10.028H84.1009V7.562H86.6389V10.028H88.8709V12.098H86.6389ZM108.67 7.436V20H106.15V11.828L102.784 20H100.876L97.4925 11.828V20H94.9725V7.436H97.8345L101.83 16.778L105.826 7.436H108.67ZM120.432 14.798C120.432 15.158 120.408 15.482 120.36 15.77H113.07C113.13 16.49 113.382 17.054 113.826 17.462C114.27 17.87 114.816 18.074 115.464 18.074C116.4 18.074 117.066 17.672 117.462 16.868H120.18C119.892 17.828 119.34 18.62 118.524 19.244C117.708 19.856 116.706 20.162 115.518 20.162C114.558 20.162 113.694 19.952 112.926 19.532C112.17 19.1 111.576 18.494 111.144 17.714C110.724 16.934 110.514 16.034 110.514 15.014C110.514 13.982 110.724 13.076 111.144 12.296C111.564 11.516 112.152 10.916 112.908 10.496C113.664 10.076 114.534 9.866 115.518 9.866C116.466 9.866 117.312 10.07 118.056 10.478C118.812 10.886 119.394 11.468 119.802 12.224C120.222 12.968 120.432 13.826 120.432 14.798ZM117.822 14.078C117.81 13.43 117.576 12.914 117.12 12.53C116.664 12.134 116.106 11.936 115.446 11.936C114.822 11.936 114.294 12.128 113.862 12.512C113.442 12.884 113.184 13.406 113.088 14.078H117.822Z"
                fill="#ffffff"
                className={aboutme}
              />
            </svg>
          </Link>
          <Link to="/portfolio" className={portfolio} id="nav-link">
            <svg
              width="111"
              height="27"
              viewBox="0 0 111 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 20H22V7C22 5.9 21.1 5 20 5H4C2.9 5 2 5.9 2 7V20H1C0.45 20 0 20.45 0 21C0 21.55 0.45 22 1 22H23C23.55 22 24 21.55 24 21C24 20.45 23.55 20 23 20ZM13.5 20H10.5C10.22 20 10 19.78 10 19.5C10 19.22 10.22 19 10.5 19H13.5C13.78 19 14 19.22 14 19.5C14 19.78 13.78 20 13.5 20ZM20 17H4V8C4 7.45 4.45 7 5 7H19C19.55 7 20 7.45 20 8V17Z"
                fill="#ffffff"
                className={portfolio}
              />
              <path
                d="M45.404 11.324C45.404 11.996 45.242 12.626 44.918 13.214C44.606 13.802 44.108 14.276 43.424 14.636C42.752 14.996 41.9 15.176 40.868 15.176H38.762V20H36.242V7.436H40.868C41.84 7.436 42.668 7.604 43.352 7.94C44.036 8.276 44.546 8.738 44.882 9.326C45.23 9.914 45.404 10.58 45.404 11.324ZM40.76 13.142C41.456 13.142 41.972 12.986 42.308 12.674C42.644 12.35 42.812 11.9 42.812 11.324C42.812 10.1 42.128 9.488 40.76 9.488H38.762V13.142H40.76ZM51.6212 20.162C50.6612 20.162 49.7972 19.952 49.0292 19.532C48.2612 19.1 47.6552 18.494 47.2112 17.714C46.7792 16.934 46.5632 16.034 46.5632 15.014C46.5632 13.994 46.7852 13.094 47.2292 12.314C47.6852 11.534 48.3032 10.934 49.0832 10.514C49.8632 10.082 50.7332 9.866 51.6932 9.866C52.6532 9.866 53.5232 10.082 54.3032 10.514C55.0832 10.934 55.6952 11.534 56.1392 12.314C56.5952 13.094 56.8232 13.994 56.8232 15.014C56.8232 16.034 56.5892 16.934 56.1212 17.714C55.6652 18.494 55.0412 19.1 54.2492 19.532C53.4692 19.952 52.5932 20.162 51.6212 20.162ZM51.6212 17.966C52.0772 17.966 52.5032 17.858 52.8992 17.642C53.3072 17.414 53.6312 17.078 53.8712 16.634C54.1112 16.19 54.2312 15.65 54.2312 15.014C54.2312 14.066 53.9792 13.34 53.4752 12.836C52.9832 12.32 52.3772 12.062 51.6572 12.062C50.9372 12.062 50.3312 12.32 49.8392 12.836C49.3592 13.34 49.1192 14.066 49.1192 15.014C49.1192 15.962 49.3532 16.694 49.8212 17.21C50.3012 17.714 50.9012 17.966 51.6212 17.966ZM61.1917 11.576C61.5157 11.048 61.9357 10.634 62.4517 10.334C62.9797 10.034 63.5797 9.884 64.2517 9.884V12.53H63.5857C62.7937 12.53 62.1937 12.716 61.7857 13.088C61.3897 13.46 61.1917 14.108 61.1917 15.032V20H58.6717V10.028H61.1917V11.576ZM68.883 12.098V16.922C68.883 17.258 68.961 17.504 69.117 17.66C69.285 17.804 69.561 17.876 69.945 17.876H71.115V20H69.531C67.407 20 66.345 18.968 66.345 16.904V12.098H65.157V10.028H66.345V7.562H68.883V10.028H71.115V12.098H68.883ZM77.4995 12.098H75.7535V20H73.1975V12.098H72.0635V10.028H73.1975V9.524C73.1975 8.3 73.5455 7.4 74.2415 6.824C74.9375 6.248 75.9875 5.978 77.3915 6.014V8.138C76.7795 8.126 76.3535 8.228 76.1135 8.444C75.8735 8.66 75.7535 9.05 75.7535 9.614V10.028H77.4995V12.098ZM83.5606 20.162C82.6006 20.162 81.7366 19.952 80.9686 19.532C80.2006 19.1 79.5946 18.494 79.1506 17.714C78.7186 16.934 78.5026 16.034 78.5026 15.014C78.5026 13.994 78.7246 13.094 79.1686 12.314C79.6246 11.534 80.2426 10.934 81.0226 10.514C81.8026 10.082 82.6726 9.866 83.6326 9.866C84.5926 9.866 85.4626 10.082 86.2426 10.514C87.0226 10.934 87.6346 11.534 88.0786 12.314C88.5346 13.094 88.7626 13.994 88.7626 15.014C88.7626 16.034 88.5286 16.934 88.0606 17.714C87.6046 18.494 86.9806 19.1 86.1886 19.532C85.4086 19.952 84.5326 20.162 83.5606 20.162ZM83.5606 17.966C84.0166 17.966 84.4426 17.858 84.8386 17.642C85.2466 17.414 85.5706 17.078 85.8106 16.634C86.0506 16.19 86.1706 15.65 86.1706 15.014C86.1706 14.066 85.9186 13.34 85.4146 12.836C84.9226 12.32 84.3166 12.062 83.5966 12.062C82.8766 12.062 82.2706 12.32 81.7786 12.836C81.2986 13.34 81.0586 14.066 81.0586 15.014C81.0586 15.962 81.2926 16.694 81.7606 17.21C82.2406 17.714 82.8406 17.966 83.5606 17.966ZM93.1311 6.68V20H90.6111V6.68H93.1311ZM96.8989 8.84C96.4549 8.84 96.0829 8.702 95.7829 8.426C95.4949 8.138 95.3509 7.784 95.3509 7.364C95.3509 6.944 95.4949 6.596 95.7829 6.32C96.0829 6.032 96.4549 5.888 96.8989 5.888C97.3429 5.888 97.7089 6.032 97.9969 6.32C98.2969 6.596 98.4469 6.944 98.4469 7.364C98.4469 7.784 98.2969 8.138 97.9969 8.426C97.7089 8.702 97.3429 8.84 96.8989 8.84ZM98.1409 10.028V20H95.6209V10.028H98.1409ZM105.059 20.162C104.099 20.162 103.235 19.952 102.467 19.532C101.699 19.1 101.093 18.494 100.649 17.714C100.217 16.934 100.001 16.034 100.001 15.014C100.001 13.994 100.223 13.094 100.667 12.314C101.123 11.534 101.741 10.934 102.521 10.514C103.301 10.082 104.171 9.866 105.131 9.866C106.091 9.866 106.961 10.082 107.741 10.514C108.521 10.934 109.133 11.534 109.577 12.314C110.033 13.094 110.261 13.994 110.261 15.014C110.261 16.034 110.027 16.934 109.559 17.714C109.103 18.494 108.479 19.1 107.687 19.532C106.907 19.952 106.031 20.162 105.059 20.162ZM105.059 17.966C105.515 17.966 105.941 17.858 106.337 17.642C106.745 17.414 107.069 17.078 107.309 16.634C107.549 16.19 107.669 15.65 107.669 15.014C107.669 14.066 107.417 13.34 106.913 12.836C106.421 12.32 105.815 12.062 105.095 12.062C104.375 12.062 103.769 12.32 103.277 12.836C102.797 13.34 102.557 14.066 102.557 15.014C102.557 15.962 102.791 16.694 103.259 17.21C103.739 17.714 104.339 17.966 105.059 17.966Z"
                fill="#ffffff"
                className={portfolio}
              />
            </svg>
          </Link>
          <Link to="/services" className={services} id="nav-link">
            <svg
              width="110"
              height="27"
              viewBox="0 0 110 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8H14V6C14 4.89 13.11 4 12 4H8C6.89 4 6 4.89 6 6V8H2C0.89 8 0.00999999 8.89 0.00999999 10L0 21C0 22.11 0.89 23 2 23H18C19.11 23 20 22.11 20 21V10C20 8.89 19.11 8 18 8ZM12 8H8V6H12V8Z"
                fill="#ffffff"
                className={services}
              />
              <path
                d="M38.58 20.126C37.704 20.126 36.912 19.976 36.204 19.676C35.508 19.376 34.956 18.944 34.548 18.38C34.14 17.816 33.93 17.15 33.918 16.382H36.618C36.654 16.898 36.834 17.306 37.158 17.606C37.494 17.906 37.95 18.056 38.526 18.056C39.114 18.056 39.576 17.918 39.912 17.642C40.248 17.354 40.416 16.982 40.416 16.526C40.416 16.154 40.302 15.848 40.074 15.608C39.846 15.368 39.558 15.182 39.21 15.05C38.874 14.906 38.406 14.75 37.806 14.582C36.99 14.342 36.324 14.108 35.808 13.88C35.304 13.64 34.866 13.286 34.494 12.818C34.134 12.338 33.954 11.702 33.954 10.91C33.954 10.166 34.14 9.518 34.512 8.966C34.884 8.414 35.406 7.994 36.078 7.706C36.75 7.406 37.518 7.256 38.382 7.256C39.678 7.256 40.728 7.574 41.532 8.21C42.348 8.834 42.798 9.71 42.882 10.838H40.11C40.086 10.406 39.9 10.052 39.552 9.776C39.216 9.488 38.766 9.344 38.202 9.344C37.71 9.344 37.314 9.47 37.014 9.722C36.726 9.974 36.582 10.34 36.582 10.82C36.582 11.156 36.69 11.438 36.906 11.666C37.134 11.882 37.41 12.062 37.734 12.206C38.07 12.338 38.538 12.494 39.138 12.674C39.954 12.914 40.62 13.154 41.136 13.394C41.652 13.634 42.096 13.994 42.468 14.474C42.84 14.954 43.026 15.584 43.026 16.364C43.026 17.036 42.852 17.66 42.504 18.236C42.156 18.812 41.646 19.274 40.974 19.622C40.302 19.958 39.504 20.126 38.58 20.126ZM54.4808 14.798C54.4808 15.158 54.4568 15.482 54.4088 15.77H47.1188C47.1788 16.49 47.4308 17.054 47.8748 17.462C48.3188 17.87 48.8648 18.074 49.5128 18.074C50.4488 18.074 51.1148 17.672 51.5108 16.868H54.2288C53.9408 17.828 53.3888 18.62 52.5728 19.244C51.7568 19.856 50.7548 20.162 49.5668 20.162C48.6068 20.162 47.7428 19.952 46.9748 19.532C46.2188 19.1 45.6248 18.494 45.1928 17.714C44.7728 16.934 44.5627 16.034 44.5627 15.014C44.5627 13.982 44.7728 13.076 45.1928 12.296C45.6128 11.516 46.2008 10.916 46.9568 10.496C47.7128 10.076 48.5828 9.866 49.5668 9.866C50.5148 9.866 51.3608 10.07 52.1048 10.478C52.8608 10.886 53.4428 11.468 53.8508 12.224C54.2708 12.968 54.4808 13.826 54.4808 14.798ZM51.8708 14.078C51.8588 13.43 51.6248 12.914 51.1688 12.53C50.7128 12.134 50.1548 11.936 49.4948 11.936C48.8708 11.936 48.3428 12.128 47.9108 12.512C47.4908 12.884 47.2328 13.406 47.1368 14.078H51.8708ZM58.8401 11.576C59.1641 11.048 59.5841 10.634 60.1001 10.334C60.6281 10.034 61.2281 9.884 61.9001 9.884V12.53H61.2341C60.4421 12.53 59.8421 12.716 59.4341 13.088C59.0381 13.46 58.8401 14.108 58.8401 15.032V20H56.3201V10.028H58.8401V11.576ZM67.7555 17.678L70.2755 10.028H72.9575L69.2675 20H66.2075L62.5355 10.028H65.2355L67.7555 17.678ZM75.6509 8.84C75.2069 8.84 74.8349 8.702 74.5349 8.426C74.2469 8.138 74.1029 7.784 74.1029 7.364C74.1029 6.944 74.2469 6.596 74.5349 6.32C74.8349 6.032 75.2069 5.888 75.6509 5.888C76.0949 5.888 76.4609 6.032 76.7489 6.32C77.0489 6.596 77.1989 6.944 77.1989 7.364C77.1989 7.784 77.0489 8.138 76.7489 8.426C76.4609 8.702 76.0949 8.84 75.6509 8.84ZM76.8929 10.028V20H74.3729V10.028H76.8929ZM78.7346 15.014C78.7346 13.982 78.9446 13.082 79.3646 12.314C79.7846 11.534 80.3666 10.934 81.1106 10.514C81.8546 10.082 82.7066 9.866 83.6666 9.866C84.9026 9.866 85.9226 10.178 86.7266 10.802C87.5426 11.414 88.0886 12.278 88.3646 13.394H85.6466C85.5026 12.962 85.2566 12.626 84.9086 12.386C84.5726 12.134 84.1526 12.008 83.6486 12.008C82.9286 12.008 82.3586 12.272 81.9386 12.8C81.5186 13.316 81.3086 14.054 81.3086 15.014C81.3086 15.962 81.5186 16.7 81.9386 17.228C82.3586 17.744 82.9286 18.002 83.6486 18.002C84.6686 18.002 85.3346 17.546 85.6466 16.634H88.3646C88.0886 17.714 87.5426 18.572 86.7266 19.208C85.9106 19.844 84.8906 20.162 83.6666 20.162C82.7066 20.162 81.8546 19.952 81.1106 19.532C80.3666 19.1 79.7846 18.5 79.3646 17.732C78.9446 16.952 78.7346 16.046 78.7346 15.014ZM99.4808 14.798C99.4808 15.158 99.4568 15.482 99.4088 15.77H92.1188C92.1788 16.49 92.4308 17.054 92.8748 17.462C93.3188 17.87 93.8648 18.074 94.5128 18.074C95.4488 18.074 96.1148 17.672 96.5108 16.868H99.2288C98.9408 17.828 98.3888 18.62 97.5728 19.244C96.7568 19.856 95.7548 20.162 94.5668 20.162C93.6068 20.162 92.7428 19.952 91.9748 19.532C91.2188 19.1 90.6248 18.494 90.1928 17.714C89.7728 16.934 89.5627 16.034 89.5627 15.014C89.5627 13.982 89.7728 13.076 90.1928 12.296C90.6128 11.516 91.2008 10.916 91.9568 10.496C92.7128 10.076 93.5828 9.866 94.5668 9.866C95.5148 9.866 96.3608 10.07 97.1048 10.478C97.8608 10.886 98.4428 11.468 98.8508 12.224C99.2708 12.968 99.4808 13.826 99.4808 14.798ZM96.8708 14.078C96.8588 13.43 96.6248 12.914 96.1688 12.53C95.7128 12.134 95.1548 11.936 94.4948 11.936C93.8708 11.936 93.3428 12.128 92.9108 12.512C92.4908 12.884 92.2328 13.406 92.1368 14.078H96.8708ZM105.136 20.162C104.32 20.162 103.588 20.018 102.94 19.73C102.292 19.43 101.776 19.028 101.392 18.524C101.02 18.02 100.816 17.462 100.78 16.85H103.318C103.366 17.234 103.552 17.552 103.876 17.804C104.212 18.056 104.626 18.182 105.118 18.182C105.598 18.182 105.97 18.086 106.234 17.894C106.51 17.702 106.648 17.456 106.648 17.156C106.648 16.832 106.48 16.592 106.144 16.436C105.82 16.268 105.298 16.088 104.578 15.896C103.834 15.716 103.222 15.53 102.742 15.338C102.274 15.146 101.866 14.852 101.518 14.456C101.182 14.06 101.014 13.526 101.014 12.854C101.014 12.302 101.17 11.798 101.482 11.342C101.806 10.886 102.262 10.526 102.85 10.262C103.45 9.998 104.152 9.866 104.956 9.866C106.144 9.866 107.092 10.166 107.8 10.766C108.508 11.354 108.898 12.152 108.97 13.16H106.558C106.522 12.764 106.354 12.452 106.054 12.224C105.766 11.984 105.376 11.864 104.884 11.864C104.428 11.864 104.074 11.948 103.822 12.116C103.582 12.284 103.462 12.518 103.462 12.818C103.462 13.154 103.63 13.412 103.966 13.592C104.302 13.76 104.824 13.934 105.532 14.114C106.252 14.294 106.846 14.48 107.314 14.672C107.782 14.864 108.184 15.164 108.52 15.572C108.868 15.968 109.048 16.496 109.06 17.156C109.06 17.732 108.898 18.248 108.574 18.704C108.262 19.16 107.806 19.52 107.206 19.784C106.618 20.036 105.928 20.162 105.136 20.162Z"
                fill="#ffffff"
                className={services}
              />
            </svg>
          </Link>
          <Link to="/resume" className={resume} id="nav-link">
            <svg
              width="110"
              height="27"
              viewBox="0 0 110 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5H5C3.9 5 3 5.9 3 7V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM13 19H8C7.45 19 7 18.55 7 18C7 17.45 7.45 17 8 17H13C13.55 17 14 17.45 14 18C14 18.55 13.55 19 13 19ZM16 15H8C7.45 15 7 14.55 7 14C7 13.45 7.45 13 8 13H16C16.55 13 17 13.45 17 14C17 14.55 16.55 15 16 15ZM16 11H8C7.45 11 7 10.55 7 10C7 9.45 7.45 9 8 9H16C16.55 9 17 9.45 17 10C17 10.55 16.55 11 16 11Z"
                fill="#ffffff"
                className={resume}
              />
              <path
                d="M42.722 20L39.95 15.104H38.762V20H36.242V7.436H40.958C41.93 7.436 42.758 7.61 43.442 7.958C44.126 8.294 44.636 8.756 44.972 9.344C45.32 9.92 45.494 10.568 45.494 11.288C45.494 12.116 45.254 12.866 44.774 13.538C44.294 14.198 43.58 14.654 42.632 14.906L45.638 20H42.722ZM38.762 13.214H40.868C41.552 13.214 42.062 13.052 42.398 12.728C42.734 12.392 42.902 11.93 42.902 11.342C42.902 10.766 42.734 10.322 42.398 10.01C42.062 9.686 41.552 9.524 40.868 9.524H38.762V13.214ZM57.0433 14.798C57.0433 15.158 57.0193 15.482 56.9713 15.77H49.6813C49.7413 16.49 49.9933 17.054 50.4373 17.462C50.8813 17.87 51.4273 18.074 52.0753 18.074C53.0113 18.074 53.6773 17.672 54.0733 16.868H56.7913C56.5033 17.828 55.9513 18.62 55.1353 19.244C54.3193 19.856 53.3173 20.162 52.1293 20.162C51.1693 20.162 50.3053 19.952 49.5373 19.532C48.7813 19.1 48.1873 18.494 47.7553 17.714C47.3353 16.934 47.1252 16.034 47.1252 15.014C47.1252 13.982 47.3353 13.076 47.7553 12.296C48.1753 11.516 48.7633 10.916 49.5193 10.496C50.2753 10.076 51.1453 9.866 52.1293 9.866C53.0773 9.866 53.9233 10.07 54.6673 10.478C55.4233 10.886 56.0053 11.468 56.4133 12.224C56.8333 12.968 57.0433 13.826 57.0433 14.798ZM54.4333 14.078C54.4213 13.43 54.1873 12.914 53.7313 12.53C53.2753 12.134 52.7173 11.936 52.0573 11.936C51.4333 11.936 50.9053 12.128 50.4733 12.512C50.0533 12.884 49.7953 13.406 49.6993 14.078H54.4333ZM62.6986 20.162C61.8826 20.162 61.1506 20.018 60.5026 19.73C59.8546 19.43 59.3386 19.028 58.9546 18.524C58.5826 18.02 58.3786 17.462 58.3426 16.85H60.8806C60.9286 17.234 61.1146 17.552 61.4386 17.804C61.7746 18.056 62.1886 18.182 62.6806 18.182C63.1606 18.182 63.5326 18.086 63.7966 17.894C64.0726 17.702 64.2106 17.456 64.2106 17.156C64.2106 16.832 64.0426 16.592 63.7066 16.436C63.3826 16.268 62.8606 16.088 62.1406 15.896C61.3966 15.716 60.7846 15.53 60.3046 15.338C59.8366 15.146 59.4286 14.852 59.0806 14.456C58.7446 14.06 58.5766 13.526 58.5766 12.854C58.5766 12.302 58.7326 11.798 59.0446 11.342C59.3686 10.886 59.8246 10.526 60.4126 10.262C61.0126 9.998 61.7146 9.866 62.5186 9.866C63.7066 9.866 64.6546 10.166 65.3626 10.766C66.0706 11.354 66.4606 12.152 66.5326 13.16H64.1206C64.0846 12.764 63.9166 12.452 63.6166 12.224C63.3286 11.984 62.9386 11.864 62.4466 11.864C61.9906 11.864 61.6366 11.948 61.3846 12.116C61.1446 12.284 61.0246 12.518 61.0246 12.818C61.0246 13.154 61.1926 13.412 61.5286 13.592C61.8646 13.76 62.3866 13.934 63.0946 14.114C63.8146 14.294 64.4086 14.48 64.8766 14.672C65.3446 14.864 65.7466 15.164 66.0826 15.572C66.4306 15.968 66.6106 16.496 66.6226 17.156C66.6226 17.732 66.4606 18.248 66.1366 18.704C65.8246 19.16 65.3686 19.52 64.7686 19.784C64.1806 20.036 63.4906 20.162 62.6986 20.162ZM78.1052 10.028V20H75.5672V18.74C75.2432 19.172 74.8172 19.514 74.2892 19.766C73.7732 20.006 73.2092 20.126 72.5972 20.126C71.8172 20.126 71.1272 19.964 70.5272 19.64C69.9272 19.304 69.4532 18.818 69.1052 18.182C68.7692 17.534 68.6012 16.766 68.6012 15.878V10.028H71.1212V15.518C71.1212 16.31 71.3192 16.922 71.7152 17.354C72.1112 17.774 72.6512 17.984 73.3352 17.984C74.0312 17.984 74.5772 17.774 74.9732 17.354C75.3692 16.922 75.5672 16.31 75.5672 15.518V10.028H78.1052ZM92.9756 9.884C94.1996 9.884 95.1836 10.262 95.9276 11.018C96.6836 11.762 97.0616 12.806 97.0616 14.15V20H94.5416V14.492C94.5416 13.712 94.3436 13.118 93.9476 12.71C93.5516 12.29 93.0116 12.08 92.3276 12.08C91.6436 12.08 91.0976 12.29 90.6896 12.71C90.2936 13.118 90.0956 13.712 90.0956 14.492V20H87.5756V14.492C87.5756 13.712 87.3776 13.118 86.9816 12.71C86.5856 12.29 86.0456 12.08 85.3616 12.08C84.6656 12.08 84.1136 12.29 83.7056 12.71C83.3096 13.118 83.1116 13.712 83.1116 14.492V20H80.5916V10.028H83.1116V11.234C83.4356 10.814 83.8496 10.484 84.3536 10.244C84.8696 10.004 85.4336 9.884 86.0456 9.884C86.8256 9.884 87.5216 10.052 88.1336 10.388C88.7456 10.712 89.2196 11.18 89.5556 11.792C89.8796 11.216 90.3476 10.754 90.9596 10.406C91.5836 10.058 92.2556 9.884 92.9756 9.884ZM108.723 14.798C108.723 15.158 108.699 15.482 108.651 15.77H101.361C101.421 16.49 101.673 17.054 102.117 17.462C102.561 17.87 103.107 18.074 103.755 18.074C104.691 18.074 105.357 17.672 105.753 16.868H108.471C108.183 17.828 107.631 18.62 106.815 19.244C105.999 19.856 104.997 20.162 103.809 20.162C102.849 20.162 101.985 19.952 101.217 19.532C100.461 19.1 99.8669 18.494 99.4349 17.714C99.0149 16.934 98.8049 16.034 98.8049 15.014C98.8049 13.982 99.0149 13.076 99.4349 12.296C99.8549 11.516 100.443 10.916 101.199 10.496C101.955 10.076 102.825 9.866 103.809 9.866C104.757 9.866 105.603 10.07 106.347 10.478C107.103 10.886 107.685 11.468 108.093 12.224C108.513 12.968 108.723 13.826 108.723 14.798ZM106.113 14.078C106.101 13.43 105.867 12.914 105.411 12.53C104.955 12.134 104.397 11.936 103.737 11.936C103.113 11.936 102.585 12.128 102.153 12.512C101.733 12.884 101.475 13.406 101.379 14.078H106.113Z"
                fill="#ffffff"
                className={resume}
              />
            </svg>
          </Link>
          <Link to="/blog" className={blog} id="nav-link">
            <svg
              width="75"
              height="27"
              viewBox="0 0 75 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 7C14.55 7 12.45 7.4 11 8.5C9.55 7.4 7.45 7 5.5 7C4.05 7 2.51 7.22 1.22 7.79C0.49 8.12 0 8.83 0 9.64V20.92C0 22.22 1.22 23.18 2.48 22.86C3.46 22.61 4.5 22.5 5.5 22.5C7.06 22.5 8.72 22.76 10.06 23.42C10.66 23.72 11.34 23.72 11.93 23.42C13.27 22.75 14.93 22.5 16.49 22.5C17.49 22.5 18.53 22.61 19.51 22.86C20.77 23.19 21.99 22.23 21.99 20.92V9.64C21.99 8.83 21.5 8.12 20.77 7.79C19.49 7.22 17.95 7 16.5 7V7ZM20 19.73C20 20.36 19.42 20.82 18.8 20.71C18.05 20.57 17.27 20.51 16.5 20.51C14.8 20.51 12.35 21.16 11 22.01V10.5C12.35 9.65 14.8 9 16.5 9C17.42 9 18.33 9.09 19.2 9.28C19.66 9.38 20 9.79 20 10.26V19.73Z"
                fill="#ffffff"
                className={blog}
              />
              <path
                d="M42.37 13.556C43.078 13.688 43.66 14.042 44.116 14.618C44.572 15.194 44.8 15.854 44.8 16.598C44.8 17.27 44.632 17.864 44.296 18.38C43.972 18.884 43.498 19.28 42.874 19.568C42.25 19.856 41.512 20 40.66 20H35.242V7.436H40.426C41.278 7.436 42.01 7.574 42.622 7.85C43.246 8.126 43.714 8.51 44.026 9.002C44.35 9.494 44.512 10.052 44.512 10.676C44.512 11.408 44.314 12.02 43.918 12.512C43.534 13.004 43.018 13.352 42.37 13.556ZM37.762 12.62H40.066C40.666 12.62 41.128 12.488 41.452 12.224C41.776 11.948 41.938 11.558 41.938 11.054C41.938 10.55 41.776 10.16 41.452 9.884C41.128 9.608 40.666 9.47 40.066 9.47H37.762V12.62ZM40.3 17.948C40.912 17.948 41.386 17.804 41.722 17.516C42.07 17.228 42.244 16.82 42.244 16.292C42.244 15.752 42.064 15.332 41.704 15.032C41.344 14.72 40.858 14.564 40.246 14.564H37.762V17.948H40.3ZM49.3284 6.68V20H46.8084V6.68H49.3284ZM56.2462 20.162C55.2862 20.162 54.4222 19.952 53.6542 19.532C52.8862 19.1 52.2802 18.494 51.8362 17.714C51.4042 16.934 51.1882 16.034 51.1882 15.014C51.1882 13.994 51.4102 13.094 51.8542 12.314C52.3102 11.534 52.9282 10.934 53.7082 10.514C54.4882 10.082 55.3582 9.866 56.3182 9.866C57.2782 9.866 58.1482 10.082 58.9282 10.514C59.7082 10.934 60.3202 11.534 60.7642 12.314C61.2202 13.094 61.4482 13.994 61.4482 15.014C61.4482 16.034 61.2142 16.934 60.7462 17.714C60.2902 18.494 59.6662 19.1 58.8742 19.532C58.0942 19.952 57.2182 20.162 56.2462 20.162ZM56.2462 17.966C56.7022 17.966 57.1282 17.858 57.5242 17.642C57.9322 17.414 58.2562 17.078 58.4962 16.634C58.7362 16.19 58.8562 15.65 58.8562 15.014C58.8562 14.066 58.6042 13.34 58.1002 12.836C57.6082 12.32 57.0022 12.062 56.2822 12.062C55.5622 12.062 54.9562 12.32 54.4642 12.836C53.9842 13.34 53.7442 14.066 53.7442 15.014C53.7442 15.962 53.9782 16.694 54.4462 17.21C54.9262 17.714 55.5262 17.966 56.2462 17.966ZM67.2027 9.866C67.9467 9.866 68.6007 10.016 69.1647 10.316C69.7287 10.604 70.1727 10.982 70.4967 11.45V10.028H73.0347V20.072C73.0347 20.996 72.8487 21.818 72.4767 22.538C72.1047 23.27 71.5467 23.846 70.8027 24.266C70.0587 24.698 69.1587 24.914 68.1027 24.914C66.6867 24.914 65.5227 24.584 64.6107 23.924C63.7107 23.264 63.2007 22.364 63.0807 21.224H65.5827C65.7147 21.68 65.9967 22.04 66.4287 22.304C66.8727 22.58 67.4067 22.718 68.0307 22.718C68.7627 22.718 69.3567 22.496 69.8127 22.052C70.2687 21.62 70.4967 20.96 70.4967 20.072V18.524C70.1727 18.992 69.7227 19.382 69.1467 19.694C68.5827 20.006 67.9347 20.162 67.2027 20.162C66.3627 20.162 65.5947 19.946 64.8987 19.514C64.2027 19.082 63.6507 18.476 63.2427 17.696C62.8467 16.904 62.6487 15.998 62.6487 14.978C62.6487 13.97 62.8467 13.076 63.2427 12.296C63.6507 11.516 64.1967 10.916 64.8807 10.496C65.5767 10.076 66.3507 9.866 67.2027 9.866ZM70.4967 15.014C70.4967 14.402 70.3767 13.88 70.1367 13.448C69.8967 13.004 69.5727 12.668 69.1647 12.44C68.7567 12.2 68.3187 12.08 67.8507 12.08C67.3827 12.08 66.9507 12.194 66.5547 12.422C66.1587 12.65 65.8347 12.986 65.5827 13.43C65.3427 13.862 65.2227 14.378 65.2227 14.978C65.2227 15.578 65.3427 16.106 65.5827 16.562C65.8347 17.006 66.1587 17.348 66.5547 17.588C66.9627 17.828 67.3947 17.948 67.8507 17.948C68.3187 17.948 68.7567 17.834 69.1647 17.606C69.5727 17.366 69.8967 17.03 70.1367 16.598C70.3767 16.154 70.4967 15.626 70.4967 15.014Z"
                fill="#ffffff"
                className={blog}
              />
            </svg>
          </Link>
          <Link to="/contact" className={contact} id="nav-link">
            <svg
              width="108"
              height="27"
              viewBox="0 0 108 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6H2C0.9 6 0.00999999 6.9 0.00999999 8L0 20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM17.6 10.25L10.53 14.67C10.21 14.87 9.79 14.87 9.47 14.67L2.4 10.25C2.15 10.09 2 9.82 2 9.53C2 8.86 2.73 8.46 3.3 8.81L10 13L16.7 8.81C17.27 8.46 18 8.86 18 9.53C18 9.82 17.85 10.09 17.6 10.25Z"
                fill="#ffffff"
                className={contact}
              />
              <path
                d="M33.63 13.7C33.63 12.464 33.906 11.36 34.458 10.388C35.022 9.404 35.784 8.642 36.744 8.102C37.716 7.55 38.802 7.274 40.002 7.274C41.406 7.274 42.636 7.634 43.692 8.354C44.748 9.074 45.486 10.07 45.906 11.342H43.008C42.72 10.742 42.312 10.292 41.784 9.992C41.268 9.692 40.668 9.542 39.984 9.542C39.252 9.542 38.598 9.716 38.022 10.064C37.458 10.4 37.014 10.88 36.69 11.504C36.378 12.128 36.222 12.86 36.222 13.7C36.222 14.528 36.378 15.26 36.69 15.896C37.014 16.52 37.458 17.006 38.022 17.354C38.598 17.69 39.252 17.858 39.984 17.858C40.668 17.858 41.268 17.708 41.784 17.408C42.312 17.096 42.72 16.64 43.008 16.04H45.906C45.486 17.324 44.748 18.326 43.692 19.046C42.648 19.754 41.418 20.108 40.002 20.108C38.802 20.108 37.716 19.838 36.744 19.298C35.784 18.746 35.022 17.984 34.458 17.012C33.906 16.04 33.63 14.936 33.63 13.7ZM52.4864 20.162C51.5264 20.162 50.6624 19.952 49.8944 19.532C49.1264 19.1 48.5204 18.494 48.0764 17.714C47.6444 16.934 47.4284 16.034 47.4284 15.014C47.4284 13.994 47.6504 13.094 48.0944 12.314C48.5504 11.534 49.1684 10.934 49.9484 10.514C50.7284 10.082 51.5984 9.866 52.5584 9.866C53.5184 9.866 54.3884 10.082 55.1684 10.514C55.9484 10.934 56.5604 11.534 57.0044 12.314C57.4604 13.094 57.6884 13.994 57.6884 15.014C57.6884 16.034 57.4544 16.934 56.9864 17.714C56.5304 18.494 55.9064 19.1 55.1144 19.532C54.3344 19.952 53.4584 20.162 52.4864 20.162ZM52.4864 17.966C52.9424 17.966 53.3684 17.858 53.7644 17.642C54.1724 17.414 54.4964 17.078 54.7364 16.634C54.9764 16.19 55.0964 15.65 55.0964 15.014C55.0964 14.066 54.8444 13.34 54.3404 12.836C53.8484 12.32 53.2424 12.062 52.5224 12.062C51.8024 12.062 51.1964 12.32 50.7044 12.836C50.2244 13.34 49.9844 14.066 49.9844 15.014C49.9844 15.962 50.2184 16.694 50.6864 17.21C51.1664 17.714 51.7664 17.966 52.4864 17.966ZM65.0629 9.884C66.2509 9.884 67.2109 10.262 67.9429 11.018C68.6749 11.762 69.0409 12.806 69.0409 14.15V20H66.5209V14.492C66.5209 13.7 66.3229 13.094 65.9269 12.674C65.5309 12.242 64.9909 12.026 64.3069 12.026C63.6109 12.026 63.0589 12.242 62.6509 12.674C62.2549 13.094 62.0569 13.7 62.0569 14.492V20H59.5369V10.028H62.0569V11.27C62.3929 10.838 62.8189 10.502 63.3349 10.262C63.8629 10.01 64.4389 9.884 65.0629 9.884ZM74.3713 12.098V16.922C74.3713 17.258 74.4493 17.504 74.6053 17.66C74.7733 17.804 75.0493 17.876 75.4333 17.876H76.6033V20H75.0193C72.8953 20 71.8333 18.968 71.8333 16.904V12.098H70.6453V10.028H71.8333V7.562H74.3713V10.028H76.6033V12.098H74.3713ZM77.7678 14.978C77.7678 13.97 77.9658 13.076 78.3618 12.296C78.7698 11.516 79.3158 10.916 79.9998 10.496C80.6958 10.076 81.4698 9.866 82.3218 9.866C83.0658 9.866 83.7138 10.016 84.2658 10.316C84.8298 10.616 85.2798 10.994 85.6158 11.45V10.028H88.1538V20H85.6158V18.542C85.2918 19.01 84.8418 19.4 84.2658 19.712C83.7018 20.012 83.0478 20.162 82.3038 20.162C81.4638 20.162 80.6958 19.946 79.9998 19.514C79.3158 19.082 78.7698 18.476 78.3618 17.696C77.9658 16.904 77.7678 15.998 77.7678 14.978ZM85.6158 15.014C85.6158 14.402 85.4958 13.88 85.2558 13.448C85.0158 13.004 84.6918 12.668 84.2838 12.44C83.8758 12.2 83.4378 12.08 82.9698 12.08C82.5018 12.08 82.0698 12.194 81.6738 12.422C81.2778 12.65 80.9538 12.986 80.7018 13.43C80.4618 13.862 80.3418 14.378 80.3418 14.978C80.3418 15.578 80.4618 16.106 80.7018 16.562C80.9538 17.006 81.2778 17.348 81.6738 17.588C82.0818 17.828 82.5138 17.948 82.9698 17.948C83.4378 17.948 83.8758 17.834 84.2838 17.606C84.6918 17.366 85.0158 17.03 85.2558 16.598C85.4958 16.154 85.6158 15.626 85.6158 15.014ZM89.967 15.014C89.967 13.982 90.177 13.082 90.597 12.314C91.017 11.534 91.599 10.934 92.343 10.514C93.087 10.082 93.939 9.866 94.899 9.866C96.135 9.866 97.155 10.178 97.959 10.802C98.775 11.414 99.321 12.278 99.597 13.394H96.879C96.735 12.962 96.489 12.626 96.141 12.386C95.805 12.134 95.385 12.008 94.881 12.008C94.161 12.008 93.591 12.272 93.171 12.8C92.751 13.316 92.541 14.054 92.541 15.014C92.541 15.962 92.751 16.7 93.171 17.228C93.591 17.744 94.161 18.002 94.881 18.002C95.901 18.002 96.567 17.546 96.879 16.634H99.597C99.321 17.714 98.775 18.572 97.959 19.208C97.143 19.844 96.123 20.162 94.899 20.162C93.939 20.162 93.087 19.952 92.343 19.532C91.599 19.1 91.017 18.5 90.597 17.732C90.177 16.952 89.967 16.046 89.967 15.014ZM104.377 12.098V16.922C104.377 17.258 104.455 17.504 104.611 17.66C104.779 17.804 105.055 17.876 105.439 17.876H106.609V20H105.025C102.901 20 101.839 18.968 101.839 16.904V12.098H100.651V10.028H101.839V7.562H104.377V10.028H106.609V12.098H104.377Z"
                fill="#ffffff"
                className={contact}
              />
            </svg>
          </Link>
        </div>
        <div className="margin"></div>
        <Link to="/contact" className="hire-me-button">
          <img id="hire-me-icon" src={HireMeIcon} alt="" />
          <h1>Hire Me</h1>
        </Link>
      </div>
    </div>
  );
}
