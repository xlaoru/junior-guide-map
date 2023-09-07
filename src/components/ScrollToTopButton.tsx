import ScrollToTop from "react-scroll-to-top"
type Props = {}

export default function ScrollToTopButton({}: Props) {
  return (
    <div>
        <ScrollToTop
            smooth
            viewBox="0 0 32 32"
            svgPath="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z" 
        />
    </div>
  )
}