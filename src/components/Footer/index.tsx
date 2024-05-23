import { Container, Container_Svg, P_footer } from './styles'
import { Logotipo } from '../Header/styles'
import logo from '../../assets/images/logo.png'
const Footer = () => (
  <Container>
    <Logotipo src={logo} />
    <Container_Svg>
      <svg
        style={{ marginRight: '8px' }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_9_2212)">
          <path
            d="M12 14.1094C13.1625 14.1094 14.114 13.1625 14.114 11.9953C14.114 11.5359 13.964 11.1094 13.7156 10.7625C13.3312 10.2328 12.7078 9.88123 12.0047 9.88123C11.3015 9.88123 10.6781 10.2281 10.2937 10.7625C10.0453 11.1094 9.89528 11.5359 9.89528 11.9953C9.89059 13.1625 10.8375 14.1094 12 14.1094Z"
            fill="#E66767"
          />
          <path
            d="M16.6125 9.41719V7.64531V7.38281H16.35L14.5781 7.3875L14.5875 9.42188L16.6125 9.41719Z"
            fill="#E66767"
          />
          <path
            d="M15.2812 12C15.2812 13.8094 13.8094 15.2813 12 15.2813C10.1906 15.2813 8.71875 13.8094 8.71875 12C8.71875 11.5641 8.80781 11.1469 8.9625 10.7672H7.17188V15.6797C7.17188 16.3125 7.6875 16.8281 8.32031 16.8281H15.6797C16.3125 16.8281 16.8281 16.3125 16.8281 15.6797V10.7672H15.0375C15.1969 11.1469 15.2812 11.5641 15.2812 12Z"
            fill="#E66767"
          />
          <path
            d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM18 10.7672V15.6797C18 16.9594 16.9594 18 15.6797 18H8.32031C7.04063 18 6 16.9594 6 15.6797V10.7672V8.31562C6 7.03594 7.04063 5.99531 8.32031 5.99531H15.6797C16.9594 5.99531 18 7.03594 18 8.31562V10.7672Z"
            fill="#E66767"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_2212">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        style={{ marginRight: '8px' }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_9_2210)">
          <path
            d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM14.6484 9.96563L14.5125 11.7609H12.6703V17.9953H10.3453V11.7609H9.10312V9.96563H10.3453V8.76094C10.3453 8.23125 10.3594 7.41094 10.7437 6.9C11.1516 6.36094 11.7094 5.99531 12.6703 5.99531C14.2359 5.99531 14.8922 6.22031 14.8922 6.22031L14.5828 8.05781C14.5828 8.05781 14.0672 7.90781 13.5844 7.90781C13.1016 7.90781 12.6703 8.08125 12.6703 8.56406V9.96563H14.6484Z"
            fill="#E66767"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_2210">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_9_2218)">
          <path
            d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12.2309 10.1902C12.2348 10.1904 12.2386 10.1912 12.2426 10.1914C12.2016 10.0155 12.1804 9.83212 12.1804 9.64378C12.1804 8.31689 13.2562 7.24106 14.5833 7.24106C15.2743 7.24106 15.8987 7.53286 16.3371 7.99988C16.7871 7.91128 17.2129 7.75734 17.6087 7.55348C17.6922 7.51298 17.7759 7.47272 17.8581 7.42814C17.7157 7.86567 17.4482 8.24433 17.1015 8.5312C17.0076 8.60508 16.9111 8.67642 16.805 8.73483C16.8122 8.73398 16.8192 8.73239 16.8264 8.7315C16.8194 8.73586 16.8135 8.74181 16.8063 8.74613C17.2002 8.69902 17.5778 8.60311 17.9365 8.46759C18.0169 8.43984 18.0972 8.41177 18.1769 8.38078C17.8561 8.85698 17.4525 9.27586 16.9874 9.61167C16.992 9.71466 16.9943 9.8182 16.9943 9.9225C16.9943 13.0976 14.5776 16.7588 10.1579 16.7588C8.80102 16.7588 7.53802 16.3612 6.47466 15.6794C6.66263 15.7016 6.85397 15.7129 7.04789 15.7129C7.94489 15.7129 8.78292 15.4659 9.50334 15.0407C9.6848 14.9362 9.86231 14.8233 10.0318 14.6955C10.0272 14.6954 10.023 14.6943 10.0184 14.6942C10.0228 14.6908 10.0276 14.6878 10.032 14.6844C9.12155 14.6676 8.33583 14.1435 7.94255 13.3837C7.88395 13.2671 7.8338 13.1449 7.79423 13.0167C7.93889 13.0439 8.08702 13.0588 8.23955 13.0588C8.3985 13.0588 8.55202 13.0383 8.70225 13.0089C8.75836 13.0011 8.81503 12.9945 8.87034 12.9854C8.86303 12.9839 8.85661 12.9807 8.8493 12.9792C8.85689 12.9772 8.86505 12.9765 8.87255 12.9745C7.77338 12.7537 6.94509 11.7825 6.94509 10.6185C6.94509 10.6093 6.94519 10.6003 6.94528 10.5913L6.94641 10.5887C7.2052 10.7323 7.49452 10.8274 7.80094 10.8671C7.87636 10.8797 7.95192 10.8913 8.02744 10.8979C8.02228 10.8945 8.01783 10.8902 8.01272 10.8868C8.01984 10.887 8.02664 10.8885 8.03367 10.8887C7.38895 10.4579 6.96478 9.7223 6.96478 8.88872C6.96478 8.50706 7.05797 8.1487 7.21636 7.82827C7.24163 7.78008 7.26408 7.73086 7.29309 7.68417C8.35767 8.98833 9.89541 9.88594 11.6431 10.1287C11.8381 10.1571 12.0337 10.1823 12.2316 10.1938C12.2313 10.1926 12.2312 10.1914 12.2309 10.1902Z"
            fill="#E66767"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_2218">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Container_Svg>
    <P_footer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </P_footer>
  </Container>
)
export default Footer
