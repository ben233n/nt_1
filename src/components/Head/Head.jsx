import React from 'react'
import { Link } from 'react-router'
import styles from './Head.module.css'

const Head = () => {
  return (
    <div className={styles.bg}>
    <div className={`${styles.container} container `}>
      {/* logo */} 
      <Link to="/" className={styles.logo}>
        <svg width="164" height="80" viewBox="0 0 164 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
          <path className={styles.svg_area} d="M60.2279 53V29.544H63.2359L71.8119 44.328L74.3399 49.16H74.4999C74.3932 47.9867 74.2972 46.76 74.2119 45.48C74.1265 44.2 74.0839 42.952 74.0839 41.736V29.544H76.8999V53H73.8599L65.3159 38.184L62.7879 33.384H62.6599C62.7239 34.5573 62.7985 35.7627 62.8839 37C62.9692 38.216 63.0119 39.4427 63.0119 40.68V53H60.2279ZM87.0649 53.416C86.1049 53.416 85.2409 53.224 84.4729 52.84C83.7049 52.456 83.0969 51.9013 82.6489 51.176C82.2222 50.4293 82.0089 49.5333 82.0089 48.488C82.0089 46.5893 82.8515 45.1387 84.5369 44.136C86.2435 43.112 88.9529 42.3973 92.6649 41.992C92.6649 41.2453 92.5582 40.5413 92.3449 39.88C92.1529 39.1973 91.8009 38.6533 91.2889 38.248C90.7769 37.8213 90.0409 37.608 89.0809 37.608C88.0782 37.608 87.1289 37.8107 86.2329 38.216C85.3582 38.6 84.5689 39.016 83.8649 39.464L82.7449 37.448C83.2782 37.1067 83.8969 36.7653 84.6009 36.424C85.3049 36.0613 86.0729 35.7627 86.9049 35.528C87.7369 35.2933 88.6222 35.176 89.5609 35.176C90.9689 35.176 92.1102 35.4747 92.9849 36.072C93.8809 36.6693 94.5315 37.5013 94.9369 38.568C95.3635 39.6133 95.5769 40.8613 95.5769 42.312V53H93.1769L92.9209 50.92H92.8249C92.0142 51.6027 91.1182 52.1893 90.1369 52.68C89.1769 53.1707 88.1529 53.416 87.0649 53.416ZM87.8969 51.048C88.7289 51.048 89.5182 50.856 90.2649 50.472C91.0329 50.088 91.8329 49.5227 92.6649 48.776V43.944C90.7235 44.1573 89.1769 44.4667 88.0249 44.872C86.8729 45.256 86.0515 45.736 85.5609 46.312C85.0702 46.8667 84.8249 47.528 84.8249 48.296C84.8249 49.2987 85.1235 50.0133 85.7209 50.44C86.3182 50.8453 87.0435 51.048 87.8969 51.048ZM105.974 53.416C104.758 53.416 103.787 53.1813 103.062 52.712C102.336 52.2213 101.814 51.5387 101.494 50.664C101.195 49.7893 101.046 48.776 101.046 47.624V37.992H98.4536V35.784L101.206 35.624L101.526 30.728H103.958V35.624H108.694V37.992H103.958V47.72C103.958 48.7653 104.15 49.5867 104.534 50.184C104.939 50.76 105.643 51.048 106.646 51.048C106.966 51.048 107.307 51.0053 107.67 50.92C108.032 50.8133 108.352 50.696 108.63 50.568L109.206 52.776C108.715 52.9467 108.192 53.096 107.638 53.224C107.083 53.352 106.528 53.416 105.974 53.416ZM117.684 53.416C115.849 53.416 114.495 52.84 113.62 51.688C112.767 50.536 112.34 48.8507 112.34 46.632V35.624H115.284V46.28C115.284 47.88 115.54 49.0533 116.052 49.8C116.564 50.5253 117.396 50.888 118.548 50.888C119.444 50.888 120.244 50.6533 120.948 50.184C121.652 49.7147 122.42 48.968 123.252 47.944V35.624H126.164V53H123.732L123.508 50.28H123.412C122.601 51.2187 121.737 51.976 120.82 52.552C119.924 53.128 118.879 53.416 117.684 53.416ZM132.034 53V35.624H134.434L134.722 38.792H134.786C135.383 37.6827 136.108 36.808 136.962 36.168C137.836 35.5067 138.754 35.176 139.714 35.176C140.119 35.176 140.46 35.208 140.738 35.272C141.036 35.3147 141.314 35.4107 141.57 35.56L141.026 38.088C140.727 38.0027 140.46 37.9387 140.226 37.896C139.991 37.832 139.692 37.8 139.33 37.8C138.626 37.8 137.868 38.1093 137.058 38.728C136.247 39.3253 135.554 40.36 134.978 41.832V53H132.034ZM150.754 53.416C149.346 53.416 148.024 53.064 146.786 52.36C145.549 51.6347 144.557 50.6 143.81 49.256C143.085 47.8907 142.722 46.248 142.722 44.328C142.722 42.3867 143.085 40.744 143.81 39.4C144.557 38.0347 145.549 36.9893 146.786 36.264C148.024 35.5387 149.346 35.176 150.754 35.176C151.821 35.176 152.834 35.3787 153.794 35.784C154.776 36.1893 155.64 36.7867 156.386 37.576C157.133 38.3653 157.72 39.3253 158.146 40.456C158.573 41.5867 158.786 42.8773 158.786 44.328C158.786 46.248 158.413 47.8907 157.666 49.256C156.92 50.6 155.938 51.6347 154.722 52.36C153.506 53.064 152.184 53.416 150.754 53.416ZM150.754 50.984C151.757 50.984 152.632 50.7067 153.378 50.152C154.146 49.5973 154.744 48.8187 155.17 47.816C155.597 46.8133 155.81 45.6507 155.81 44.328C155.81 42.984 155.597 41.8107 155.17 40.808C154.744 39.8053 154.146 39.0267 153.378 38.472C152.632 37.9173 151.757 37.64 150.754 37.64C149.752 37.64 148.866 37.9173 148.098 38.472C147.352 39.0267 146.765 39.8053 146.338 40.808C145.933 41.8107 145.73 42.984 145.73 44.328C145.73 45.6507 145.933 46.8133 146.338 47.816C146.765 48.8187 147.352 49.5973 148.098 50.152C148.866 50.7067 149.752 50.984 150.754 50.984Z" fill="#3D4341"/>
          <path className={styles.svg_line} d="M24.4 53.2V53.1824L24.3994 53.1647C23.8874 38.6598 20.482 30.2873 16.8246 25.3185C15.0746 22.9409 13.2481 21.3437 11.7306 20.2574C14.4016 20.6719 17.706 21.7531 20.7734 24.5718C25.5924 29.0003 30.0377 37.9214 30.1957 56H24.4V53.2ZM14 55.1V55.0785L13.9991 55.057C13.6257 46.375 10.7955 40.8256 7.73771 37.2504C6.41713 35.7063 5.03967 34.5261 3.83905 33.6361C8.78827 34.3879 12.4434 36.3336 14.9932 39.4037C18.0572 43.0928 19.6608 48.5648 19.7913 56H14V55.1ZM36.4088 27.2207C37.4763 26.7998 38.5999 26.4625 39.7602 26.2132C39.3018 26.536 38.8247 26.8987 38.3392 27.3081C36.4079 28.9363 34.3713 31.279 32.8152 34.7419C32.3357 33.3221 31.725 31.9291 30.9878 30.5728C32.4358 29.2083 34.2776 28.0611 36.4088 27.2207ZM40.6092 56H34.8108C35.0151 46.6196 38.0922 41.0095 41.6305 37.7234C43.945 35.574 46.4964 34.3816 48.6641 33.7907C47.5443 34.8922 46.2776 36.3761 45.0862 38.3472C42.7635 42.1901 40.7608 47.8266 40.6092 56Z" stroke="#3D4341" stroke-width="2"/>
        </svg>
      </Link>

      <nav className={styles.nav}>    
        <Link to="/" className={styles.nav_li}>首頁</Link>
        <Link to="/shop/" className={styles.nav_li}>商品</Link>
        <li className={styles.nav_li}>訂閱方案</li>
        <li className={styles.nav_li}>關於我們</li>
      </nav>
      <nav className={styles.nav}>   
        {/* 購物車 */} 
        <svg width="36" className={`${styles.shop} ${styles.icon}`} height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.svg_area} d="M24.75 12.945C24.135 12.945 23.625 12.435 23.625 11.82V9.75C23.625 8.175 22.95 6.645 21.78 5.58C20.595 4.5 19.065 4.005 17.445 4.155C14.745 4.41 12.375 7.17 12.375 10.05V11.505C12.375 12.12 11.865 12.63 11.25 12.63C10.635 12.63 10.125 12.12 10.125 11.505V10.035C10.125 6 13.38 2.28 17.235 1.905C19.485 1.695 21.645 2.4 23.295 3.915C24.93 5.4 25.875 7.53 25.875 9.75V11.82C25.875 12.435 25.365 12.945 24.75 12.945Z" fill="#3D4341"/>
          <path className={styles.svg_area} d="M22.5 34.125H13.5C6.56997 34.125 5.27997 30.9 4.94997 27.765L3.82497 18.78C3.65997 17.16 3.59997 14.835 5.17497 13.095C6.52497 11.595 8.75997 10.875 12 10.875H24C27.255 10.875 29.49 11.61 30.825 13.095C32.385 14.835 32.34 17.16 32.175 18.75L31.05 27.765C30.72 30.9 29.43 34.125 22.5 34.125ZM12 13.125C9.46497 13.125 7.72497 13.62 6.83997 14.61C6.10497 15.42 5.86497 16.665 6.05997 18.525L7.18497 27.51C7.43997 29.91 8.09997 31.89 13.5 31.89H22.5C27.9 31.89 28.56 29.925 28.815 27.54L29.94 18.525C30.135 16.695 29.895 15.45 29.16 14.625C28.275 13.62 26.535 13.125 24 13.125H12Z" fill="#3D4341"/>
          <path className={styles.svg_area} d="M23.13 19.725C22.29 19.725 21.615 19.05 21.615 18.225C21.615 17.4 22.29 16.725 23.115 16.725C23.94 16.725 24.615 17.4 24.615 18.225C24.615 19.05 23.955 19.725 23.13 19.725Z" fill="#3D4341"/>
          <path className={styles.svg_area} d="M12.63 19.725C11.79 19.725 11.115 19.05 11.115 18.225C11.115 17.4 11.79 16.725 12.615 16.725C13.44 16.725 14.115 17.4 14.115 18.225C14.115 19.05 13.455 19.725 12.63 19.725Z" fill="#3D4341"/>
        </svg>
        {/* 使用者 */}
        <svg className={`${styles.user} ${styles.icon}`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.svg_area} d="M18 19.125C13.245 19.125 9.375 15.255 9.375 10.5C9.375 5.745 13.245 1.875 18 1.875C22.755 1.875 26.625 5.745 26.625 10.5C26.625 15.255 22.755 19.125 18 19.125ZM18 4.125C14.49 4.125 11.625 6.99 11.625 10.5C11.625 14.01 14.49 16.875 18 16.875C21.51 16.875 24.375 14.01 24.375 10.5C24.375 6.99 21.51 4.125 18 4.125Z" fill="#3D4341"/>
          <path className={styles.svg_area} d="M30.8852 34.125C30.2702 34.125 29.7602 33.615 29.7602 33C29.7602 27.825 24.4802 23.625 18.0002 23.625C11.5202 23.625 6.24023 27.825 6.24023 33C6.24023 33.615 5.73023 34.125 5.11523 34.125C4.50023 34.125 3.99023 33.615 3.99023 33C3.99023 26.595 10.2752 21.375 18.0002 21.375C25.7252 21.375 32.0102 26.595 32.0102 33C32.0102 33.615 31.5002 34.125 30.8852 34.125Z" fill="#3D4341"/>
        </svg>
        {/* 漢堡選單 */}
        <svg className={`${styles.menu} ${styles.icon}`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.svg_area} d="M31.5 11.625H4.5C3.885 11.625 3.375 11.115 3.375 10.5C3.375 9.885 3.885 9.375 4.5 9.375H31.5C32.115 9.375 32.625 9.885 32.625 10.5C32.625 11.115 32.115 11.625 31.5 11.625Z" fill="#3D4341"/>
          <path className={styles.svg_area} d="M31.5 19.125H4.5C3.885 19.125 3.375 18.615 3.375 18C3.375 17.385 3.885 16.875 4.5 16.875H31.5C32.115 16.875 32.625 17.385 32.625 18C32.625 18.615 32.115 19.125 31.5 19.125Z" fill="#3D4341"/>
          <path className={styles.svg_area} d="M31.5 26.625H4.5C3.885 26.625 3.375 26.115 3.375 25.5C3.375 24.885 3.885 24.375 4.5 24.375H31.5C32.115 24.375 32.625 24.885 32.625 25.5C32.625 26.115 32.115 26.625 31.5 26.625Z" fill="#3D4341"/>
        </svg>
      </nav>
    </div>
  </div>
  )
}

export default Head