import React from "react-bootstrap";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      data-bs-theme="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/home">
          <a>
            <svg
              width="277"
              height="26"
              viewBox="0 0 277 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.695 1.9L15.505 25H8.435L0.21 1.9H6.545L10.78 15.865L12.04 20.415L13.265 15.935L17.57 1.9H23.695ZM31.85 25.35C29.9133 25.35 28.2333 24.9883 26.81 24.265C25.41 23.5417 24.325 22.5033 23.555 21.15C22.785 19.7967 22.4 18.1633 22.4 16.25C22.4 14.3367 22.785 12.7033 23.555 11.35C24.325 9.99667 25.3983 8.95833 26.775 8.235C28.175 7.51167 29.7733 7.15 31.57 7.15C33.4133 7.15 34.9767 7.51167 36.26 8.235C37.5667 8.935 38.5583 9.915 39.235 11.175C39.9117 12.4117 40.25 13.835 40.25 15.445C40.25 15.865 40.2383 16.285 40.215 16.705C40.1917 17.125 40.1567 17.475 40.11 17.755H26.25V14.57H37.485L34.65 15.655C34.65 14.255 34.3933 13.1817 33.88 12.435C33.39 11.6883 32.62 11.315 31.57 11.315C30.8233 11.315 30.1817 11.49 29.645 11.84C29.1317 12.19 28.735 12.7383 28.455 13.485C28.1983 14.2317 28.07 15.1883 28.07 16.355C28.07 17.4983 28.2217 18.4317 28.525 19.155C28.8283 19.855 29.26 20.3683 29.82 20.695C30.38 20.9983 31.0567 21.15 31.85 21.15C32.7367 21.15 33.4367 20.975 33.95 20.625C34.4867 20.275 34.8833 19.785 35.14 19.155L39.9 20.73C39.5733 21.7333 39.0017 22.585 38.185 23.285C37.3917 23.9617 36.435 24.475 35.315 24.825C34.2183 25.175 33.0633 25.35 31.85 25.35ZM49.9885 1.935V18.77C49.9885 19.61 50.1868 20.2167 50.5835 20.59C51.0035 20.94 51.5751 21.115 52.2985 21.115C52.8585 21.115 53.3368 21.0567 53.7335 20.94C54.1535 20.8 54.5268 20.6017 54.8535 20.345L55.4835 24.02C54.9001 24.44 54.1651 24.7667 53.2785 25C52.3918 25.2333 51.4818 25.35 50.5485 25.35C49.2185 25.35 48.0635 25.1633 47.0835 24.79C46.1268 24.4167 45.3801 23.8217 44.8435 23.005C44.3301 22.1883 44.0618 21.1033 44.0385 19.75V3.58L49.9885 1.935ZM55.2035 7.5V11.735H41.0285V7.5H55.2035ZM160.369 18.385C159.926 19.995 159.214 21.325 158.234 22.375C157.254 23.4017 156.088 24.16 154.734 24.65C153.381 25.1167 151.888 25.35 150.254 25.35C147.921 25.35 145.903 24.8833 144.199 23.95C142.496 22.9933 141.189 21.6283 140.279 19.855C139.369 18.0817 138.914 15.9467 138.914 13.45C138.914 10.9533 139.369 8.81833 140.279 7.045C141.189 5.27167 142.496 3.91833 144.199 2.985C145.903 2.02833 147.909 1.55 150.219 1.55C151.829 1.55 153.311 1.78333 154.664 2.25C156.018 2.69333 157.161 3.38167 158.094 4.315C159.028 5.24833 159.693 6.45 160.089 7.92L154.804 10.055C154.478 8.60833 153.941 7.61667 153.194 7.08C152.471 6.54333 151.549 6.275 150.429 6.275C149.333 6.275 148.376 6.54333 147.559 7.08C146.766 7.61667 146.148 8.42167 145.704 9.495C145.284 10.545 145.074 11.8633 145.074 13.45C145.074 15.0133 145.273 16.3317 145.669 17.405C146.066 18.4783 146.661 19.2833 147.454 19.82C148.271 20.3567 149.274 20.625 150.464 20.625C151.584 20.625 152.529 20.3217 153.299 19.715C154.093 19.085 154.629 18.1283 154.909 16.845L160.369 18.385ZM170.928 7.15C172.771 7.15 174.381 7.51167 175.758 8.235C177.158 8.935 178.243 9.97333 179.013 11.35C179.806 12.7033 180.203 14.3367 180.203 16.25C180.203 18.1633 179.806 19.8083 179.013 21.185C178.243 22.5383 177.158 23.5767 175.758 24.3C174.381 25 172.771 25.35 170.928 25.35C169.131 25.35 167.533 25 166.133 24.3C164.733 23.5767 163.636 22.5383 162.843 21.185C162.073 19.8083 161.688 18.1633 161.688 16.25C161.688 14.3367 162.073 12.7033 162.843 11.35C163.636 9.97333 164.733 8.935 166.133 8.235C167.533 7.51167 169.131 7.15 170.928 7.15ZM170.928 11.385C170.251 11.385 169.668 11.5483 169.178 11.875C168.688 12.2017 168.314 12.7267 168.058 13.45C167.801 14.1733 167.673 15.1067 167.673 16.25C167.673 17.3933 167.801 18.3267 168.058 19.05C168.314 19.75 168.688 20.275 169.178 20.625C169.668 20.9517 170.251 21.115 170.928 21.115C171.628 21.115 172.223 20.9517 172.713 20.625C173.203 20.275 173.576 19.75 173.833 19.05C174.089 18.3267 174.218 17.3933 174.218 16.25C174.218 15.1067 174.089 14.1733 173.833 13.45C173.576 12.7267 173.203 12.2017 172.713 11.875C172.223 11.5483 171.628 11.385 170.928 11.385ZM182.85 25V7.5H188.17L188.485 13.52L187.82 12.855C188.053 11.595 188.462 10.545 189.045 9.705C189.652 8.865 190.398 8.235 191.285 7.815C192.195 7.37167 193.21 7.15 194.33 7.15C195.543 7.15 196.593 7.38333 197.48 7.85C198.39 8.31667 199.102 9.005 199.615 9.915C200.128 10.825 200.385 11.9683 200.385 13.345V25H194.435V14.92C194.435 13.7067 194.202 12.8667 193.735 12.4C193.268 11.9333 192.673 11.7 191.95 11.7C191.39 11.7 190.865 11.84 190.375 12.12C189.885 12.3767 189.5 12.7967 189.22 13.38C188.94 13.9633 188.8 14.745 188.8 15.725V25H182.85ZM203.854 25V7.5H209.174L209.489 13.52L208.824 12.855C209.057 11.595 209.466 10.545 210.049 9.705C210.656 8.865 211.402 8.235 212.289 7.815C213.199 7.37167 214.214 7.15 215.334 7.15C216.547 7.15 217.597 7.38333 218.484 7.85C219.394 8.31667 220.106 9.005 220.619 9.915C221.132 10.825 221.389 11.9683 221.389 13.345V25H215.439V14.92C215.439 13.7067 215.206 12.8667 214.739 12.4C214.272 11.9333 213.677 11.7 212.954 11.7C212.394 11.7 211.869 11.84 211.379 12.12C210.889 12.3767 210.504 12.7967 210.224 13.38C209.944 13.9633 209.804 14.745 209.804 15.725V25H203.854ZM233.398 25.35C231.461 25.35 229.781 24.9883 228.358 24.265C226.958 23.5417 225.873 22.5033 225.103 21.15C224.333 19.7967 223.948 18.1633 223.948 16.25C223.948 14.3367 224.333 12.7033 225.103 11.35C225.873 9.99667 226.946 8.95833 228.323 8.235C229.723 7.51167 231.321 7.15 233.118 7.15C234.961 7.15 236.525 7.51167 237.808 8.235C239.115 8.935 240.106 9.915 240.783 11.175C241.46 12.4117 241.798 13.835 241.798 15.445C241.798 15.865 241.786 16.285 241.763 16.705C241.74 17.125 241.705 17.475 241.658 17.755H227.798V14.57H239.033L236.198 15.655C236.198 14.255 235.941 13.1817 235.428 12.435C234.938 11.6883 234.168 11.315 233.118 11.315C232.371 11.315 231.73 11.49 231.193 11.84C230.68 12.19 230.283 12.7383 230.003 13.485C229.746 14.2317 229.618 15.1883 229.618 16.355C229.618 17.4983 229.77 18.4317 230.073 19.155C230.376 19.855 230.808 20.3683 231.368 20.695C231.928 20.9983 232.605 21.15 233.398 21.15C234.285 21.15 234.985 20.975 235.498 20.625C236.035 20.275 236.431 19.785 236.688 19.155L241.448 20.73C241.121 21.7333 240.55 22.585 239.733 23.285C238.94 23.9617 237.983 24.475 236.863 24.825C235.766 25.175 234.611 25.35 233.398 25.35ZM252.722 7.15C254.495 7.15 255.965 7.40667 257.132 7.92C258.322 8.41 259.243 9.075 259.897 9.915C260.573 10.7317 260.993 11.6183 261.157 12.575L255.662 14.395C255.498 13.3917 255.195 12.645 254.752 12.155C254.332 11.6417 253.713 11.385 252.897 11.385C252.15 11.385 251.52 11.56 251.007 11.91C250.517 12.2367 250.143 12.7733 249.887 13.52C249.63 14.2433 249.502 15.1767 249.502 16.32C249.502 17.4633 249.642 18.3967 249.922 19.12C250.202 19.82 250.598 20.3333 251.112 20.66C251.625 20.9633 252.232 21.115 252.932 21.115C253.515 21.115 253.993 21.01 254.367 20.8C254.763 20.5667 255.09 20.24 255.347 19.82C255.603 19.4 255.767 18.8867 255.837 18.28L261.192 19.995C261.028 21.0217 260.585 21.9433 259.862 22.76C259.162 23.5533 258.228 24.1833 257.062 24.65C255.895 25.1167 254.53 25.35 252.967 25.35C251.053 25.35 249.385 25 247.962 24.3C246.538 23.5767 245.442 22.5383 244.672 21.185C243.902 19.8083 243.517 18.1633 243.517 16.25C243.517 14.3367 243.902 12.7033 244.672 11.35C245.442 9.97333 246.515 8.935 247.892 8.235C249.292 7.51167 250.902 7.15 252.722 7.15ZM270.9 1.935V18.77C270.9 19.61 271.098 20.2167 271.495 20.59C271.915 20.94 272.487 21.115 273.21 21.115C273.77 21.115 274.248 21.0567 274.645 20.94C275.065 20.8 275.438 20.6017 275.765 20.345L276.395 24.02C275.812 24.44 275.077 24.7667 274.19 25C273.303 25.2333 272.393 25.35 271.46 25.35C270.13 25.35 268.975 25.1633 267.995 24.79C267.038 24.4167 266.292 23.8217 265.755 23.005C265.242 22.1883 264.973 21.1033 264.95 19.75V3.58L270.9 1.935ZM276.115 7.5V11.735H261.94V7.5H276.115Z"
                fill="white"
              />
              <path
                d="M62.1168 25L55.4668 1.9H61.8718L65.7918 20.135L69.9218 1.9H75.3818L79.6168 20.1L83.4668 1.9H89.6618L82.9768 25H76.4318L73.7018 13.8L72.6518 8.165H72.5818L71.5668 13.8L68.8718 25H62.1168ZM98.1094 25.35C96.1727 25.35 94.4927 24.9883 93.0694 24.265C91.6694 23.5417 90.5844 22.5033 89.8144 21.15C89.0444 19.7967 88.6594 18.1633 88.6594 16.25C88.6594 14.3367 89.0444 12.7033 89.8144 11.35C90.5844 9.99667 91.6577 8.95833 93.0344 8.235C94.4344 7.51167 96.0327 7.15 97.8294 7.15C99.6727 7.15 101.236 7.51167 102.519 8.235C103.826 8.935 104.818 9.915 105.494 11.175C106.171 12.4117 106.509 13.835 106.509 15.445C106.509 15.865 106.498 16.285 106.474 16.705C106.451 17.125 106.416 17.475 106.369 17.755H92.5094V14.57H103.744L100.909 15.655C100.909 14.255 100.653 13.1817 100.139 12.435C99.6494 11.6883 98.8794 11.315 97.8294 11.315C97.0827 11.315 96.441 11.49 95.9044 11.84C95.391 12.19 94.9944 12.7383 94.7144 13.485C94.4577 14.2317 94.3294 15.1883 94.3294 16.355C94.3294 17.4983 94.481 18.4317 94.7844 19.155C95.0877 19.855 95.5194 20.3683 96.0794 20.695C96.6394 20.9983 97.316 21.15 98.1094 21.15C98.996 21.15 99.696 20.975 100.209 20.625C100.746 20.275 101.143 19.785 101.399 19.155L106.159 20.73C105.833 21.7333 105.261 22.585 104.444 23.285C103.651 23.9617 102.694 24.475 101.574 24.825C100.478 25.175 99.3227 25.35 98.1094 25.35ZM115.018 0.0799996V19.05C115.018 19.82 115.146 20.3683 115.403 20.695C115.66 21.0217 116.091 21.185 116.698 21.185C117.048 21.185 117.34 21.1617 117.573 21.115C117.806 21.0683 118.086 20.9983 118.413 20.905L118.028 24.475C117.608 24.7317 117.06 24.9417 116.383 25.105C115.706 25.2683 115.041 25.35 114.388 25.35C112.521 25.35 111.168 24.9183 110.328 24.055C109.488 23.1917 109.068 21.78 109.068 19.82V0.0799996H115.018ZM125.768 0.0799996V19.05C125.768 19.82 125.896 20.3683 126.153 20.695C126.41 21.0217 126.841 21.185 127.448 21.185C127.798 21.185 128.09 21.1617 128.323 21.115C128.556 21.0683 128.836 20.9983 129.163 20.905L128.778 24.475C128.358 24.7317 127.81 24.9417 127.133 25.105C126.456 25.2683 125.791 25.35 125.138 25.35C123.271 25.35 121.918 24.9183 121.078 24.055C120.238 23.1917 119.818 21.78 119.818 19.82V0.0799996H125.768Z"
                fill="#63CE68"
              />
            </svg>
          </a>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/discover">Discover</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;